package com.example.prashanth.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppResponse {
    private int status;
    private String message;
    private boolean success;
    private Object data;
}
