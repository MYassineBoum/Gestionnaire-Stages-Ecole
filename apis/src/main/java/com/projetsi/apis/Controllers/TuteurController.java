package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projetsi.apis.Entities.Tuteur;
import com.projetsi.apis.Repositories.TuteurRepository;
@RestController
public class TuteurController {
    @Autowired
    private TuteurRepository tuteurRepository;

    @PostMapping("/api/tuteur/ajouter")
    public ResponseEntity<Tuteur> ajouterTuteur(@RequestBody Tuteur tuteur) {
        return ResponseEntity.ok(tuteurRepository.save(tuteur));
    }

    @DeleteMapping("/api/tuteur/supprimer/{no_tuteur}")
    public ResponseEntity<String> supprimerTuteur(@PathVariable("no_tuteur") Long no_tuteur) {
        Optional<Tuteur> Tuteur = tuteurRepository.findById(no_tuteur);
        tuteurRepository.delete(Tuteur.get());
        return new ResponseEntity<String>("Tuteur supprimé!", HttpStatus.OK);
    }

    @PutMapping("/api/tuteur/modifier")
    public ResponseEntity<Tuteur> modifierTuteur(@RequestBody Tuteur tuteur) {
        return ResponseEntity.ok(tuteurRepository.save(tuteur));
    }

    @GetMapping("/api/tuteur/liste")
    public ResponseEntity<List<Tuteur>> listerTuteurs() {
        return ResponseEntity.ok(tuteurRepository.findAll());
    }
}
