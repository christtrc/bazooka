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
package net.atayun.bazooka.pms.api.vo;

import net.atayun.bazooka.pms.api.enums.UserTypeEnum;
import lombok.Data;

/**
 * @author rache
 * @date 2019-07-26
 */
@Data
public class ProjectResponse {
    /**
     * 项目id
     */
    private Long id;
    /**
     * 项目名称
     */
    private String projectName;
    /**
     * 项目code
     */
    private String projectCode;
    /**
     * 项目描述
     */
    private String description;
    /**
     * 项目负责人id
     */
    private Long masterUserId;
    /**
     * 当前用户角色
     */
    private UserTypeEnum adminUserRole;
}
