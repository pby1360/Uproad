package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity(name = "COMMON_CODE")
@Table(name = "COMMON_CODE")
public class CommonCode {
	
	@Id
	@Column(name = "COM_CD")
	private String comCd;
	@Column(name = "COM_NM")
	private String comNm;
	@Column(name = "COM_SEQ")
	private String comSeq;
	@Column(name = "COM_TYP")
	private String comTyp;
	@Column(name = "COM_STY")
	private String comSty;
	@Column(name = "COM_DSC")
	private String comDsc;
	@Column(name = "CRT_DT")
	private Date crtDt;
	@Column(name = "CRT_USR")
	private String crtUsr;
	@Column(name = "UPD_DT")
	private Date updDt;
	@Column(name = "UPD_USR")
	private String updUsr;
	private String mo;
}
