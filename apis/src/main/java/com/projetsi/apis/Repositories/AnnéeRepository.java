package com.projetsi.apis.Repositories;

import com.projetsi.apis.Entities.Année;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnéeRepository extends JpaRepository<Année, Integer>  {
}
