package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StageRepository extends JpaRepository<Stage, Long>  {
}
