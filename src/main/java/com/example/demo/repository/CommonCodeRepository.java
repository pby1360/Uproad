package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.CommonCode;

public interface CommonCodeRepository extends CrudRepository<CommonCode, String>{
	
	Iterable<CommonCode> findAllByComTyp(String comTyp);
	Iterable<CommonCode> findAllByComTypAndComSty(String comTyp, String comSty);
}
