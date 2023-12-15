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
    private String code_compétence;

    private String libellé_compétence;
    private String description_compétence;
}
