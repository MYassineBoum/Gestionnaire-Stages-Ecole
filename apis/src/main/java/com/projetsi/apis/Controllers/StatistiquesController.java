package com.projetsi.apis.Controllers;

import com.projetsi.apis.Entities.Statistiques;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class StatistiquesController {
    @Autowired
    private Statistiques statistiques;

    @GetMapping("/api/dashboard/statistiques")
    public Map<String, Integer> getStatistiques() {
        Map<String, Integer> stats = new HashMap<>();
        stats.put("totalEtudiants", statistiques.getTotalEtudiants());
        stats.put("totalProfesseurs", statistiques.getTotalProfesseurs());
        stats.put("totalTuteurs", statistiques.getTotalTuteurs());
        stats.put("totalEntreprises", statistiques.getTotalEntreprises());
        stats.put("totalStages", statistiques.getTotalStages());
        return stats;
    }
}
