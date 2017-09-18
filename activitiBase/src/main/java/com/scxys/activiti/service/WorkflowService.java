package com.scxys.activiti.service; 

import java.io.File;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

import org.activiti.engine.repository.Deployment;
import org.activiti.engine.repository.ProcessDefinition;
import org.activiti.engine.task.Comment;
import org.activiti.engine.task.Task;

import com.scxys.activiti.bean.WorkflowBean;

/** 
 * @author 作者: 
 * @version 创建时间:2017年3月22日 下午1:55:09 
 * @description 说明:
 */
public interface WorkflowService { 
	/**
	 * @Author: qiuxinlin
	 * @Dercription: 任务委托
	 * @Date: 2017/8/29
	 */
	void delegateTasks(String afterDate,String beforeDate,String assignee,String delegateUser);
	/**
	 * @Author: qiuxinlin
	 * @Dercription: 部署流程
	 * @Date: 2017/8/29
	 */
	void deployment(String name,String diagramData,String svgData);
	/**
	 * @Author: qiuxinlin
	 * @Dercription: 根据流程实例ID获取BusinessKey
	 * @Date: 2017/9/7
	 */
	String findBusinessKeyByPiId(String processInstanceId);
}
 