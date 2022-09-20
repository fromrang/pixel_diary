package com.example.pixel_diary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pixel_diary.dto.Message;
import com.example.pixel_diary.dto.User;

@RestController
public class UserController {
	@Autowired
	User user;
	@PostMapping("/user")
	public Message join(){

		return null;
	}

	@GetMapping("/user")
	public User login(){
		return user;
	}
}
