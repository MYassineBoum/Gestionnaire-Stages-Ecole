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

    private String qualite_tuteur;
    private String nom_tuteur;
    private String prenom_tuteur;
    private String telephone_tuteur;
}
