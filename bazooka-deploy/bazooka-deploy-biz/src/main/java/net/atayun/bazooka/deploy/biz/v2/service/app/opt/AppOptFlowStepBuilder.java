package net.atayun.bazooka.deploy.biz.v2.service.app.opt;

import net.atayun.bazooka.base.enums.FlowStepEnum;
import net.atayun.bazooka.deploy.biz.v2.config.DeployLogProperties;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOptFlowStep;

import java.util.Map;

import static net.atayun.bazooka.base.bean.SpringContextBean.getBean;

/**
 * @author Ping
 */
public class AppOptFlowStepBuilder {

    private Long optId;

    private Integer seq;

    private FlowStepEnum step;

    private Map<String, Object> input;

    public AppOptFlowStepBuilder() {
    }

    public AppOptFlowStepBuilder setOptId(Long optId) {
        this.optId = optId;
        return this;
    }

    public AppOptFlowStepBuilder setSeq(Integer seq) {
        this.seq = seq;
        return this;
    }

    public AppOptFlowStepBuilder setStep(FlowStepEnum step) {
        this.step = step;
        return this;
    }

    public AppOptFlowStepBuilder setInput(Map<String, Object> input) {
        this.input = input;
        return this;
    }

    public AppOptFlowStep build() {
        String rootPath = getBean(DeployLogProperties.class).getRootPath();
        AppOptFlowStep appOptFlowStep = new AppOptFlowStep();
        appOptFlowStep.setOptId(optId);
        appOptFlowStep.standBy();
        appOptFlowStep.setStep(step);
        appOptFlowStep.setStepSeq(seq);
        appOptFlowStep.setInput(input);
        String logPath = rootPath + "/" + optId + "/" + step;
        appOptFlowStep.setLogPath(logPath);
        return appOptFlowStep;
    }
}
