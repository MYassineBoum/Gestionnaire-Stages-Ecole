package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Competence;
import com.projetsi.apis.Repositories.CompetenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompetenceController {
    @Autowired
    private CompetenceRepository competenceRepository;

    @GetMapping("/api/competence/liste")
    public ResponseEntity<List<Competence>> listerCompetences() {
        return ResponseEntity.ok(competenceRepository.findAll());
    }
}
