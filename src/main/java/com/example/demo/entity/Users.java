package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "USERS")
public class Users {
	
	@Id
	private String id;
	@Column(name = "NICK_NAME")
	private String nickName;
	private String name;
	private String email;
	private String password;
	private String birth;
	private String gender;
	@Column(name = "PHONE_NUMBER")
	private String phoneNumber;
	private String address;
	@Column(name = "JOIN_PATH")
	private String joinPath;
	@Column(name = "CRT_DT")
	private Date crtDt;
}
