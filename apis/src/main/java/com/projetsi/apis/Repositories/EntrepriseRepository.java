package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Entreprise;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EntrepriseRepository extends JpaRepository<Entreprise, String> {
    @Transactional
    @Query(value = "FROM Entreprise WHERE no_entreprise = ?1")
    Entreprise findByNoEntreprise(String no_entreprise);
}
