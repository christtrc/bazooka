package net.atayun.bazooka.deploy.biz.v2.dal.entity.app;

import com.youyu.common.entity.JdbcMysqlEntity;
import lombok.Getter;
import lombok.Setter;
import net.atayun.bazooka.deploy.biz.v2.enums.FlowStepStatusEnum;

import javax.persistence.Column;
import javax.persistence.Table;
import java.util.Map;

/**
 * @author Ping
 */
@Getter
@Setter
@Table(name = "deploy_app_opt_flow_step")
public class AppOptFlowStep extends JdbcMysqlEntity<Long> {

    private Long optId;

    private Integer stepSeq;

    private String step;

    @Column(name = "status")
    private FlowStepStatusEnum status;

    @Column(name = "input")
    private Map<String, Object> input;

    @Column(name = "output")
    private Map<String, Object> output;

    private String logPath;

    public void success() {
        this.setStatus(FlowStepStatusEnum.SUCCESS);
    }

    public void failure() {
        this.setStatus(FlowStepStatusEnum.FAILURE);
    }

    public void process() {
        this.setStatus(FlowStepStatusEnum.PROCESS);
    }

    public void standBy() {
        this.setStatus(FlowStepStatusEnum.STAND_BY);
    }

    public boolean isSuccess() {
        return this.status == FlowStepStatusEnum.SUCCESS;
    }

    public boolean isFailure() {
        return this.status == FlowStepStatusEnum.FAILURE;
    }

    public boolean isProcess() {
        return this.status == FlowStepStatusEnum.PROCESS;
    }

    public boolean isStandBy() {
        return this.status == FlowStepStatusEnum.STAND_BY;
    }
}
