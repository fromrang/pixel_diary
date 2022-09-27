package com.example.pixel_diary.controller;

import com.example.pixel_diary.dao.UserDao;
import com.example.pixel_diary.dto.DefaultRes;
import com.example.pixel_diary.dto.StatusCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.pixel_diary.dto.User;

@RestController
public class UserController {
	@Autowired
	UserDao userDao;

	// 회원가입
	@PostMapping("/user")
	public ResponseEntity join(@RequestBody User user){
		try {
			User newUser = userDao.getUser(user.getId());
			//System.out.println("!!! "+user.getId());
			if (newUser != null) {
				//System.out.println(newUser.getId());
				return new ResponseEntity(DefaultRes.res(StatusCode.CREATED, "[Fail]exist user"), HttpStatus.OK);
			}else{
				userDao.insertUser(user);
				return new ResponseEntity(DefaultRes.res(StatusCode.OK, "[SUCCESS]join", newUser), HttpStatus.OK);
			}
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}

	}
	//로그인
	@GetMapping("/user")
	public ResponseEntity login(@RequestBody User user){
		try{
			User existUser = userDao.getUserIdPw(user.getId(), user.getPassword());
			if(existUser == null){
				return new ResponseEntity(DefaultRes.res(StatusCode.CREATED, "[Fail]not exist user"), HttpStatus.OK);
			}else{
				return new ResponseEntity(DefaultRes.res(StatusCode.OK, "[SUCCESS]login", existUser), HttpStatus.OK);
			}
		}catch (Exception e){
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.BAD_REQUEST);

		}
	}
	//회원 수정
	//@PutMapping("/user")

	//회원 삭제
	//@DeleteMapping("/user")

	/*
	@GetMapping("argsDefault")
	public Hello getArgsDefault(
			@RequestParam(value = "msg")String msg,
			@RequestParam(value = "msg2", required = false, defaultValue = "msg2Default")String msg2) {
		Hello hello = new Hello(0, msg);
		hello.setMsg(hello.getMsg() + ", " + msg2);

		return hello;
	}

	@PostMapping()
	public Hello post(@RequestBody Param param) {
		String msg = "Data1 : " + param.getData1() + ", Data2 : " + param.getData2();
		Hello hello = new Hello(0, msg);
		return hello;
	}

	@PutMapping()
	public Hello put(@RequestParam(value = "param1")String param1) {
		Hello hello = new Hello(0, "Put Request : " + param1);
		return hello;
	}
	*/
}
