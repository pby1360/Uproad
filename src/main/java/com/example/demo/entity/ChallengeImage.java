package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity(name = "CHALLENGE_IMAGE")
@Table(name = "CHALLENGE_IMAGE")
public class ChallengeImage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;
	@Column(name = "CHLN_NO")
	private String chlnNo;
	@Column(name = "IMG_TYP")
	private String imgTyp;
	@Column(name = "CRT_DT")
	private Date crtDt;
	@Column(name = "CRT_USR")
	private String crtUsr;
	@Column(name = "UPD_DT")
	private Date updDt;
	@Column(name = "UPD_USR")
	private String updUsr;
	@Column(name = "FILE_PATH")
	private String filePath;
	@Column(name = "FILE_NM")
	private String fileNm;
	@Column(name = "FILE_TYP")
	private String fileTyp;
}
