package net.atayun.bazooka.deploy.biz.v2.service.app.impl;

import com.alibaba.fastjson.JSONObject;
import com.youyu.common.exception.BizException;
import net.atayun.bazooka.base.enums.AppOptEnum;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.EventWithMarathonEntity;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.DeployCountsEntity;
import net.atayun.bazooka.deploy.biz.v2.dal.dao.app.AppOptMapper;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOpt;
import net.atayun.bazooka.deploy.biz.v2.dal.entity.app.AppOptHis;
import net.atayun.bazooka.deploy.biz.v2.enums.AppOptStatusEnum;
import net.atayun.bazooka.deploy.biz.v2.param.AppActionParam;
import net.atayun.bazooka.deploy.biz.v2.param.AppOptHisMarathonParam;
import net.atayun.bazooka.deploy.biz.v2.param.AppOptHisParam;
import net.atayun.bazooka.deploy.biz.v2.service.app.AppOptService;
import net.atayun.bazooka.pms.api.dto.AppInfoDto;
import net.atayun.bazooka.pms.api.feign.AppApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import tk.mybatis.mapper.entity.Example;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static net.atayun.bazooka.base.bean.SpringContextBean.getBean;
import static net.atayun.bazooka.deploy.biz.v2.constant.DeployResultCodeConstants.MULTI_DEPLOYING_ENTITY_ERR_CODE;

/**
 * @author Ping
 */
@Service
public class AppOptServiceImpl implements AppOptService {

    @Autowired
    private AppOptMapper appOptMapper;

    @Override
    public AppOpt saveOpt(AppActionParam appActionParam) {
        AppInfoDto appInfo = getBean(AppApi.class).getAppInfoById(appActionParam.getAppId()).ifNotSuccessThrowException().getData();
        AppOpt appOpt;
        if (appActionParam.getEvent() == AppOptEnum.ROLLBACK) {
            Long templateEventId = JSONObject.parseObject(appActionParam.getDetail()).getLong("templateEventId");
            AppOpt template = selectById(templateEventId);
            appOpt = new AppOpt(appActionParam, appInfo, template);
        } else {
            appOpt = new AppOpt(appActionParam, appInfo);
        }
        appOptMapper.insertSelective(appOpt);
        return appOpt;
    }

    @Override
    public AppOpt selectById(Long optId) {
        return appOptMapper.selectByPrimaryKey(optId);
    }

    @Override
    public AppOpt selectLastSuccessByAppIdAndEnv(Long appId, Long envId) {
        //后续写sql 优化
        Example example = new Example(AppOpt.class);
        example.createCriteria().andEqualTo("appId", appId)
                .andEqualTo("envId", envId)
                .andEqualTo("status", AppOptStatusEnum.SUCCESS)
                .andIn("opt", Arrays.asList(AppOptEnum.IMAGE_DEPLOY,
                        AppOptEnum.MARATHON_BUILD_DEPLOY,
                        AppOptEnum.NODE_BUILD_DEPLOY,
                        AppOptEnum.ROLLBACK));
        example.orderBy("id").desc();
        List<AppOpt> appOpts = appOptMapper.selectByExample(example);
        return CollectionUtils.isEmpty(appOpts) ? null : appOpts.get(0);
    }

    @Override
    public void updateById(AppOpt appOpt) {
        appOptMapper.updateByPrimaryKeySelective(appOpt);
    }

    @Override
    public AppOpt selectByAppDeployUuidAndVersionForMarathon(String uuid, String version) {
        Example example = new Example(AppOpt.class);
        example.createCriteria().andEqualTo("appDeployUuid", uuid)
                .andEqualTo("appDeployVersion", version);
        return appOptMapper.selectOneByExample(example);
    }

    @Override
    public void updateStatus(Long id, AppOptStatusEnum status) {
        AppOpt appOpt = new AppOpt();
        appOpt.setId(id);
        appOpt.setStatus(status);
        appOptMapper.updateByPrimaryKeySelective(appOpt);
    }

    @Override
    public List<AppOpt> selectByAppIdAndStatus(Long appId, AppOptStatusEnum status) {
        Example example = new Example(AppOpt.class);
        example.createCriteria().andEqualTo("appId", appId)
                .andEqualTo("status", status);
        return appOptMapper.selectByExample(example);
    }

    @Override
    public List<AppOptHis> getAppOptHis(AppOptHisParam pageParam) {
        return appOptMapper.getAppOptHis(pageParam);
    }

    @Override
    public List<EventWithMarathonEntity> getAppOptHisMarathon(AppOptHisMarathonParam pageParam) {
        return appOptMapper.getAppOptHisMarathon(pageParam);
    }

    @Override
    public AppOpt selectRollbackEntity(Long appId, Long envId, AppOptStatusEnum statusEnum, AppOptEnum appOptEnum) {
        return appOptMapper.selectRollbackEntity(appId, envId, statusEnum, appOptEnum);
    }

    @Override
    public AppOpt isProcessing(Long appId, Long envId) {
        Example example = new Example(AppOpt.class);
        example.createCriteria()
                .andEqualTo("appId", appId)
                .andEqualTo("envId", envId)
                .andEqualTo("status", AppOptStatusEnum.PROCESS);
        List<AppOpt> deployEntities = appOptMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(deployEntities)) {
            return null;
        }
        if (deployEntities.size() > 1) {
            throw new BizException(MULTI_DEPLOYING_ENTITY_ERR_CODE, "发布记录异常");
        }
        return deployEntities.get(0);
    }

    @Override
    public List<DeployCountsEntity> deployCountsByProject(Long projectId, LocalDateTime leftDatetime) {
        return appOptMapper.deployCountsByProject(projectId, leftDatetime);
    }
}
