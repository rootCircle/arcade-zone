package server.gameloginsinup.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_database")
public class UserTable {

        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        @Column(name = "user_id")
        private Long user_id;

        @Column(name = "user_email", nullable = false, unique = true)
        private String email;

        @Column(name = "full_name", nullable = false)
        private String name;

        @Column(name = "user_name")
        private String username;

        @Column(name = "user_password", nullable = false)
        private String password;

        @Column(name = "password_token")
        private String passwordToken;

        @OneToOne(mappedBy = "user_id", cascade = CascadeType.ALL)
        private UserImageTable img;

        @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
        @JoinTable(name = "USER_ROLE", joinColumns = {
                        @JoinColumn(name = "USER_ID")
        }, inverseJoinColumns = {
                        @JoinColumn(name = "ROLE_ID")
        })
        private Set<Role_Entity> entity;

}
