package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Professeur;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {
    @Transactional
    @Query(value="FROM Professeur WHERE email_professeur= ?1")
    Professeur findByEmail(String email_professeur);
    
}
