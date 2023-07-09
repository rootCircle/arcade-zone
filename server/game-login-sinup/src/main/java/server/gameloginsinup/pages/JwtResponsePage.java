package server.gameloginsinup.pages;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.gameloginsinup.entity.UserTable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponsePage {
    
    private String tokenNumber;
    private UserTable user_detail;

    // public JwtResponse(String tokenNumber,UserTable user_detail){
    //     this.tokenNumber=tokenNumber;
    //     this.user_detail=user_detail;
    // }
}

