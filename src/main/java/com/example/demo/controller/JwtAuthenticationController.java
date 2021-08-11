package com.example.demo.controller;

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

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);


		}

	}
}
