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
@Table(name = "Type")
public class Type {
    @Id
    private Integer code_type;

    private Integer nb_semaines;
}
