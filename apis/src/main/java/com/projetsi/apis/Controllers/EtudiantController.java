package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Etudiant;
import com.projetsi.apis.Entities.Promo;
import com.projetsi.apis.Entities.Stage;
import com.projetsi.apis.Repositories.EtudiantRepository;
import com.projetsi.apis.Repositories.StageRepository;

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

    @Autowired
    private StageRepository stageRepository;

    @PostMapping("/api/etudiant/ajouter")
    public ResponseEntity<Etudiant> ajouterEtudiant(@RequestBody Etudiant etudiant) {
        return ResponseEntity.ok(etudiantRepository.save(etudiant));
    }

    @DeleteMapping("/api/etudiant/supprimer/{no_etudiant}")
    public ResponseEntity<String> supprimerEtudiant(@PathVariable("no_etudiant") Long no_etudiant) {
        Optional<Etudiant> etudiant = etudiantRepository.findById(no_etudiant);
        etudiantRepository.delete(etudiant.get());
        return new ResponseEntity<String>("Etudiant supprimé!", HttpStatus.OK);
    }

    @GetMapping("/api/etudiant/liste")
    public ResponseEntity<List<Etudiant>> listerEtudiants() {
        return ResponseEntity.ok(etudiantRepository.findAll());
    }

    @PutMapping("/api/etudiant/modifier")
    public ResponseEntity<Etudiant> modifierEtudiant(@RequestBody Etudiant etudiant) {
        return ResponseEntity.ok(etudiantRepository.save(etudiant));
    }

    @GetMapping("/api/etudiant/get")
    public ResponseEntity<Etudiant> getEtudiant(@RequestParam("email_etudiant") String email_etudiant) {
        return ResponseEntity.ok(etudiantRepository.findByEmail(email_etudiant));
    }

    @GetMapping("/api/etudiant/promo")
    public ResponseEntity<List<Etudiant>> get(@RequestParam Long annee_promo) {
        return ResponseEntity.ok(etudiantRepository.findByPromo(annee_promo));
    }
    
    @GetMapping("/api/etudiant/get/stage")
    public ResponseEntity<List<Stage>> getStageEtudiant(@RequestParam("no_etudiant") Long no_etudiant) {
        return ResponseEntity.ok(stageRepository.findStageEtudiant(no_etudiant));
    }

    @GetMapping("/api/etudiant/get/stageProf")
    public ResponseEntity<List<Stage>> getStageProfesseur(@RequestParam("no_professeur") Long no_professeur) {
        return ResponseEntity.ok(stageRepository.findStageProfesseur(no_professeur));
    }

}
