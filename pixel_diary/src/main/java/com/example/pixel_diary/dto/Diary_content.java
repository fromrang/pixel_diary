package com.example.pixel_diary.dto;

import java.util.Date;

import org.springframework.stereotype.Service;

import lombok.Getter;
import lombok.Setter;

@Service
@Getter
@Setter
public class Diary_content {
	private int cseq;
	private String content;
	private Date reg_date;
	private int dseq;

}
