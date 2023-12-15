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
    private Long no_stage;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "no_etudiant")
    private Etudiant etudiant;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "no_professeur")
    private Professeur professeur;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "no_tuteur")
    private Tuteur tuteur;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "no_entreprise")
    private Entreprise entreprise;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "code_type")
    private Type type;

    private Integer année_stage;
    private String compte_rendu_stage;
}
