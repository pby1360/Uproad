package com.example.demo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Challenge;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, String>, ChallengeCustomRepository {

	List<Challenge> findByChlnEndDtAfter(@Param("chlnEndDt") Date endDt);
	List<Challenge> findByChlnEndDtBefore(@Param("chlnEndDt") Date endDt);

}
