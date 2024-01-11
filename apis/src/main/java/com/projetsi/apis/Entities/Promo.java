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
@Table(name = "Promo")
public class Promo {
    @Id
    private long annee_promo;

    private int nb_etudiants = 0;

    @ManyToOne
    @JoinColumn(name = "no_professeur")
    private Professeur professeur;
}
