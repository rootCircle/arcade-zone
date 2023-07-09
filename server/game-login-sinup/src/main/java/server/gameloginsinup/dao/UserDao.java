package server.gameloginsinup.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import server.gameloginsinup.entity.UserTable;

// public interface UserDao extends JpaRepository<UserTable,String>{
    
//     public UserTable  findByEmail(String email);
// }


public interface UserDao extends JpaRepository<UserTable,Long>{
    
    // public UserTable  findByEmail(String email);

    @Query(value = "SELECT * FROM user_database where user_email=?1" ,nativeQuery = true)
    public UserTable findByEmail(String email);
}
