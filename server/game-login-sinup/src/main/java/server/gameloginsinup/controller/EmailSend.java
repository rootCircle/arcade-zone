package server.gameloginsinup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.gameloginsinup.pages.EmailPage;
import server.gameloginsinup.service.EmailService;

@RestController
@RequestMapping("/email")
// @CrossOrigin
public class EmailSend {

    // @Autowired
    // private EmailService emailService;
    
    // @PostMapping
    // @PreAuthorize("hasRole('User,Admin')")
    // public ResponseEntity<?> sendEmail(@RequestBody EmailPage emailPage){
    //     boolean f = this.emailService.sendEmail(emailPage);

    //     if(f==true){
    //        return ResponseEntity.ok("Done...");
    //     }
    //     else{
    //         return ResponseEntity.ok("not send...");
    //     }
    // }

}
