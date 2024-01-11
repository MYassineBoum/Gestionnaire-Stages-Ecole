package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Competence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface CompetenceRepository extends JpaRepository<Competence, String> {
}
