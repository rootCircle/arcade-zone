package server.gameloginsinup.pages;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailPage {
    
    private String to;
    private String message;
    private String description;
}
