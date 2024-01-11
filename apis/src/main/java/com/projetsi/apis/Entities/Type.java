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
@Table(name = "Type")
public class Type {
    @Id
    private Integer code_type;
    private Integer nb_semaines;

//    @OneToMany(mappedBy = "type")
//    private List<Stage> stages;

//    @OneToOne(mappedBy = "type")
//    private Stage stage;
}
