package server.gameloginsinup.service;

import java.util.HashSet;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.UserDao;
import server.gameloginsinup.dao.Role_modle;
import server.gameloginsinup.entity.Role_Entity;
import server.gameloginsinup.entity.UserTable;

@Service
public class RegisterService {

    @Autowired
    private  UserDao registerDao;

    @Autowired
    private Role_modle role_modle;

    @Autowired 
    private PasswordEncoder passwordEncoder;

    
    public Boolean registerUser(UserTable user){

    UserTable User =null;
    Role_Entity role = role_modle.findByRole_name("User");  

        if(role!=null){
        Set<Role_Entity> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setEntity(userRoles);
        user.setPassword(getEncodedPassword(user.getPassword()));   
        User = registerDao.save(user);
    }
    
        if(User != null){
            return true;
        }
        return false;
    }


    public Boolean registerAdmin(UserTable user){



    UserTable User =null;
    Role_Entity role = role_modle.findByRole_name("Admin");  

    if(role!=null){

        Set<Role_Entity> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setEntity(userRoles);
        user.setPassword(getEncodedPassword(user.getPassword()));
        User = registerDao.save(user);
    }
    if(User != null){
        return true;
    }
    return false;
    }

    private String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
