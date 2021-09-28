package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.AccessToken;
import com.example.demo.config.JwtRequest;
import com.example.demo.config.JwtResponse;
import com.example.demo.config.JwtTokenUtil;
import com.example.demo.config.JwtUserDetailsService;
import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@RestController
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@Autowired UsersRepository repository;

	@Value("${jwt.token-validity-in-seconds}")
	private long tokenExpire;
	
	Logger log = LoggerFactory.getILoggerFactory().getLogger("JwtAuthenticationController");

	@RequestMapping(value = "/auth/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		
		log.info("id: " + authenticationRequest.getUsername());
		log.info("pw: " + authenticationRequest.getPassword());
		
		
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String accessToken = jwtTokenUtil.generateToken(userDetails);
		
		Users user = repository.findById(authenticationRequest.getUsername()).stream().collect(Collectors.toList()).get(0);
		
		final AccessToken token = AccessToken.of(user, accessToken, tokenExpire);

		return ResponseEntity.ok(token);
	}
	
	@RequestMapping(value = "/auth/loginKakao", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationTokenWithKakao(@RequestBody JwtRequest authenticationRequest) throws Exception {
		
		log.info("id: " + authenticationRequest.getUsername());
		log.info("token: " + authenticationRequest.getToken());
		
		if (!repository.existsById(authenticationRequest.getUsername())) {
			log.info("id null");
			addUser(authenticationRequest.getToken());
		}
		
		final UserDetails userDetails = userDetailsService
				.loadUserByUsernameWithKakao(authenticationRequest.getUsername());
		
		final String accessToken = jwtTokenUtil.generateToken(userDetails);
		
		Users user = repository.findById(authenticationRequest.getUsername()).stream().collect(Collectors.toList()).get(0);
		
		final AccessToken token = AccessToken.of(user, accessToken, tokenExpire);
		
		return ResponseEntity.ok(token);
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			log.error(e.toString());
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	private void addUser(String token) {
		log.info("addUser");
		HashMap<String, Object> userInfo = getUserInfo(token);
//		Users user = new Users(userInfo.get("email").toString(), userInfo.get("nickname").toString(), userInfo.get("gender").toString(), userInfo.get("email").toString(), "kakao");
		Users user = new Users();
		user.setId(userInfo.get("email").toString());
		user.setNickName(userInfo.get("nickname").toString());
		user.setGender(userInfo.get("gender").toString());
		user.setEmail(userInfo.get("email").toString());
		user.setJoinPath("kakao");
//		user.setNew(true);
		repository.save(user);
	};
	
	private HashMap<String, Object> getUserInfo (String access_Token) {
		
		log.info("getUserInfo");
	    
	    //    요청하는 클라이언트마다 가진 정보가 다를 수 있기에 HashMap타입으로 선언
	    HashMap<String, Object> userInfo = new HashMap<>();
	    String reqURL = "https://kapi.kakao.com/v2/user/me";
	    try {
	        URL url = new URL(reqURL);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("POST");
	        
	        //    요청에 필요한 Header에 포함될 내용
	        conn.setRequestProperty("Authorization", "Bearer " + access_Token);
	        
	        int responseCode = conn.getResponseCode();
	        System.out.println("responseCode : " + responseCode);
	        
	        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        
	        String line = "";
	        String result = "";
	        
	        while ((line = br.readLine()) != null) {
	            result += line;
	        }
	        System.out.println("response body : " + result);
	        
	        JsonParser parser = new JsonParser();
	        JsonElement element = parser.parse(result);
	        
	        JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
	        JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
	        
	        String nickname = properties.getAsJsonObject().get("nickname").getAsString();
	        String email = kakao_account.getAsJsonObject().get("email").getAsString();
	        String gender = kakao_account.getAsJsonObject().get("gender").getAsString();
	        
	        userInfo.put("nickname", nickname);
	        userInfo.put("email", email);
	        userInfo.put("gender", gender);
	        
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	    
	    return userInfo;
	}

}
