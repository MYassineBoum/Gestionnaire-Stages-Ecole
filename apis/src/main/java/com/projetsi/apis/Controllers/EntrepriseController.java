package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

import com.projetsi.apis.Entities.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projetsi.apis.Entities.Entreprise;
import com.projetsi.apis.Repositories.EntrepriseRepository;
@RestController
public class EntrepriseController {
    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @PostMapping("/api/entreprise/ajouter")
    public ResponseEntity<Entreprise> ajouterentreprise(@RequestBody Entreprise entreprise) {
        return ResponseEntity.ok(entrepriseRepository.save(entreprise));
    }

    @DeleteMapping("/api/entreprise/supprimer/{no_entreprise}")
    public ResponseEntity<String> supprimerentreprise(@PathVariable("no_entreprise") String no_entreprise) {
        Entreprise entreprise = entrepriseRepository.findByNoEntreprise(no_entreprise);
        entrepriseRepository.delete(entreprise);
        return new ResponseEntity<String>("entreprise supprimé!", HttpStatus.OK);
    }

    @PutMapping("/api/entreprise/modifier")
    public ResponseEntity<Entreprise> modifierentreprise(@RequestBody Entreprise entreprise) {
        return ResponseEntity.ok(entrepriseRepository.save(entreprise));
    }

    @GetMapping("/api/entreprise/liste")
    public ResponseEntity<List<Entreprise>> listerentreprises() {
        return ResponseEntity.ok(entrepriseRepository.findAll());
    }
}
