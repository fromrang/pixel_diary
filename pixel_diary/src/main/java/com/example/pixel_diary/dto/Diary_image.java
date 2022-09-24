package com.example.pixel_diary.dto;

import java.util.Date;

import org.springframework.stereotype.Service;

import lombok.Getter;
import lombok.Setter;

@Service
@Getter
@Setter
public class Diary_image {
	private int iseq;
	private String image_url;
	private Date reg_date;
	private int dseq;
}
