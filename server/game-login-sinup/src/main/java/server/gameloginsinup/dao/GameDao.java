package server.gameloginsinup.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import server.gameloginsinup.entity.GameTable;
import java.util.List;


public interface GameDao extends JpaRepository<GameTable,Long>{
    
    @Query(value = "SELECT * FROM game_database where image_name=?1" ,nativeQuery = true)
    public Optional<GameTable> findByName(String image_name);


    // @Query(value = "SELECT * FROM game_database where game_id=?1" ,nativeQuery = true)
    // public Optional<GameTable> findGame_id(Long game_id);
}
