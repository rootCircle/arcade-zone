package server.gameloginsinup.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import server.gameloginsinup.entity.Role_Entity;



// public interface Role_modle extends JpaRepository<Role_Entity,String>{

//     // @Query(value = "SELECT * FROM Role_Entity a where a.role_name=?1")
//     // public Role_Entity findByRole_name(String role_name);

//     // public Role_Entity findById(String name);

    
// }


public interface Role_modle extends JpaRepository<Role_Entity,Long>{

    @Query(value = "SELECT * FROM role_table where role_name=?1" ,nativeQuery = true)
    public Role_Entity findByRole_name(String role_name);

    // public Role_Entity findById(String name);


    // public List<Role_Entity> findByRole_name();

    
}
