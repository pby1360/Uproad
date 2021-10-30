package com.example.demo.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "CHALLENGE_MASTER")
@NoArgsConstructor
@Transactional
//@Table(name = "CHALLENGE_MASTER")
public class Challenge {
	
	@Id
	@Column(name = "CHLN_NO")
	private String chlnNo;
	@Column(name = "CHLN_NM")
	private String chlnNm;
	@Column(name = "CHLN_DESC")
	private String chlnDesc;
	@Column(name = "CHLN_MNGR")
	private String chlnMngr;
	@Column(name = "CHLN_CAT1", insertable = false, updatable = false)
	private String chlnCat1;
	@Column(name = "CHLN_CAT2", insertable = false, updatable = false)
	private String chlnCat2;
	@Column(name = "CHLN_LEVEL")
	private String chlnLevel;
	@Column(name = "CHLN_PRICE")
	private String chlnPrice;
	@Column(name = "CHLN_PLACE")
	private String chlnPlace;
	@Column(name = "CHLN_STR_DT")
	private String chlnStrDt;
	@Column(name = "CHLN_END_DT")
	private Date chlnEndDt;
	@Column(name = "CHLN_PLN_NUM")
	private int chlnPlnNum;
	@Column(name = "CHLN_MEM_NUM")
	private int chlnMemNum;
	@Column(name = "CHLN_YN")
	private String chlnYn;
	@Column(name = "CHLN_TAG")
	private String chlnTag;
	@Column(name = "CRT_DT")
	private Date crtDt;
	@Column(name = "CRT_USR")
	private String crtUsr;
	@Column(name = "UPD_DT")
	private Date updDt;
	@Column(name = "UPD_USR")
	private String updUsr;
	
	@ManyToOne
	@JoinColumn(name = "CHLN_CAT1")
	private CommonCode comCd1;
	
	@ManyToOne
	@JoinColumn(name = "CHLN_CAT2")
	private CommonCode comCd2;
	
}
