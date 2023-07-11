package server.gameloginsinup.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import server.gameloginsinup.dao.GameDao;
import server.gameloginsinup.dao.Role_modle;
import server.gameloginsinup.dao.UserDao;
import server.gameloginsinup.entity.GameTable;
import server.gameloginsinup.entity.Role_Entity;
import server.gameloginsinup.entity.UserTable;
import server.gameloginsinup.pages.GameImageDetail;
import server.gameloginsinup.service.GameRegister;

@RestController
@RequestMapping("/game")
@CrossOrigin
public class Game {

    @Autowired
    private GameRegister gamGameRegister;

    @Autowired
    private UserDao userDao;
    @Autowired
    private GameDao gameDao;

    @Autowired
    private Role_modle roleDoa;

    @PostMapping("/admin")
    @PreAuthorize("hasRole('Admin')")
    public String addGame(@ModelAttribute GameTable game, @RequestParam("file") MultipartFile file, Authentication auth)
            throws IOException {

                Role_Entity r = roleDoa.findByRole_name("Admin");
        UserTable usr = userDao.findByEmail(auth.getName());
        
        if (usr.getEntity().contains(r)) {
            Boolean flage = this.gamGameRegister.registergame(game, file);
            if (flage == true) {
                return "new game added successfully!";
            } else {
                return "Somthing is Wrong!";
            }
        } else
            return "You can't add Games";
    }

    // @PostMapping("/user")
    // @PreAuthorize("hasRole('User')")
    // public String addGame() {
    //     return " User can't be uploade";
    // }

    @GetMapping("/{gameId}")
    @PreAuthorize("hasRole('User,Admin')")
    public ResponseEntity<?> getGameById(@PathVariable Long gameId){
       
        Optional<GameTable> specificGame = this.gameDao.findById(gameId);
        return ResponseEntity.ok(specificGame);
    }

    @GetMapping
    @PreAuthorize("hasRole('User,Admin')")
    public ResponseEntity<?> getAllgame() {

        List<GameTable> game = this.gamGameRegister.getAllgame();

        // if(game!=null){
        // return ResponseEntity.ok(game);
        // }
        // return null;

        try {
            if (game != null) {
                return ResponseEntity.ok(game);
            } else {
                throw new Exception("unAuthoried");
            }
        } catch (Exception e) {
            return ResponseEntity.ok(e.getMessage());
        }
        // return ResponseEntity.ok(message);
    }

    @GetMapping("/{fileName}")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData = this.gamGameRegister.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(org.springframework.http.MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @GetMapping("/gamebyid/{id}")
    @PreAuthorize("hasRole('Admin', 'User')")
    public GameTable getGameById(@PathVariable long id) {
        return this.gamGameRegister.gAmeById(id);
    } 
}
