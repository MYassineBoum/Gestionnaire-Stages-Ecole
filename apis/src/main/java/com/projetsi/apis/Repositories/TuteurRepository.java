package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Tuteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuteurRepository extends JpaRepository<Tuteur, Long>  {
}
