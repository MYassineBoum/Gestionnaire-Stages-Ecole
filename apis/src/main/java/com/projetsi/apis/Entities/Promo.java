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
    private Long annee_promo;

    private Integer nb_inscrits_promo;
    private Integer nb_recus_promo;
}
