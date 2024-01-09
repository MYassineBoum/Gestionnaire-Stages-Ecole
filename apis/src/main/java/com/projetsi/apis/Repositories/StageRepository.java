package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Stage;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StageRepository extends JpaRepository<Stage, Long>  {

    @Transactional
    @Query(value="FROM Stage WHERE etudiant.no_etudiant= ?1")
    List<Stage> findStageEtudiant(Long no_etudiant);

    @Transactional
    @Query(value="FROM Stage WHERE professeur.no_professeur= ?1")
    List<Stage> findStageProfesseur(Long no_professeur);

}
