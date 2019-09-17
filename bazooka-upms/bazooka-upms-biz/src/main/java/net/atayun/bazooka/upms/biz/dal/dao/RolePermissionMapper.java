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
package net.atayun.bazooka.upms.biz.dal.dao;

import net.atayun.bazooka.upms.biz.dal.entity.RolePermission;
import com.youyu.common.mapper.YyMapper;

/**
 * @author pqq
 * @version v1.0
 * @date 2019年6月27日 10:00:00
 * @work 角色关联权限mapper
 */
public interface RolePermissionMapper extends YyMapper<RolePermission> {

    /**
     * 根据权限id删除
     *
     * @param permissionId
     */
    void deleteByPermissionId(Long permissionId);

    /**
     * 根据角色id删除
     *
     * @param roleId
     */
    void deleteByRoleId(Long roleId);
}
