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
@Table(name = "Entreprise")
public class Entreprise {
    @Id
    private String no_entreprise;

    private String forme_juridique_entreprise;
    private String raison_sociale_entreprise;
    private String adresse_entreprise;
    private String code_postal_entreprise;
    private String ville_entreprise;
    private String telephone_entreprise;
    private String fax_entreprise;
    private String contact_entreprise;
    private String tel_contact_entreprise;
}
