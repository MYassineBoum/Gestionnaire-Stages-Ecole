package com.gestionstages.Entities;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@Entity
@Table(name = "Etudiant")
public class Etudiant {
    @Id
    private Long no_etudiant;
    
    private String nom_etudiant;
    private String prenom_etudiant;
    private String email_etudiant;
    private String adresse_etudiant;
    private Integer code_postal_etudiant;
    private String ville_etudiant;
    private Date date_naissance_etudiant;
    private String sexe_etudiant;
    private String telephone_etudiant;
    private String mention_etudiant;
    private String qualite_etudiant;
}
