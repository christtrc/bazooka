package net.atayun.bazooka.deploy.biz.v2.dal.entity.app;

import com.youyu.common.entity.JdbcMysqlEntity;
import lombok.Getter;
import lombok.Setter;
import net.atayun.bazooka.deploy.biz.v2.enums.FlowStepStatusEnum;

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

    private FlowStepStatusEnum status;

    private Map<String, Object> input;

    private Map<String, Object> output;

    private String logPath;

}
