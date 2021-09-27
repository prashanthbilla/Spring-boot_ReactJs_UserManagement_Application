package com.example.prashanth.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserModel {

    private long id;
    private String userId;
    private String name;
    private String password;
    private String phoneNum;

}
