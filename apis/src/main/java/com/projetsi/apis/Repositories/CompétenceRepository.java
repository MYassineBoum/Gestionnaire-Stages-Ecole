package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Compétence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompétenceRepository extends JpaRepository<Compétence, String> {
}
