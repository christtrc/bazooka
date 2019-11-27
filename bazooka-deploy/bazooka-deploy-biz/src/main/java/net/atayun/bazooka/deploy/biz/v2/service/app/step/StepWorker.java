package net.atayun.bazooka.deploy.biz.v2.service.app.step;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import net.atayun.bazooka.base.bean.StrategyNumBean;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOpt;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOptFlowStep;
import net.atayun.bazooka.deploy.biz.v2.service.app.FlowStepService;

import static net.atayun.bazooka.base.bean.SpringContextBean.getBean;

/**
 * @author Ping
 */
@Slf4j
public class StepWorker {

    @Getter
    private AppOptFlowStep appOptFlowStep;

    @Getter
    private AppOpt appOpt;

    public StepWorker(AppOpt appOpt, AppOptFlowStep appOptFlowStep) {
        this.appOptFlowStep = appOptFlowStep;
        this.appOpt = appOpt;
    }

    public void doWork() {
        Step step = StrategyNumBean.getBeanInstance(Step.class, appOptFlowStep.getStep());
        try {
            appOptFlowStep.process();
            getBean(FlowStepService.class).update(appOptFlowStep);
            step.doWork(appOpt, appOptFlowStep);
            appOptFlowStep.success();
        } catch (Throwable throwable) {
            log.warn("步骤异常: ", throwable);
            appOptFlowStep.failure();
        } finally {
            if (appOptFlowStep.isSuccess()) {
                if (step instanceof SinglePhase) {
                    step.notification(appOpt, appOptFlowStep);
                }
            } else {
                step.notification(appOpt, appOptFlowStep);
            }
        }
    }
}
