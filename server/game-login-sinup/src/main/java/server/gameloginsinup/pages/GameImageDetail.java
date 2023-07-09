package server.gameloginsinup.pages;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.gameloginsinup.entity.GameTable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameImageDetail {
    
    private byte[] img;
    private GameTable game;
}
