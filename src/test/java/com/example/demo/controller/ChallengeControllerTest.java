package com.example.demo.controller;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.demo.repository.ChallengeRepository;

@ExtendWith(SpringExtension.class)
@AutoConfigureTestDatabase(replace = Replace.NONE)
//@WebMvcTest(controllers = ChallengeController.class)
@DataJpaTest
public class ChallengeControllerTest {
	
	private Logger log = LoggerFactory.getLogger("ChallengeControllerTest"); 
	
	
		
	@Autowired
	private ChallengeRepository repository;
	
	@Test
	public void test_activeChallenges () throws Exception {
		log.info("new date : " + new Date());
		repository.findByChlnEndDtAfter(new Date()).forEach(item -> log.info("종료일: " + item.getChlnEndDt()));
		repository.findByChlnEndDtBefore(new Date()).forEach(item -> log.info("종료일: " + item.getChlnEndDt()));
	}

}
