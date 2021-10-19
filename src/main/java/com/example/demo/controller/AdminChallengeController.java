package com.example.demo.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.config.S3Uploader;
import com.example.demo.entity.Challenge;
import com.example.demo.entity.ChallengeImage;
import com.example.demo.repository.ChallengeImageRepository;
import com.example.demo.repository.ChallengeRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/challenge")
public class AdminChallengeController {
	
	private Logger log = LoggerFactory.getLogger("AdminChallengeController");
	
	private final S3Uploader s3Uploader;
	
	@Autowired
	ChallengeRepository repository;
	
	@Autowired
	ChallengeImageRepository imageRepository;
	
	@GetMapping
	public Iterable<Challenge> getChallenges () {
		return repository.findAll();
	}
	
	@GetMapping("/{chlnNo}")
	public Challenge getChallengeDetail (@PathVariable String chlnNo) {
		return repository.findById(chlnNo).get();
	}
	
	@PostMapping("/save")
	public String saveChallenge(@RequestBody Challenge challenge) {
		
		String result = null;
		String nextNo = null;
		
		try {
			
			//GET ID MAX + 1
//			nextNo = repository.getNextNo().get(0);
			nextNo  = repository.getNextNo().get(0);
			log.info("nextNo: " + nextNo);
			if (nextNo.length() == 1) {
				nextNo = "000" + nextNo;
			} else if (nextNo.length() == 2) {
				nextNo = "00" + nextNo;
			} else if (nextNo.length() == 3) {
				nextNo = "0" + nextNo;
			}
			
			challenge.setChlnNo(nextNo);
			repository.save(challenge);
			
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}

		return result;
	}
	
	@PostMapping("/saveImage")
	public String saveImage(
			@RequestParam("chlnNo") String chlnNo,
			@RequestParam("imgTyp") String imgTyp,
			@RequestParam("fileNm") String fileNm,
			@RequestParam("fileTyp") String fileTyp,
			@RequestParam("file") MultipartFile file) {
		log.info("chlnNo: " + chlnNo);
		log.info("imgTyp: " + imgTyp);
		log.info("file: " + file);
		
		String result = null;
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();

		ChallengeImage newImage = new ChallengeImage();
		ChallengeImage preImage = new ChallengeImage();
		
		try {
			
			preImage = imageRepository.findByChlnNoAndImgTyp(chlnNo, imgTyp);
			
			String url = s3Uploader.upload(file, "user/profile");
			log.info("url: " + url);
			
			if (null != preImage) {

				preImage.setFileNm(fileNm);
				preImage.setFileTyp(fileTyp);
				preImage.setUpdDt(new Date());
				preImage.setUpdUsr(auth.getName());
				preImage.setFilePath(url);
				imageRepository.save(preImage);
				
			} else {

				newImage.setChlnNo(chlnNo);
				newImage.setImgTyp(imgTyp);
				newImage.setFileNm(fileNm);
				newImage.setFileTyp(fileTyp);
				newImage.setCrtDt(new Date());
				newImage.setCrtUsr(auth.getName());
				newImage.setUpdDt(new Date());
				newImage.setUpdUsr(auth.getName());
				newImage.setFilePath(url);
				imageRepository.save(newImage);
				
			}			

			
			result = "success";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "fail";
		}

		return result;
	}
	
	@GetMapping("/getImages/{chlnNo}")
	public List<ChallengeImage> getImages (@PathVariable String chlnNo) {
		List<ChallengeImage> images =  imageRepository.findAllByChlnNo(chlnNo);
		return images;
	}

}
