package com.team6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team6.model.NgoCourses;
import com.team6.repository.NgoCoursesRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("rest/api")
public class NgoCoursesController {
	
	@Autowired
	NgoCoursesRepository ngoCoursesRepository;
	
	@GetMapping("/show-ngo-course")	
	public List<NgoCourses> getAllNgoCourses() {
		return ngoCoursesRepository.findAll();
	}
	
	@PostMapping("/ngopath/(ngosub:ngoaddcourse)")
	public NgoCourses addNgoCourse(@RequestBody NgoCourses ngoCourses) {
		return ngoCoursesRepository.save(ngoCourses);
	}
	
	@DeleteMapping("/ngopath/(ngosub:ngoaddcourse)")
	public String deleteNgoCourse(@RequestBody NgoCourses ngoCourses) {
		ngoCoursesRepository.delete(ngoCourses);
		return "Course deleted.";
		
	}
	
	@PutMapping("/ngopath/(ngosub:ngoaddcourse)")
	public String updateNgoCourse(@RequestBody NgoCourses ngoCourses) {
		NgoCourses updatedCourse = ngoCoursesRepository.findById(ngoCourses.getNgoCourseId()).get();
		updatedCourse = ngoCourses;
		ngoCoursesRepository.save(updatedCourse);
		return "Course updated.";
	}
	
	

}
