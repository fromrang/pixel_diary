package com.example.pixel_diary.dao;

import com.example.pixel_diary.dto.User;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Date;


public interface UserDao {

    public void insertUser(User user) throws Exception;
    public User getUser(String id) throws Exception;
    public void updateUser(String password);
    public void deleteUser(String id);
}
