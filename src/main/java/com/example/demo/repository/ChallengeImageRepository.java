package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ChallengeImage;

@Repository
public interface ChallengeImageRepository extends JpaRepository<ChallengeImage, Integer> {
	
	ChallengeImage findByChlnNoAndImgTyp(String chlnNo, String imgTyp);
	
	List<ChallengeImage> findAllByChlnNo(String chlnNo);

}
