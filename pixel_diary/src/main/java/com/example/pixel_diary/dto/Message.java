package com.example.pixel_diary.dto;

public class Message {
	int code;
	String status;
	String message;
	public int getCode() {
		return code;
	}
	public Message(int code, String status, String message) {
		this.code = code;
		this.status = status;
		this.message = message;
	}
	
	public void setCode(int code) {
		this.code = code;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
