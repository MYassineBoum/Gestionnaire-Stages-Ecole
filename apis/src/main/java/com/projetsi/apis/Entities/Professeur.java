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
@Table(name = "Professeur")
public class Professeur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no_professeur;

    private String qualite_professeur;
    private String nom_professeur;
    private String prenom_professeur;
    private String email_professeur;
    private String adresse_professeur;
    private String code_postal_professeur;
    private String ville_professeur;
    private String tel_ecole_professeur;
    private String tel_domicile_professeur;
    private String date_embauche_professeur;
    private String date_depart_professeur;
}
