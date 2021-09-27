package com.example.prashanth.port_in;

import com.example.prashanth.model.UserModel;

import java.util.List;

public interface Usecase {

    List<UserModel> getAll();

    String delete(long id);

    UserModel getOne(long id);

    String userRegister(UserModel userModel);

    String update(UserModel userModel);

    UserModel getUserName(String userName);

    UserModel getDetails(String userId, String password);
}
