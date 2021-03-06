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
package net.atayun.bazooka.rms.api.enums;

/**
 * @Author: hanxiaorui
 * @Date: 2019/7/16 18:14
 * @Description: 容器状态
 */
public enum ContainerState {

    STAGING("0", "启动中"),
    RUNNING("1", "运行中"),
    STOPPED("2", "已关闭"),
    ;

    private String state;
    private String desc;

    ContainerState(String state, String desc) {
        this.state = state;
        this.desc = desc;
    }

    public String getState() {
        return state;
    }
}
