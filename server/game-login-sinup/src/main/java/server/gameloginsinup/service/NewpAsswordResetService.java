package server.gameloginsinup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.UserDao;
import server.gameloginsinup.entity.UserTable;
import server.gameloginsinup.pages.NewPasswordReset;

@Service
public class NewpAsswordResetService {

    @Autowired
    private UserDao userDao;

    @Autowired 
    private PasswordEncoder passwordEncoder;

    public Boolean ResPassword(NewPasswordReset user){

        boolean f = false;

        UserTable User = userDao.findByEmail(user.getEmail());
        String passwdtoken = user.getPasswordTokengiven();

        System.out.println(passwdtoken);
        System.out.println(User.getPasswordToken());

        if(User!=null && User.getPasswordToken().equalsIgnoreCase(passwdtoken)){
            // String Password= User.setPassword(user.getPassword());
            User.setPassword(getEncodedPassword(user.getPassword()));
            userDao.save(User);

            f = true;
        }
        return f;
        
    }

    private String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
