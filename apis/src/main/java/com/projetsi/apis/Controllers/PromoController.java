package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

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

    @PostMapping("/api/promo/supprimer")
    public ResponseEntity<String> supprimerPromo(@PathVariable("no_promo") Long no_promo) {
        Optional<Promo> promo = promoRepository.findById(no_promo);
        promoRepository.delete(promo.get());
        return new ResponseEntity<String>("Promo supprimé!", HttpStatus.OK);
    }

    @PostMapping("/api/promo/modifier")
    public ResponseEntity<Promo> modifierPromo(@RequestBody Promo promo) {
        Optional<Promo> promoTrouvé = promoRepository.findById(promo.getAnnee_promo());
        promoRepository.delete(promoTrouvé.get());
        return ResponseEntity.ok(promoRepository.save(promo));
    }

    @GetMapping("/api/promo/liste")
    public ResponseEntity<List<Promo>> listerPromos() {
        return ResponseEntity.ok(promoRepository.findAll());
    }
}
