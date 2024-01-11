package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Niveau;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NiveauRepository extends JpaRepository<Niveau, Long> {
    @Transactional
    @Query(value = "SELECT niveau_exige FROM Niveau WHERE type.code_type = ?1 and competence.code_competence = ?2")
    Integer findNiveau(Integer code_type, String code_competence);
}
