package com.example.prashanth.port_out;

import com.example.prashanth.model.UserModel;

import java.util.List;


public interface IUserRepository {

    List<UserModel> getAll();

    String delete(long id);

    UserModel getOne(long id);

    String insert(UserModel userModel);

    String update(UserModel userModel);

    UserModel getUserName(String userName);

    UserModel getByUserId(String userId);

    boolean getCount(String userId, String password);
}
