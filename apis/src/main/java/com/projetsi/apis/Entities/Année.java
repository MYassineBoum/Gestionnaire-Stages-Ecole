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
@Table(name = "Année")
public class Année {
    @Id
    private Integer année;
}
