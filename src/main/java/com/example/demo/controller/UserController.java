package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	Logger log = LoggerFactory.getLogger("UserController");
	
	@Autowired UsersRepository repository;
	
	@GetMapping("/{id}")
	public Users getUserInfo(@PathVariable String id) {
		log.info("getUserInfo");
		return repository.findById(id).get();
	}
	
	@GetMapping("/users")
	public Iterable<Users> getUserList() {
		log.info("getUserInfo");
		return repository.findAll();
	}
	
	@PostMapping("/join")
	public Users joinUser(@RequestBody Map<String,String> info) {
		log.info("joinUser");
		
		if(!repository.existsById(info.get("email"))) {
			Users newUsers = new Users(info.get("email"), info.get("nick_name"), info.get("gender"), info.get("email"), info.get("join_path"));
			newUsers.setNew(true);
			repository.save(newUsers);
		}
		
		return repository.findById(info.get("email")).get();
	}

}
