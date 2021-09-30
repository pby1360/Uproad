package com.example.demo.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Challenge;
import com.example.demo.repository.ChallengeRepository;

@RestController
@RequestMapping("/challenge")
public class ChallengeController {
	
	private Logger log = LoggerFactory.getLogger("ChallengeController");
	
	@Autowired
	private ChallengeRepository repositoty;
	
	@GetMapping
	public List<Challenge> getChallenges () {
		return repositoty.findAll();
	}
	
	@GetMapping("/{chlnNo}")
	public Challenge getChallengeDetail (@PathVariable String chlnNo) {
		return repositoty.findById(chlnNo).get();
	}
	
	@GetMapping("/opendChallenges")
	public List<Challenge> opendChallenges () {
		return repositoty.findByChlnEndDtAfter(new Date());
	}
	
	@GetMapping("/closedChallenges")
	public List<Challenge> closedChallenges () {
		return repositoty.findByChlnEndDtBefore(new Date());
	}
}
