package com.example.prashanth.usecase_impl;

import com.example.prashanth.model.UserModel;
import com.example.prashanth.port_in.Usecase;
import com.example.prashanth.port_out.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService implements Usecase {

    @Autowired
    IUserRepository userRepository;


    @Override
    public List<UserModel> getAll() {
        return userRepository.getAll();
    }

    @Override
    public String delete(long id) {
        return userRepository.delete(id);
    }

    @Override
    public UserModel getOne(long id) {
        return userRepository.getOne(id);
    }

    @Override
    public String userRegister(UserModel userModel) {
        return userRepository.insert(userModel);
    }

    @Override
    public String update(UserModel userModel) {
        return userRepository.update(userModel);
    }

    @Override
    public UserModel getUserName(String userName) {
        return userRepository.getUserName(userName);
    }

    @Override
    public UserModel getDetails(String userId, String password) {
        UserModel userModel = userRepository.getByUserId(userId);
        if (userModel!=null)
            if (Objects.equals(password, userModel.getPassword())) {
            return userModel;
        }
        return null;
    }
}
