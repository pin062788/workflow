/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.scxys.activiti.rest.service.api.runtime.task;

import java.util.List;

import com.scxys.activiti.rest.common.api.AbstractPaginateList;
import com.scxys.activiti.rest.service.api.RestResponseFactory;

/**
 * @author Frederik Heremans
 */
public class TaskPaginateList extends AbstractPaginateList {

  protected RestResponseFactory restResponseFactory;
  
  public TaskPaginateList(RestResponseFactory restResponseFactory) {
    this.restResponseFactory = restResponseFactory;
  }
  
  @SuppressWarnings({ "rawtypes", "unchecked" })
  @Override
  protected List processList(List list) {
    return restResponseFactory.createTaskResponseList(list);
  }
}
