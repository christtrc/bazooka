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
package net.atayun.bazooka.rms.api.api;

import net.atayun.bazooka.rms.api.dto.req.ClusterNodeReqDto;
import net.atayun.bazooka.rms.api.dto.rsp.ClusterNodeRspDto;
import com.youyu.common.api.PageData;
import com.youyu.common.api.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author pqq
 * @version v1.0
 * @date 2019年7月17日 17:00:00
 * @work 资源集群节点 Api
 */
@RequestMapping("/clusterNode")
public interface RmsClusterNodeApi {

    /**
     * 查询集群节点列表信息
     *
     * @param clusterNodeReqDto
     * @return
     */
    @ApiOperation("查询集群节点列表信息")
    @PostMapping("/getClusterNodePage")
    Result<PageData<ClusterNodeRspDto>> getClusterNodePage(@RequestBody ClusterNodeReqDto clusterNodeReqDto);

    /**
     * @create: zhangyingbin 2019/11/19 0019 下午 2:28
     * @Modifier:
     * @Description: 查询集群所有节点列表信息
     */
    @ApiOperation("查询集群所有节点列表信息")
    @GetMapping("/getAllClusterNodes")
    Result<List<ClusterNodeRspDto>> getAllClusterNodes(@RequestParam  Long clusterId);

    /**
     * 根据节点ID查询节点信息
     * @param nodeIds
     * @return
     */
    @ApiOperation("查询集群节点列表信息")
    @PostMapping("/getClusterNodeInfoByNodeIds")
    Result<List<ClusterNodeRspDto>> getClusterNodeInfoByNodeIds(@RequestBody List<Long> nodeIds);
}
