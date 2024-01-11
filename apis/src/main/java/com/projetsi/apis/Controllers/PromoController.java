package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

import com.projetsi.apis.Entities.Etudiant;
import com.projetsi.apis.Entities.Stage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projetsi.apis.Entities.Promo;
import com.projetsi.apis.Repositories.PromoRepository;
@RestController
public class PromoController {
    @Autowired
    private PromoRepository promoRepository;

    @PostMapping("/api/promo/ajouter")
    public ResponseEntity<Promo> ajouterPromo(@RequestBody Promo promo) {
        return ResponseEntity.ok(promoRepository.save(promo));
    }

    @DeleteMapping("/api/promo/supprimer/{annee_promo}")
    public ResponseEntity<String> supprimerPromo(@PathVariable("annee_promo") Long annee_promo) {
        Optional<Promo> promo = promoRepository.findById(annee_promo);
        promo.ifPresent(value -> promoRepository.delete(value));
        return new ResponseEntity<String>("Promotion supprimée!", HttpStatus.OK);
    }

    @PostMapping("/api/promo/modifier")
    public ResponseEntity<Promo> modifierPromo(@RequestBody Promo promo) {
        promo.setNb_etudiants(promo.getNb_etudiants() + 1);
        return ResponseEntity.ok(promoRepository.save(promo));
    }

    @GetMapping("/api/promo/liste")
    public ResponseEntity<List<Promo>> listerPromos() {
        return ResponseEntity.ok(promoRepository.findAll());
    }

    @PostMapping("/api/promo/verifier")
    public ResponseEntity<Promo> verifierPromo(@RequestBody Promo promo) {
        promo.setNb_etudiants(promo.getNb_etudiants() - 1);
        return ResponseEntity.ok(promoRepository.save(promo));
    }



}
