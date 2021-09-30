package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.CommonCode;

public interface CommonCodeRepository extends JpaRepository<CommonCode, String>{
	
	Iterable<CommonCode> findAllByComTyp(String comTyp);
	Iterable<CommonCode> findAllByComTypAndComSty(String comTyp, String comSty);
}
