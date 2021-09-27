package com.example.prashanth.adapter.web;


import com.example.prashanth.model.AppResponse;
import com.example.prashanth.model.UserModel;
import com.example.prashanth.port_in.Usecase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/signup")
public class UserController {

    @Autowired
    Usecase usecase;

    @GetMapping("/")
    public String displayMessage() {
        return "Hello to Application";
    }

    @GetMapping("/test")
    public ResponseEntity<Object> apiTest() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<Object> getAll() {
        List<UserModel> userModelList = usecase.getAll();
        if (!userModelList.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "List of Users", true, userModelList), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No Data", false, null), HttpStatus.OK);
        }

    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") long id) {
        String isDeleted = usecase.delete(id);
        if (isDeleted != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), isDeleted, true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User not found", false, null), HttpStatus.OK);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getOne(@PathVariable("id") long id) {
        UserModel userModel = usecase.getOne(id);
        if (userModel != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), " Fetch Successfully", true, userModel), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User not found", false, null), HttpStatus.OK);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Object> userRegister(@RequestBody UserModel userModel) {
        UserModel userModel1 = usecase.getOne(userModel.getId());
        if (userModel1 != null)
            return new ResponseEntity<>(new AppResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "User already Exists, userId"+userModel.getUserId(), false, null), HttpStatus.OK);
        String isCreated = usecase.userRegister(userModel);
        if (isCreated != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), isCreated+", userId = "+userModel.getUserId(), true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Not Inserted", false, null), HttpStatus.OK);
        }
    }

    @PutMapping("/updateuser")
    public ResponseEntity<Object> update(@RequestBody UserModel userModel) {
        UserModel userModel1 = usecase.getOne(userModel.getId());
        if (userModel1 == null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User not found", false, null), HttpStatus.OK);
        }
        userModel1.setName(userModel.getName());
        userModel1.setUserId(userModel.getUserId());
        userModel1.setPhoneNum(userModel.getPhoneNum());
        userModel1.setPassword(userModel.getPassword());
        String isUpdated = usecase.update(userModel1);
        if (isUpdated != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), isUpdated, true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User not updated", false, null), HttpStatus.OK);
        }
    }

    @GetMapping("/{uname}")
    public ResponseEntity<Object> getByUserName(@PathVariable("uname") String userName) {
        UserModel userModel = usecase.getUserName(userName);
        if (userModel != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Fetch Successfully", true, userModel), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User Not found", false, null), HttpStatus.OK);
        }
    }

    @GetMapping("/login")
    public ResponseEntity<Object> login(@RequestParam String userId, @RequestParam String password) {
        UserModel userModel = usecase.getDetails(userId,password);
        if (userModel != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Login successfully....", true, userModel), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Invalid Credentials : User Not found", false, null), HttpStatus.OK);
        }

    }
    @GetMapping("/getlist/{id}")
    public ResponseEntity<Object> getList(@PathVariable("id") long id) {
        List<UserModel> userModelList=new ArrayList<>();
        UserModel userModel = usecase.getOne(id);
        if (userModel != null) {
            userModelList.add(userModel);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), " Fetch Successfully", true, userModelList), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "User not found", false, null), HttpStatus.OK);
        }
    }
}
