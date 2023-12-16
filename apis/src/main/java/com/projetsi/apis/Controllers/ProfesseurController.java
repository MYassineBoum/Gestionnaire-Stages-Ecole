package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Professeur;
import com.projetsi.apis.Repositories.ProfesseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProfesseurController {
    @Autowired
    private ProfesseurRepository professeurRepository;

    @PostMapping("/api/professeur/ajouter")
    public ResponseEntity<Professeur> ajouterProfesseur(@RequestBody Professeur professeur) {
        return ResponseEntity.ok(professeurRepository.save(professeur));
    }

    @PostMapping("/api/professeur/supprimer")
    public ResponseEntity<String> supprimerProfesseur(@PathVariable("no_professeur") Long no_professeur) {
        Optional<Professeur> professeur = professeurRepository.findById(no_professeur);
        professeurRepository.delete(professeur.get());
        return new ResponseEntity<String>("Professeur supprimé!", HttpStatus.OK);
    }

    @PostMapping("/api/professeur/modifier")
    public ResponseEntity<Professeur> modifierProfesseur(@RequestBody Professeur professeur) {
        Optional<Professeur> professeurTrouvé = professeurRepository.findById(professeur.getNo_professeur());
        professeurRepository.delete(professeurTrouvé.get());
        return ResponseEntity.ok(professeurRepository.save(professeur));
    }

    @GetMapping("/api/professeur/liste")
    public ResponseEntity<List<Professeur>> listerProfesseurs() {
        return ResponseEntity.ok(professeurRepository.findAll());
    }
}
