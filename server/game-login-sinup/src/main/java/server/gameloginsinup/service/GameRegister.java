package server.gameloginsinup.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import server.gameloginsinup.dao.GameDao;
import server.gameloginsinup.entity.GameTable;
import server.gameloginsinup.pages.GameImageDetail;

@Service
public class GameRegister {

    @Autowired
    private GameDao gameDao;

    // @Autowired
    // private GameImageDetail gameImageDetail;

    public Boolean registergame(GameTable game, MultipartFile file) throws IOException {

        String name = game.getGame_name();
        String game_link = game.getGame_link();

        String  game_img_name = file.getOriginalFilename();
        String game_dec = game.getGame_desc();

        final String filePath = new ClassPathResource("static/img").getFile().getAbsolutePath();

        if (!file.isEmpty()) {

            // File savefile = new ClassPathResource("static/img").getFile();
            Path path_DIR = Paths.get(filePath+File.separator+file.getOriginalFilename());

            Files.copy(file.getInputStream(),path_DIR, StandardCopyOption.REPLACE_EXISTING);
        } else {
            System.out.println("file are empty");
        }
        GameTable Game = gameDao.save(GameTable.builder()
                .game_name(name)
                .game_link(game_link)
                .game_image_name(game_img_name)
                .game_desc(game_dec)
                .filePath(filePath+"/"+file.getOriginalFilename())
                .build());      
        if (Game != null) {
            return true;
        }
        return false;

    }

    public List<GameTable> getAllgame(){

        // List<GameImageDetail> list = new ArrayList<>();

        List<GameTable> game=null;
        try {
            game = gameDao.findAll();
            if(game==null){
            //     game.forEach((data)->{
            //         try {
            //         //    byte[] image =  downloadImageFromFileSystem(data.getGame_image_name());
            //         //    gameImageDetail.setGame(data);
            //         //    gameImageDetail.setImg(image);
            //         //    list.add(gameImageDetail);

            //         downloadImageFromFileSystem(data.getGame_image_name());

            //         } catch (IOException e) {
            //             e.printStackTrace();
            //         }
            //    });

            throw new Exception("No game found");
            } 
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return game;
    }

    // public byte[] downloadImageFromFileSystem(String img_name) throws IOException {
    //     Optional<GameTable> fileData = gameDao.findByName(img_name);
    //     String filePath=fileData.get().getFilePath();
    //     byte[] images = Files.readAllBytes(new File(filePath).toPath());
    //     return images;
    // }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<GameTable> fileData = gameDao.findByName(fileName);
        String filePath=fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }


    public GameTable gAmeById(Long id){

        List<GameTable>  game = gameDao.findAll();

        Optional<GameTable> gameFound = game.stream()
            .filter(data -> data.getGame_id() == id)
            .findFirst();
        
        return gameFound.get();
        
    }
}
