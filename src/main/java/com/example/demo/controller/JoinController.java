package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;

@RestController
@RequestMapping("/auth/join")
public class JoinController {
	
	Logger log = LoggerFactory.getLogger("JoinController");
	
	@Autowired UsersRepository repository;

	@Autowired PasswordEncoder encoder;

	@GetMapping("/check")
	public String check(@RequestParam String id) {
		String result = "";
		if (repository.existsById(id)) {
			result = "duplicated";
		} else {
			result = "unduplicated";
		}
		return result;
	}
	
	@PostMapping("/join_uproad")
	public String joinUproad(@RequestBody Users user) {
		String result = "";
		
		try {
//			user.setNew(true);
			user.setJoinPath("uproad");
			user.setPassword(encoder.encode(user.getPassword()));
			repository.save(user);
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		
		return result;
	}

}
