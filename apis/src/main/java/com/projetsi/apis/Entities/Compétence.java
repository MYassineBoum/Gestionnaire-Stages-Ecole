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
@Table(name = "Compétence")
public class Compétence {
    @Id
    private String code_competence;

    private String libelle_competence;
    private String description_competence;
}
