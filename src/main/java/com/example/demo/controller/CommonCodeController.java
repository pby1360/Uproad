package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CommonCode;
import com.example.demo.repository.CommonCodeRepository;

@RestController
@RequestMapping("/api/common")
public class CommonCodeController {
	
	@Autowired
	CommonCodeRepository repository;
	
	private Logger log = LoggerFactory.getLogger("CommonCodeController");
	
	@GetMapping("/getComCd")
	public Iterable<CommonCode> getComCd(@RequestParam String comTyp, @RequestParam @Nullable String comSty) {
		log.info("comTyp: " + comTyp);
		log.info("comSty: " + comSty);
		if (null != comSty && !"".equals(comSty)) {
			return repository.findAllByComTypAndComSty(comTyp, comSty);
		} else {
			return repository.findAllByComTyp(comTyp);
		}
	}

}
