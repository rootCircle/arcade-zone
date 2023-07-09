package server.gameloginsinup.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.gameloginsinup.pages.JwtResponsePage;
import server.gameloginsinup.pages.LoginPage;
import server.gameloginsinup.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class Login {
    
    @Autowired
    private LoginService loginService;

    @PostMapping
    public JwtResponsePage login(@RequestBody LoginPage user) throws Exception{
        return this.loginService.findUser(user);
    }  
}

