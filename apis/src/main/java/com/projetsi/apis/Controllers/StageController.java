package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projetsi.apis.Entities.Etudiant;
import com.projetsi.apis.Entities.Stage;
import com.projetsi.apis.Repositories.StageRepository;
@RestController
public class StageController {
    @Autowired
    private StageRepository stageRepository;

    @PostMapping("/api/stage/ajouter")
    public ResponseEntity<Stage> ajouterStage(@RequestBody Stage stage) {
        return ResponseEntity.ok(stageRepository.save(stage));
    }

    @DeleteMapping("/api/stage/supprimer/{no_stage}")
    public ResponseEntity<String> supprimerStage(@PathVariable("no_stage") Long no_stage) {
        Optional<Stage> stage = stageRepository.findById(no_stage);
        stageRepository.delete(stage.get());
        return new ResponseEntity<String>("Stage supprimé!", HttpStatus.OK);
    }

    @PutMapping("/api/stage/modifier")
    public ResponseEntity<Stage> modifierStage(@RequestBody Stage stage) {
        return ResponseEntity.ok(stageRepository.save(stage));
    }

    @GetMapping("/api/stage/liste")
    public ResponseEntity<List<Stage>> listerStages() {
        return ResponseEntity.ok(stageRepository.findAll());
    }

    // @GetMapping("/api/etudiant/get/stage")
    // public ResponseEntity<List<Stage>> getStageEtudiant(@RequestParam("no_etudiant") Long no_etudiant) {
    //     return ResponseEntity.ok(stageRepository.findStageEtudiant(no_etudiant));
    // }
}
