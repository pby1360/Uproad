package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class ChallengeCustomRepositoryImpl implements ChallengeCustomRepository{
	
	@Autowired
	EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public List<String> getNextNo() {
//		return entityManager.createQuery("SELECT CAST(IFNULL(MAX(CHLN_NO) + 1, 1) AS char) AS CHLN_NO FROM CHALLENGE_MASTER").getResultList();
		return entityManager.createQuery("SELECT MAX(CHLN_NO) + 1 AS CHLN_NO FROM CHALLENGE_MASTER").getResultList();
	}

}
