package server.gameloginsinup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.Role_modle;
import server.gameloginsinup.entity.Role_Entity;

@Service
public class RoleService {
    
    @Autowired
    private Role_modle role_modleDao;

    public Boolean enterRole(Role_Entity role){

        Role_Entity Role = role_modleDao.save(role);

        if(Role!=null){
            return true;
        }
        return false;
    }
}
