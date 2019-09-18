/*
 *    Copyright 2018-2019 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package net.atayun.bazooka.gateway.component.strategy;


import net.atayun.bazooka.base.annotation.StrategyNum;
import net.atayun.bazooka.base.dcos.dto.MarathonEventDeployDto;
import net.atayun.bazooka.deploy.api.AppOperationEventApi;
import net.atayun.bazooka.deploy.api.param.MarathonCallbackParam;
import net.atayun.bazooka.rms.api.dto.rsp.ClusterMarathonConfigRspDto;
import com.youyu.common.api.Result;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpResponse;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import static com.alibaba.fastjson.JSON.parseObject;
import static com.alibaba.fastjson.JSON.toJSONString;
import static net.atayun.bazooka.base.bean.SpringContextBean.getBean;
import static net.atayun.bazooka.base.constant.CommonConstants.PROTOCOL;
import static net.atayun.bazooka.base.enums.status.FinishStatusEnum.FAILURE;
import static net.atayun.bazooka.base.enums.status.FinishStatusEnum.SUCCESS;
import static net.atayun.bazooka.base.utils.StringUtil.eq;
import static java.nio.charset.StandardCharsets.UTF_8;
import static java.util.Objects.nonNull;
import static java.util.concurrent.CompletableFuture.runAsync;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.apache.commons.lang.exception.ExceptionUtils.getFullStackTrace;
import static org.apache.commons.lang3.StringUtils.*;
import static org.apache.http.client.fluent.Request.Get;

/**
 * @author pqq
 * @version v1.0
 * @date 2019年7月29日 17:00:00
 * @work dcos集群发布策略
 * 注:常量和地址描述参考官网api:https://mesosphere.github.io/marathon/docs/event-bus.html
 */
@Slf4j
@Component
@StrategyNum(superClass = ClusterDeployStrategy.class, describe = "dcos集群发布策略")
public class ClusterDeployStrategy4Dcos extends ClusterDeployStrategy {
    /**
     * 事件开头
     */
    private static final String EVENT_PREFIX = "event: ";
    /**
     * 事件数据
     */
    private static final String DATA_PREFIX = "data: ";
    /**
     * 事件url地址后缀
     */
    private static final String EVENT_SUFFIX = ":8080/v2/events?event_type=deployment_success&event_type=deployment_failed";
    /**
     * 发布成功事件类型
     */
    private static final String EVENT_TYPE_SUCCESS = "deployment_success";

    @Override
    public void monitorDeployEvent(ClusterMarathonConfigRspDto clusterMarathonConfig) {
        Long clusterId = clusterMarathonConfig.getClusterId();
        log.info("开启集群id:[{}]对应的发布事件监听......", clusterId);

        runAsync(new Runnable() {
            @Override
            public void run() {
                String url = join(PROTOCOL, clusterMarathonConfig.getUrl(), EVENT_SUFFIX);
                while (true) {
                    try {
                        Request request = Get(url).addHeader("Accept", "text/event-stream");
                        Response response = request.execute();
                        if (nonNull(response)) {
                            doHandleResponse(response, clusterId);
                            continue;
                        }

                        doSleep(5L, clusterId);
                    } catch (IOException ex) {
                        log.error("集群id:[{}]监听发布事件异常信息:[{}]", clusterId, getFullStackTrace(ex));
                        doSleep(1L, clusterId);
                    }
                }
            }

            /**
             * 执行处理响应
             *
             * @param response
             * @param clusterId
             */
            private void doHandleResponse(Response response, Long clusterId) throws IOException {
                response.handleResponse(new ResponseHandler<String>() {
                    @Override
                    public String handleResponse(HttpResponse httpResponse) {
                        try (InputStream inputStream = httpResponse.getEntity().getContent();
                             InputStreamReader inputStreamReader = new InputStreamReader(inputStream, UTF_8);
                             BufferedReader bufferedReader = new BufferedReader(inputStreamReader)) {
                            String line;
                            while ((line = bufferedReader.readLine()) != null) {
                                if (!startsWith(line, EVENT_PREFIX)) {
                                    continue;
                                }
                                line = bufferedReader.readLine();
                                String data = substring(line, DATA_PREFIX.length());
                                MarathonEventDeployDto marathonEventDeploy = parseObject(data, MarathonEventDeployDto.class);
                                Result deployResult = getBean(AppOperationEventApi.class).marathonCallback(getMarathonCallbackParam(marathonEventDeploy));
                                log.info("集群id:[{}]对应调用发布模块响应结果:[{}]", clusterId, toJSONString(deployResult));
                            }
                        } catch (Exception ex) {
                            log.error("处理集群id:[{}]发布响应事件异常信息:[{}]", clusterId, getFullStackTrace(ex));
                        }
                        return "";
                    }

                    /**
                     * 获取MarathonCallbackParam对象
                     *
                     * @param marathonEventDeploy
                     * @return
                     */
                    private MarathonCallbackParam getMarathonCallbackParam(MarathonEventDeployDto marathonEventDeploy) {
                        MarathonCallbackParam marathonCallbackParam = new MarathonCallbackParam();

                        marathonCallbackParam.setMarathonDeploymentId(marathonEventDeploy.getId());
                        marathonCallbackParam.setMarathonDeploymentVersion(marathonEventDeploy.getPlan().getVersion());
                        marathonCallbackParam.setFinishStatus(eq(marathonEventDeploy.getEventType(), EVENT_TYPE_SUCCESS) ? SUCCESS : FAILURE);
                        return marathonCallbackParam;
                    }
                });
            }

            /**
             * 休眠seconds
             *
             * @param clusterId
             * @param seconds
             */
            private void doSleep(Long clusterId, Long seconds) {
                try {
                    SECONDS.sleep(seconds);
                } catch (InterruptedException ex) {
                    log.error("集群id:[{}]被打断异常信息:[{}]", clusterId, getFullStackTrace(ex));
                }
            }
        });
    }
}