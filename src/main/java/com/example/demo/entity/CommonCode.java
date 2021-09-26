package com.example.demo.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table("COMMON_CODE")
public class CommonCode implements Persistable<String>{
	
	@Id
	private String comCd;
	private String comNm;
	private String comSeq;
	private String comTyp;
	private String comSty;
	private String comDsc;
	private Date crtDt;
	private String crtUsr;
	private Date updDt;
	private String updUsr;
	private String mo;
	
	public String getComCd() {
		return comCd;
	}
	public void setComCd(String comCd) {
		this.comCd = comCd;
	}
	public String getComNm() {
		return comNm;
	}
	public void setComNm(String comNm) {
		this.comNm = comNm;
	}
	public String getComSeq() {
		return comSeq;
	}
	public void setComSeq(String comSeq) {
		this.comSeq = comSeq;
	}
	public String getComTyp() {
		return comTyp;
	}
	public void setComTyp(String comTyp) {
		this.comTyp = comTyp;
	}
	public String getComSty() {
		return comSty;
	}
	public void setComSty(String comSty) {
		this.comSty = comSty;
	}
	public String getComDsc() {
		return comDsc;
	}
	public void setComDsc(String comDsc) {
		this.comDsc = comDsc;
	}
	public Date getCrtDt() {
		return crtDt;
	}
	public void setCrtDt(Date crtDt) {
		this.crtDt = crtDt;
	}
	public String getCrtUsr() {
		return crtUsr;
	}
	public void setCrtUsr(String crtUsr) {
		this.crtUsr = crtUsr;
	}
	public Date getUpdDt() {
		return updDt;
	}
	public void setUpdDt(Date updDt) {
		this.updDt = updDt;
	}
	public String getUpdUsr() {
		return updUsr;
	}
	public void setUpdUsr(String updUsr) {
		this.updUsr = updUsr;
	}
	public String getMo() {
		return mo;
	}
	public void setMo(String mo) {
		this.mo = mo;
	}
	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}
	@JsonIgnore
	@Transient
	private boolean isNew;
	
	@Override
	public String getId() {
		// TODO Auto-generated method stub
		return comCd;
	}
	@Override
	public boolean isNew() {
		// TODO Auto-generated method stub
		return isNew;
	}
}
