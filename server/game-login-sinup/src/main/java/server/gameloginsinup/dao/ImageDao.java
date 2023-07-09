package server.gameloginsinup.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import server.gameloginsinup.entity.UserImageTable;

public interface ImageDao extends JpaRepository<UserImageTable,Long>{
    
}
