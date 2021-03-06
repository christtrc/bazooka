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
package net.atayun.bazooka.pms.api.enums;

/**
 * 凭据域
 *
 * @author WangSongJun
 * @date 2019-08-27
 */
public enum CredentialDomainEnum {
    /**
     * git服务
     */
    GIT_SERVER,

    /**
     * 镜像库
     */
    DOCKER_REGISTRY,

    /**
     * 节点登录
     */
    NODE_LOGIN
}
