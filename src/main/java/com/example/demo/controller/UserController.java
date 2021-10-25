package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.EntityManager;

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

import com.example.demo.entity.QUsers;
import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	Logger log = LoggerFactory.getLogger("UserController");
	
	@Autowired
	private EntityManager em;
	
	@Autowired UsersRepository repository;
	
	@GetMapping("/{id}")
	public Users getUserInfo(@PathVariable String id) {
		log.info("getUserInfo");
		return repository.findById(id).get();
	}
	
//	@GetMapping("/users")
//	public Iterable<Users> getUserList() {
//		log.info("getUserInfo");
//		return repository.findAll();
//	}
	
	@GetMapping("/users")
	public Iterable<Users> getUserList() {
		log.info("getUserInfo");
		JPAQueryFactory query = new JPAQueryFactory(em);
		QUsers qusers = QUsers.users;
		
		Iterable<Users> users = query.select(qusers)
				.from(qusers).fetch();
		
		return users;
	}
}
