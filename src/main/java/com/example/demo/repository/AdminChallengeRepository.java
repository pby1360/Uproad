package com.example.demo.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Challenge;

public interface AdminChallengeRepository extends CrudRepository<Challenge, String> {
	
	@Query("SELECT CAST(IFNULL(MAX(CHLN_NO) + 1, 1) AS CHAR) AS CHLN_NO FROM CHALLENGE_MASTER")
	String findNextNo();
	
}
