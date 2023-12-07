package com.gestionstages.Entities;

import java.util.Set;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@Entity
@Table(name = "Stage")
public class Stage {
    @Id
    private Long no_stage;

    @OneToOne(mappedBy = "stage")
    private Etudiant no_etudiant;

    @OneToOne(mappedBy = "stage")
    private Professeur no_professeur;

    @OneToOne(mappedBy = "stage")
    private Tuteur no_tuteur;

    @OneToOne(mappedBy = "stage")
    private Entreprise no_entreprise;

    @OneToOne(mappedBy = "stage")
    private Type code_type;
    
    private Integer année_stage;
    private String compte_rendu_stage;
}
