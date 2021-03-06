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

import net.atayun.bazooka.base.service.BatchService;
import net.atayun.bazooka.base.service.impl.BatchServiceImpl;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author pqq
 * @version v1.0
 * @date 2019年5月30日 下午10:00:00
 * @work BatchServiceImpl自动装配
 */
@Configuration
@ConditionalOnClass(BatchService.class)
public class BatchServiceConfiguration {

    @Bean
    @ConditionalOnMissingBean(BatchService.class)
    public BatchService batchService() {
        BatchService batchService = new BatchServiceImpl();
        return batchService;
    }
}
