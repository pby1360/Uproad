package com.example.demo.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table("CHALLENGE_MASTER")
public class Challenge implements Persistable<String> {
	
	@Id
	private String chlnNo;
	private String chlnNm;
	private String chlnDesc;
	private String chlnCat1;
	private String chlnCat2;
	private String chlnLevel;
	private String chlnPrice;
	private String chlnPlace;
	private Date chlnStrDt;
	private Date chlnEndDt;
	private int chlnPlnNum;
	private int chlnMemNum;
	private String chlnYn;
	private String chlnTag;
	private Date crtDt;
	private String crtUsr;
	private Date updDt;
	private String updUsr;
	
	public String getChlnNo() {
		return chlnNo;
	}

	public void setChlnNo(String chlnNo) {
		this.chlnNo = chlnNo;
	}

	public String getChlnNm() {
		return chlnNm;
	}

	public void setChlnNm(String chlnNm) {
		this.chlnNm = chlnNm;
	}

	public String getChlnDesc() {
		return chlnDesc;
	}

	public void setChlnDesc(String chlnDesc) {
		this.chlnDesc = chlnDesc;
	}

	public String getChlnCat1() {
		return chlnCat1;
	}

	public void setChlnCat1(String chlnCat1) {
		this.chlnCat1 = chlnCat1;
	}

	public String getChlnCat2() {
		return chlnCat2;
	}

	public void setChlnCat2(String chlnCat2) {
		this.chlnCat2 = chlnCat2;
	}

	public String getChlnLevel() {
		return chlnLevel;
	}

	public void setChlnLevel(String chlnLevel) {
		this.chlnLevel = chlnLevel;
	}

	public String getChlnPrice() {
		return chlnPrice;
	}

	public void setChlnPrice(String chlnPrice) {
		this.chlnPrice = chlnPrice;
	}

	public String getChlnPlace() {
		return chlnPlace;
	}

	public void setChlnPlace(String chlnPlace) {
		this.chlnPlace = chlnPlace;
	}

	public Date getChlnStrDt() {
		return chlnStrDt;
	}

	public void setChlnStrDt(Date chlnStrDt) {
		this.chlnStrDt = chlnStrDt;
	}

	public Date getChlnEndDt() {
		return chlnEndDt;
	}

	public void setChlnEndDt(Date chlnEndDt) {
		this.chlnEndDt = chlnEndDt;
	}

	public int getChlnPlnNum() {
		return chlnPlnNum;
	}

	public void setChlnPlnNum(int chlnPlnNum) {
		this.chlnPlnNum = chlnPlnNum;
	}

	public int getChlnMemNum() {
		return chlnMemNum;
	}

	public void setChlnMemNum(int chlnMemNum) {
		this.chlnMemNum = chlnMemNum;
	}

	public String getChlnYn() {
		return chlnYn;
	}

	public void setChlnYn(String chlnYn) {
		this.chlnYn = chlnYn;
	}

	public String getChlnTag() {
		return chlnTag;
	}

	public void setChlnTag(String chlnTag) {
		this.chlnTag = chlnTag;
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

	@Transient
	@JsonIgnore
	private Boolean isNew = false;
	

	@Override
	public String getId() {
		// TODO Auto-generated method stub
		return chlnNo;
	}

	@Override
	public boolean isNew() {
		// TODO Auto-generated method stub
		return isNew;
	}

}
