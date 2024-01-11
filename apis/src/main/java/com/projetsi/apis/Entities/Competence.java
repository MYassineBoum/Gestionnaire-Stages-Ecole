package com.projetsi.apis.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Competence")
public class Competence {
    @Id
    private String code_competence;

    private String libelle_competence;
    private String description_competence;

}
