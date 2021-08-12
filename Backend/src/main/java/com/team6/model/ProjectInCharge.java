package com.team6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "project_incharge_detail")
public class ProjectInCharge {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "inchargeid_generator")
	@SequenceGenerator(name = "inchargeid_generator", sequenceName = "incharge_seq", allocationSize = 1)
	private int projectId;
	private int orgId;
	private String projectName;
	private String startDate;
	private String endDate;
	private String projectMentor;

	public ProjectInCharge() {
		super();

	}

	public ProjectInCharge(int projectId, int orgId, String projectName, String startDate, String endDate,
			String projectMentor) {
		super();
		this.projectId = projectId;
		this.orgId = orgId;
		this.projectName = projectName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.projectMentor = projectMentor;
	}

	@Override
	public String toString() {
		return "ProjectInCharge [projectId=" + projectId + ", orgId=" + orgId + ", projectName=" + projectName
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", projectMentor=" + projectMentor + "]";
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public int getOrgId() {
		return orgId;
	}

	public void setOrgId(int orgId) {
		this.orgId = orgId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getProjectMentor() {
		return projectMentor;
	}

	public void setProjectMentor(String projectMentor) {
		this.projectMentor = projectMentor;
	}
	
	

}
