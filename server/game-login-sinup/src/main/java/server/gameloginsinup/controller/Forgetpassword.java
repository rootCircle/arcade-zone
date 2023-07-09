package server.gameloginsinup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.gameloginsinup.pages.NewPasswordReset;
import server.gameloginsinup.service.EmailService;
import server.gameloginsinup.service.ForgetPasswordService;
import server.gameloginsinup.service.NewpAsswordResetService;


@RestController
@RequestMapping("/forget")
@CrossOrigin
public class Forgetpassword {

    @Autowired
    private ForgetPasswordService forgetPassword;

    @Autowired
    private EmailService emailService;

    @Autowired
    private NewpAsswordResetService newPasswordResetService;

    
    @PostMapping("/email/{email}")
    @PreAuthorize("hasRole('User,Admin')")
    public String checkEmail(@PathVariable String email){

        boolean f = forgetPassword.checkEmail(email);
        if(!f){
            return "Eamil are not found";
        }
        else{

            emailService.sendEmail(email);

            return "Successfully Send ";
        }
    }


    @PostMapping("/newPassword")
    @PreAuthorize("hasRole('User,Admin')")
    public String ResPassword(@RequestBody NewPasswordReset newuser){

        boolean f = newPasswordResetService.ResPassword(newuser);
        if(f){
            return "sucessfully send";
        }
        else{
            return "Somthing is Wrong!";
        } 
    }
}
