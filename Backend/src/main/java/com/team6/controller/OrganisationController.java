package com.team6.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team6.model.OrganisationsInfo;
import com.team6.repository.OrganisationRepository;
import com.team6.service.OrganisationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("rest/api")
public class OrganisationController {
	@Autowired
	OrganisationRepository organisationRepository;
	
	@Autowired
	OrganisationService organisationService;
	
	@GetMapping("/Organisation")
	public List<OrganisationsInfo> getAll() {
		return organisationRepository.findAll();
	}
	
	@GetMapping("/adminhome/(adminsub:adminpending)")
	public List<OrganisationsInfo>getPendingNgo() {
		return organisationRepository.findPendingNgo();
	}
	
	@GetMapping("/adminhome/(adminsub:adminapproved)")
	public List<OrganisationsInfo>getApprovedNgo() {
		return organisationRepository.findApprovedNgo();
	}
	
	@PostMapping("/Organisation")
	public boolean add(@RequestBody OrganisationsInfo organisationsInfo) {
		return organisationService.addOrg(organisationsInfo);
	}
	
	@GetMapping("/Organisation/{pan}")
	public OrganisationsInfo getNgoStatus(@PathVariable("pan") String pan) {
		return organisationRepository.findNgoStatusById(pan);
	}
	
	/*
	@PutMapping("/Organisation")
	public String update(@RequestBody OrganisationsInfo organisationsInfo) {
		OrganisationsInfo organisationsTemp = organisationRepository.findById(organisationsInfo.getOrganisationId()).get();
		organisationsTemp = organisationsInfo;
		organisationRepository.save(organisationsTemp);
		return "updated";
	}*/
	
	@Transactional
	@PutMapping("/adminhome/(adminsub:adminpending)/{organisationId}")
	public void approvePendingNgo(@PathVariable(value = "organisationId") int organisationId) {
		organisationRepository.approveNgoRequest(organisationId);
		
	}
	
	@Transactional
	@DeleteMapping("/adminhome/(adminsub:adminapproved)/{organisationId}")
	public void delete(@PathVariable(value = "organisationId") int organisationId) {
		organisationRepository.deleteNgo(organisationId);
	
		
	}
	
	@Transactional
	@DeleteMapping("/adminhome/(adminsub:adminpending)/{organisationId}")
	public void deletePendingNgo(@PathVariable(value = "organisationId") int organisationId) {
		organisationRepository.deleteNgo(organisationId);
	
		
	}
	
	
}
