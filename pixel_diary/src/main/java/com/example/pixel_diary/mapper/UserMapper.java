package com.example.pixel_diary.mapper;

import com.example.pixel_diary.dto.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("select * from user where id=#{id}")
    public User selectUserOne(@Param("id") String id) throws Exception;

    @Insert("insert into user(id, password, nickname, birthDay) values(#{id}, #{password}, #{nickname}, #{birthDay})")
    public void insertUser(User user) throws Exception;

}
