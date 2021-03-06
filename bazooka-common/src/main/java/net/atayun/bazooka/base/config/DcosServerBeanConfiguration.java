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
package net.atayun.bazooka.base.config;

import net.atayun.bazooka.base.dcos.DcosPropertiesHelper;
import net.atayun.bazooka.base.dcos.DcosServerBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author pqq
 * @version v1.0
 * @date 2019年7月18日 17:00:00
 * @work DCOSServerBean自动装配
 */
@Configuration
@ConditionalOnClass(DcosServerBean.class)
@EnableConfigurationProperties({
        DcosProperties.class
})
public class DcosServerBeanConfiguration {

    @Bean
    @ConditionalOnMissingBean(DcosServerBean.class)
    public DcosServerBean dcosServerBean() {
        DcosServerBean dcosServerBean = new DcosServerBean();
        return dcosServerBean;
    }

    @Bean
    public DcosPropertiesHelper dcosPropertiesHelper() {
        return new DcosPropertiesHelper();
    }
}
