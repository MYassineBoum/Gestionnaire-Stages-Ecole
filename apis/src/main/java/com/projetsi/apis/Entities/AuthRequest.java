package com.projetsi.apis.Entities;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthRequest {
    private String identifiant;
    private String motdepasse;
}
