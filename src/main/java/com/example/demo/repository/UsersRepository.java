package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Users;

public interface UsersRepository extends CrudRepository<Users, String> {

}
