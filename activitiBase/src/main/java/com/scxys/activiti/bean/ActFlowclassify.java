package com.scxys.activiti.bean;

import java.io.Serializable;

import javax.persistence.*;

/** 
* @author 作者:qiuxinlin 
* @version 创建时间:2017年7月3日 下午1:40:41 
* @description 说明:分类
*/
@Entity
@Table(name="act_flowclassify")
public class ActFlowclassify implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "seq_act_flowclassify",sequenceName = "seq_act_flowclassify",allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "seq_act_flowclassify")
	@Column(name = "id_")
	private Long id;//主键ID
	@Column(name = "classifyCode_",columnDefinition = "NVARCHAR2")
	private String classifyCode;//分类编码
	@Column(name = "classifyName_")
	private String classifyName;//分类名称
	@Column(name = "parentCode_")
	private String parentCode;//上级编码
	@Column(name = "fullPath_")
	private String fullPath;//分类全路径
	@Column(name = "describtion_")
	private String describtion;//分类描述
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getClassifyCode() {
		return classifyCode;
	}
	public void setClassifyCode(String classifyCode) {
		this.classifyCode = classifyCode;
	}
	public String getClassifyName() {
		return classifyName;
	}
	public void setClassifyName(String classifyName) {
		this.classifyName = classifyName;
	}
	public String getParentCode() {
		return parentCode;
	}
	public void setParentCode(String parentCode) {
		this.parentCode = parentCode;
	}
	public String getFullPath() {
		return fullPath;
	}
	public void setFullPath(String fullPath) {
		this.fullPath = fullPath;
	}
	public String getDescribtion() {
		return describtion;
	}
	public void setDescribtion(String describtion) {
		this.describtion = describtion;
	}
	
}
 