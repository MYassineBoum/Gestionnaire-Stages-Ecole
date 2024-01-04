package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

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

    @PostMapping("/api/entreprise/supprimer")
    public ResponseEntity<String> supprimerentreprise(@PathVariable("no_entreprise") Long no_entreprise) {

        return new ResponseEntity<String>("entreprise supprimé!", HttpStatus.OK);
    }

    @PostMapping("/api/entreprise/modifier")
    public ResponseEntity<Entreprise> modifierentreprise(@RequestBody Entreprise entreprise) {
        Optional<Entreprise> entrepriseTrouvé = entrepriseRepository.findById(entreprise.getNo_entreprise());
        entrepriseRepository.delete(entrepriseTrouvé.get());
        return ResponseEntity.ok(entrepriseRepository.save(entreprise));
    }

    @GetMapping("/api/entreprise/liste")
    public ResponseEntity<List<Entreprise>> listerentreprises() {
        return ResponseEntity.ok(entrepriseRepository.findAll());
    }
}
