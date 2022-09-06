package com.example.pixel_diary.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pixel_diary.dto.Message;
import com.example.pixel_diary.dto.User;

@RestController
public class UserController {
	@GetMapping("/join")
	public Message joinAction(){
		Message message = null;
		//System.out.println(user.getId());
//		if(user.getId() == null) {
//			message = new Message(400, "FAIL", "join error");
//		}
		message = new Message(200, "SUCCESS", "join");
		return message;
	}
}
