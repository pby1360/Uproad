package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Challenge;

public interface ChallengeRepository extends JpaRepository<Challenge, String>, ChallengeCustomRepository {
	
}
