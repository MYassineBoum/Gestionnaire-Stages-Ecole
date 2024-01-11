package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Etudiant;

import com.projetsi.apis.Entities.Promo;
import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    @Transactional
    @Query(value="FROM Etudiant WHERE email_etudiant= ?1")
    Etudiant findByEmail(String email_etudiant);

    @Transactional
    @Query(value = "FROM Etudiant WHERE promo.annee_promo = ?1")
    List<Etudiant> findByPromo(Long annee_promo);
}
