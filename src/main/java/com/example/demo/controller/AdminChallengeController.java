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
	
	@GetMapping
	public Iterable<Challenge> getChallenges () {
		return repository.findAll();
	}
	
	@PostMapping("/save")
	public String saveChallenge(@RequestBody Challenge challenge) {
		
		String result = null;
		String nextNo = null;
		
		try {
			
			//GET ID MAX + 1
			nextNo = repository.findNextNo();
			log.info("nextNo: " + nextNo);
			if (nextNo.length() == 1) {
				nextNo = "000" + nextNo;
			} else if (nextNo.length() == 2) {
				nextNo = "00" + nextNo;
			} else if (nextNo.length() == 3) {
				nextNo = "0" + nextNo;
			}
			
			challenge.setChlnNo(nextNo);
			challenge.setIsNew(true);
			repository.save(challenge);
			
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}

		return result;
	}

}
