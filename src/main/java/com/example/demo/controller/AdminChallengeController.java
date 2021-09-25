package com.example.demo.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Challenge;
import com.example.demo.repository.AdminChallengeRepository;

@RestController
@RequestMapping("/api/admin/challenge")
public class AdminChallengeController {
	
	private Logger log = LoggerFactory.getLogger("AdminChallengeController");
	
	@Autowired
	AdminChallengeRepository repository;
	
//	@GetMapping
//	public String hello () {
//		return "hello";
//	}
	
	@PostMapping("/save")
	public String saveChallenge(@RequestBody Challenge challenge) {
		log.info("save");
		log.info("name: " + challenge.getChlnNm());
		log.info("strDt: " + challenge.getChlnStrDt());
		
		//GET ID MAX + 1
		
		return "success";
	}

}
