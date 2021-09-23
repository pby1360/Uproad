package com.example.demo.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table("USERS")
public class Users implements Persistable<String> {
	
	@Id
	private String id;
	private String nickName;
	private String name;
	private String email;
	private String password;
	private String birth;
	private String gender;
	private String phoneNumber;
	private String address;
	private String joinPath;
	private Date crtDt;
	
	@Transient
	@JsonIgnore
	private Boolean isNew = false;

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public void setNew(Boolean isNew) {
		this.isNew = isNew;
	}

	@Override
	public boolean isNew() {
		return isNew;
	}
	public String getJoinPath() {
		return joinPath;
	}
	public void setJoinPath(String joinPath) {
		this.joinPath = joinPath;
	}
	public Date getCrtDt() {
		return crtDt;
	}
	public void setCrtDt(Date crtDt) {
		this.crtDt = crtDt;
	}
	public Users(String id, String nickName, String gender, String email, String joinPath) {
		super();
		this.id = id;
		this.nickName = nickName;
		this.gender = gender;
		this.email = email;
		this.joinPath = joinPath;
	}
	
	
}
