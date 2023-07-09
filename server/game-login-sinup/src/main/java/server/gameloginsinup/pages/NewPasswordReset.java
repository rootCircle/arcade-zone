package server.gameloginsinup.pages;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewPasswordReset {
    
    private String email;
    private String password;
    private String passwordTokengiven;

}
