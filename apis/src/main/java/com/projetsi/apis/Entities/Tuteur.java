package com.projetsi.apis.Entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Tuteur")
public class Tuteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no_tuteur;

    private String qualité_tuteur;
    private String nom_tuteur;
    private String prénom_tuteur;
    private String téléphone_tuteur;
}
