package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Etudiant;
import com.projetsi.apis.Repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EtudiantController {
    @Autowired
    private EtudiantRepository etudiantRepository;

    @PostMapping("/api/etudiant/ajouter")
    public ResponseEntity<Etudiant> ajouterEtudiant(@RequestBody Etudiant etudiant) {
        return ResponseEntity.ok(etudiantRepository.save(etudiant));
    }

    @PostMapping("/api/etudiant/supprimer")
    public ResponseEntity<String> supprimerEtudiant(@PathVariable("no_etudiant") Long no_etudiant) {
        Optional<Etudiant> etudiant = etudiantRepository.findById(no_etudiant);
        etudiantRepository.delete(etudiant.get());
        return new ResponseEntity<String>("Etudiant supprimé!", HttpStatus.OK);
    }

    @PostMapping("/api/etudiant/modifier")
    public ResponseEntity<Etudiant> modifierEtudiant(@RequestBody Etudiant etudiant) {
        Optional<Etudiant> etudiantTrouvé = etudiantRepository.findById(etudiant.getNo_etudiant());
        etudiantRepository.delete(etudiantTrouvé.get());
        return ResponseEntity.ok(etudiantRepository.save(etudiant));
    }

    @GetMapping("/api/etudiant/liste")
    public ResponseEntity<List<Etudiant>> listerEtudiants() {
        return ResponseEntity.ok(etudiantRepository.findAll());
    }

    @GetMapping("/api/etudiant")
    public ResponseEntity<Etudiant> getEtudiant(@RequestParam("email_etudiant") String email_etudiant) {
        return ResponseEntity.ok(etudiantRepository.findByEmail(email_etudiant));
    }

}
