package server.gameloginsinup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.gameloginsinup.entity.UserTable;
import server.gameloginsinup.service.RegisterService;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class Sinup {
    
    @Autowired
    private RegisterService registerService;

    @PostMapping("/user")
    public String userRegister(@RequestBody UserTable user){

        boolean flage = registerService.registerUser(user);

        if(flage==true){
            return "Register sucessfully";
        }
        else{
            return "User_role are not found";
        }
    }

    @PostMapping("/admin")
    public String AdminRegister(@RequestBody UserTable user){

        boolean flage = registerService.registerAdmin(user);

        if(flage==true){
            return "Register sucessfully";
        }
        else{
            return "Admin_role are not found";
        }
    }
}
