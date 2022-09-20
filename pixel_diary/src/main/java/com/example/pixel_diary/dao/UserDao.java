package com.example.pixel_diary.dao;

import com.example.pixel_diary.dto.User;

public interface UserDao {
    public void insertUser(String id, String password, String nickname);
    public User getUser(String id, String password);
    public void updateUser(String password);
    public void deleteUser(String id);
}
