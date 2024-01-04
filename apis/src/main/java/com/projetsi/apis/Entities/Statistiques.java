package com.projetsi.apis.Entities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class Statistiques {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int getTotalEtudiants() {
        String sql = "SELECT COUNT(*) FROM Etudiant";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int getTotalProfesseurs() {
        String sql = "SELECT COUNT(*) FROM Professeur";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int getTotalTuteurs() {
        String sql = "SELECT COUNT(*) FROM Tuteur";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int getTotalEntreprises() {
        String sql = "SELECT COUNT(*) FROM Entreprise";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int getTotalStages() {
        String sql = "SELECT COUNT(*) FROM Stage";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }
}
