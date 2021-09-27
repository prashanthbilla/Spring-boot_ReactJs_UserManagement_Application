package com.example.prashanth.adapter.persistence;

import com.example.prashanth.model.UserModel;
import com.example.prashanth.port_out.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository implements IUserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<UserModel> getAll() {
        try {
            return jdbcTemplate.query("select * from register", (rs, rowNum) -> {

                return new UserModel(rs.getLong("id"), rs.getString("userId"), rs.getString("name"),
                        rs.getString("password"), rs.getString("phoneNum"));
            });
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public String delete(long id) {
        try {
            int i = jdbcTemplate.update("delete from register where id=?", id);
            if (i == 1)
                return "id '" + id + "' successfully deleted....";
            return null;
        } catch (Exception e) {
            return null;
        }
    }


    @Override
    public UserModel getOne(long id) {
        UserModel userModel = null;
        try {
            userModel = jdbcTemplate.queryForObject("select * from register where id=?", (rs, rowNum) -> {
                return new UserModel(rs.getLong("id"), rs.getString("userId"), rs.getString("name"),
                        rs.getString("password"), rs.getString("phoneNum"));
            }, id);
            return userModel;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public String insert(UserModel userModel) {
        try {
            int i = jdbcTemplate.update("insert into register (id, userId, name, password, phoneNum) values(?, ?,?,?,?)", userModel.getId(), userModel.getUserId(),
                    userModel.getName(), userModel.getPassword(), userModel.getPhoneNum());
            if (i == 1)
                return "Inserted...Successfully";
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public String update(UserModel userModel) {
        try {
            int i = jdbcTemplate.update("update register set userId=?,name=?,password=?,phoneNum=? where id=?", userModel.getUserId(),
                    userModel.getName(), userModel.getPassword(), userModel.getPhoneNum(), userModel.getId());
            if (i == 1)
                return "Updated Successfully";
            return null;
        } catch (Exception e) {
            return null;
        }

    }

    @Override
    public UserModel getUserName(String userName) {
        UserModel userModel = null;
        try {
            userModel = jdbcTemplate.queryForObject("select * from register where userId=?", (rs, rowNum) -> {
                return new UserModel(rs.getLong("id"), rs.getString("userId"), rs.getString("name"),
                        rs.getString("password"), rs.getString("phoneNum"));
            }, userName);
            return userModel;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public UserModel getByUserId(String userId) {
        try {
            UserModel userModel = jdbcTemplate.queryForObject("select * from register where userId=?", (rs, rowNum) -> {
                return new UserModel(rs.getLong("id"), rs.getString("userId"), rs.getString("name"),
                        rs.getString("password"), rs.getString("phoneNum"));
            }, userId);

            if (userModel!=null)
                return userModel;
            return null;

        } catch (Exception e) {
            return null;
        }
    }

    public boolean getCount(String userId,String password) {
        try {
            int result = jdbcTemplate.queryForObject("select count(userId) from register where userId=? and password=?", Integer.class);
            return result == 1;
        }catch (Exception e) {
            return false;
        }
    }
}
