package com.team6.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team6.model.OrganisationsInfo;
import com.team6.model.ProjectInCharge;
import com.team6.repository.OrganisationRepository;
import com.team6.repository.ProjectInchargeRepository;


@Service
@Transactional
public class ProjectInchargeServiceImpl implements ProjectInchargeService
{
	
	@Autowired
	ProjectInchargeRepository inchargerepo;
	
	@Autowired
	OrganisationRepository orgrepo;
	
	@Override
	public List<ProjectInCharge> getAllIncharge()
	{
		return inchargerepo.findAll();
	}
	
	@Override
	public boolean addIncharge(ProjectInCharge newincharge, int orgId)
	{
		OrganisationsInfo org= orgrepo.findById(orgId).get();
		newincharge.setOrganisationsInfo(org);
		inchargerepo.save(newincharge);
		return true;
	}
	
//	@Override
//	public boolean updIncharge(ProjectInCharge incharge)
//	{
//		ProjectInCharge updincharge = inchargerepo.findById(incharge.getProjectid()).get();
//		updincharge=incharge;
//		inchargerepo.save(incharge);
//		return true;
//	}
//	
	@Override
	public boolean delIncharge(ProjectInCharge incharge)
	{
		inchargerepo.delete(incharge);
		return true;
	}
	
	/*
	@Override
	public boolean updIncharge(ProjectInCharge incharge) {
		// TODO Auto-generated method stub
		return false;
	}*/

}
