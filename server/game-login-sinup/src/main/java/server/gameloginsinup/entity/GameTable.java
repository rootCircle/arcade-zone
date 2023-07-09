package server.gameloginsinup.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "game_database")
@Builder
public class GameTable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long game_id;

    @Column(name="game_name",nullable = false)
    private String game_name;

    @Column(name = "game_link",nullable = false)
    private String game_link;

    @Column(name = "image_name")
    private String game_image_name;

    @Column(name = "filePath")
    public String filePath;
}
