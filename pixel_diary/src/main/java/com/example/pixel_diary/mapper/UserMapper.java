package com.example.pixel_diary.mapper;

import com.example.pixel_diary.dto.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {

    @Select("select * from user where email=#{email}")
    public User selectUserOne(@Param("email") String email) throws Exception;

    @Insert("insert into user(id, pw, nickname) values(#{id}, #{password}, #{nickname}")
    public void insertUser(User user) throws Exception;

}
