package server.gameloginsinup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.gameloginsinup.entity.Role_Entity;
import server.gameloginsinup.service.RoleService;

@RestController
@RequestMapping("/roles")
@CrossOrigin
public class Role {
    
    @Autowired
    private RoleService roleService;

   
    @PostMapping
    public String enterRole(@RequestBody Role_Entity role){

        boolean flage  = roleService.enterRole(role);

        if(flage == true){
            return "insert sucessfully";
        }
        else{
            return "Something is wrong!";
        }
    }
}
