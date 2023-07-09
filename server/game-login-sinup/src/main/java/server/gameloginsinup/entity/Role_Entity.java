package server.gameloginsinup.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

@Table(name="role_table")
public class Role_Entity {
    
    @Id
    @Column(name = "role_id",nullable = false)
    private Long role_id;
    @Column(name = "role_name",nullable = false,unique = true)
    private String role_name;

}
