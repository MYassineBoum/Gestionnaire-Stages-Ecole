package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Professeur;
import com.projetsi.apis.Entities.Type;
import com.projetsi.apis.Repositories.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TypeController {
    @Autowired
    private TypeRepository typeRepository;

    @PostMapping("/api/type/ajouter")
    public ResponseEntity<Type> ajouterType(@RequestBody Type type) {
        return ResponseEntity.ok(typeRepository.save(type));
    }
}
