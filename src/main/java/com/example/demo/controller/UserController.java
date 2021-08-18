package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired UsersRepository repository;
	
	@GetMapping("/{id}")
	public Users getUserInfo(@PathVariable String id) {
		return repository.findById(id).get();
	}

}
