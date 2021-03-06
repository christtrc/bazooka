package net.atayun.bazooka.deploy.biz.v2.service.jenkins.impl;

import net.atayun.bazooka.base.bean.StrategyNumBean;
import net.atayun.bazooka.deploy.biz.v2.constant.JenkinsCallbackConstants;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOpt;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOptFlowStep;
import net.atayun.bazooka.deploy.biz.v2.enums.FlowStepStatusEnum;
import net.atayun.bazooka.deploy.biz.v2.param.StepCallbackParam;
import net.atayun.bazooka.deploy.biz.v2.service.app.AppOptService;
import net.atayun.bazooka.deploy.biz.v2.service.app.FlowStepService;
import net.atayun.bazooka.deploy.biz.v2.service.app.step.Callback;
import net.atayun.bazooka.deploy.biz.v2.service.app.step.Step;
import net.atayun.bazooka.deploy.biz.v2.service.app.step.log.StepLogBuilder;
import net.atayun.bazooka.deploy.biz.v2.service.app.step.log.StepLogCollector;
import net.atayun.bazooka.deploy.biz.v2.service.jenkins.JenkinsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static net.atayun.bazooka.base.bean.SpringContextBean.getBean;

/**
 * @author Ping
 */
@Service
public class JenkinsServiceImpl implements JenkinsService {

    @Autowired
    private AppOptService appOptService;

    @Autowired
    private FlowStepService flowStepService;

    @Override
    public void stepCallback(StepCallbackParam stepCallbackParam) {
        Map<String, String> custom = stepCallbackParam.getCustom();
        long optId = Long.parseLong(custom.get(StepCallbackParam.CUSTOM_KEY_OPT_ID));
        AppOpt appOpt = appOptService.selectById(optId);

        long stepId = Long.parseLong(custom.get(StepCallbackParam.CUSTOM_KEY_STEP_ID));
        AppOptFlowStep appOptFlowStep = flowStepService.selectById(stepId);

        String result = stepCallbackParam.getResult();
        FlowStepStatusEnum stepStatusEnum = Objects.equals(result, JenkinsCallbackConstants.BUILD_RESULT_SUCCESS) ?
                FlowStepStatusEnum.SUCCESS : FlowStepStatusEnum.FAILURE;

        custom.put("jobName", stepCallbackParam.getJobName());
        custom.put("buildNumber", stepCallbackParam.getJobBuildNumber().toString());
        custom.remove(StepCallbackParam.CUSTOM_KEY_OPT_ID);
        custom.remove(StepCallbackParam.CUSTOM_KEY_STEP_ID);
        appOptFlowStep.setOutput(new HashMap<>(custom));
        appOptFlowStep.setStatus(stepStatusEnum);

        Step step = StrategyNumBean.getBeanInstance(Step.class, appOptFlowStep.getStep().name());
        try {
            if (step instanceof Callback) {
                ((Callback) step).callback(appOpt, appOptFlowStep);
            }
        } catch (Throwable throwable) {
            appOptFlowStep.failure();
            String msg = new StepLogBuilder().append("Jenkins回调异常").append(throwable).build();
            getBean(StepLogCollector.class).collect(appOptFlowStep, msg);
            throw throwable;
        } finally {
            step.updateFlowStepAndPublish(appOpt, appOptFlowStep);
        }
    }
}
