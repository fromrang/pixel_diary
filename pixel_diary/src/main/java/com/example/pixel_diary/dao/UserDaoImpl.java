package com.example.pixel_diary.dao;

import com.example.pixel_diary.dto.User;
import com.example.pixel_diary.mapper.UserMapper;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao{
    @Autowired
    private SqlSessionFactory sqlSessionFactory;
    @Override
    public void insertUser(User user) throws Exception{
        SqlSession sqlSession = sqlSessionFactory.openSession();
        try {
            sqlSession.getMapper(UserMapper.class).insertUser(user);
            sqlSession.commit();
        }finally {
            sqlSession.close();
        }
    }

    @Override
    public User getUser(String id) throws Exception{
        SqlSession sqlSession = sqlSessionFactory.openSession();
        try {
            return sqlSession.getMapper(UserMapper.class).selectUserOne(id);
        }finally {
            sqlSession.close();
        }
    }

    @Override
    public User getUserIdPw(String id, String password) throws Exception {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        try {
            return sqlSession.getMapper(UserMapper.class).selectUserIdPw(id, password);
        }finally {
            sqlSession.close();
        }
    }

    @Override
    public void updateUser(String password) {

    }

    @Override
    public void deleteUser(String id) {

    }
}
