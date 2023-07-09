package server.gameloginsinup.service;

import java.util.Random;  

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.UserDao;
import server.gameloginsinup.entity.UserTable;

@Service
public class ForgetPasswordService {
    

    @Autowired
    private UserDao userDao;

    @Autowired 
    private PasswordEncoder passwordEncoder;

    public boolean checkEmail(String email){

        UserTable user =userDao.findByEmail(email);

        boolean f = false;
        if(user!=null){

            Random random = new Random();   
            int num = random.nextInt(999999);
            user.setPasswordToken(getEncodedPassword(String.format("%d",num)));
            userDao.save(user);

            f = true;
        }
        return f;
    }

    private String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
