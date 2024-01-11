package com.projetsi.apis.Entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Niveau")
public class Niveau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "code_competence")
    private Competence competence;

    @ManyToOne
    @JoinColumn(name = "code_type")
    private Type type;

    private Integer niveau_exige;

}
