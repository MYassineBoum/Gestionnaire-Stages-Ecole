package com.projetsi.apis.Entities;
import java.util.Set;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Stage")
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no_stage")
    private Long no_stage;

    @ManyToOne
    @JoinColumn(name = "no_etudiant")
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "no_professeur")
    private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "no_tuteur")
    private Tuteur tuteur;

    @ManyToOne
    @JoinColumn(name = "no_entreprise")
    private Entreprise entreprise;

    @ManyToOne
    @JoinColumn(name = "code_type")
    private Type type;

    @ManyToOne
    @JoinColumn(name = "code_competence")
    private Competence competence;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "niveau_exige")
    private Niveau niveau;

    private int annee_stage;
    private String compte_rendu_stage;
}
