package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Professeur;
import com.projetsi.apis.Entities.Promo;
import com.projetsi.apis.Entities.Type;
import com.projetsi.apis.Repositories.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TypeController {
    @Autowired
    private TypeRepository typeRepository;

    @PostMapping("/api/type/ajouter")
    public ResponseEntity<Type> ajouterType(@RequestBody Type type) {
        return ResponseEntity.ok(typeRepository.save(type));
    }

    @GetMapping("/api/type/liste")
    public ResponseEntity<List<Type>> listerTypes() {
        return ResponseEntity.ok(typeRepository.findAll());
    }
}
