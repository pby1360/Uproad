package com.example.demo.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Challenge;
import com.example.demo.repository.ChallengeImageRepository;
import com.example.demo.repository.ChallengeRepository;

@RestController
@RequestMapping("/challenge")
public class ChallengeController {
	
	private Logger log = LoggerFactory.getLogger("ChallengeController");
	
	@Autowired
	private ChallengeRepository repositoty;
	
	@Autowired
	private ChallengeImageRepository imgRepository;
	
	@GetMapping
	public List<Challenge> getChallenges () {
		return repositoty.findAll();
	}
	
	@GetMapping("/{chlnNo}")
	public Challenge getChallengeDetail (@PathVariable String chlnNo) {
		return repositoty.findById(chlnNo).get();
	}
	
	@GetMapping("/opendChallenges")
	public List<Challenge> opendChallenges () {
		List<Challenge> opendChallenges = repositoty.findByChlnEndDtAfter(new Date());
		opendChallenges.forEach(item -> {
			log.info(item.getChlnNm());

			if (null != imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "bg")) {
				item.setBgImg(imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "bg").getFilePath());
			} else {
				item.setBgImg("https://uproad.s3.ap-northeast-2.amazonaws.com/challenge/background/bg_default.jpg");
			}
			
			if(null != imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "card")) {
				item.setCardImg(imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "card").getFilePath());
			} else {
				item.setCardImg("https://uproad.s3.ap-northeast-2.amazonaws.com/challenge/card/card_default.jpg");
			}
		});
		return opendChallenges;
	}
	
	@GetMapping("/closedChallenges")
	public List<Challenge> closedChallenges () {
		List<Challenge> closedChallenges = repositoty.findByChlnEndDtBefore(new Date());
		closedChallenges.forEach(item -> {
			log.info(item.getChlnNm());

			if (null != imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "bg")) {
				item.setBgImg(imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "bg").getFilePath());
			} else {
				item.setBgImg("https://uproad.s3.ap-northeast-2.amazonaws.com/challenge/background/bg_default.jpg");
			}
			
			if(null != imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "card")) {
				item.setCardImg(imgRepository.findByChlnNoAndImgTyp(item.getChlnNo(), "card").getFilePath());
			} else {
				item.setCardImg("https://uproad.s3.ap-northeast-2.amazonaws.com/challenge/card/card_default.jpg");
			}
		});
		return closedChallenges;
	}
}
