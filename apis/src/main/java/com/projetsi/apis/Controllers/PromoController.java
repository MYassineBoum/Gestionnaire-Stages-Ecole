package com.projetsi.apis.Controllers;

import java.util.List;
import java.util.Optional;

import com.projetsi.apis.Entities.Etudiant;
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
        promo.ifPresent(value -> promoRepository.delete(value));
        return new ResponseEntity<String>("Promo supprimé!", HttpStatus.OK);
    }

    @PutMapping("/api/promo/modifier/{annee_promo}")
    public ResponseEntity<Promo> modifierPromo(@PathVariable("annee_promo") long annee_promo) {
        Optional<Promo> promoTrouve = promoRepository.findById(annee_promo);
        if(promoTrouve.isPresent()) {
            promoTrouve.get().setNb_etudiants(promoTrouve.get().getNb_etudiants() + 1);
            return ResponseEntity.ok(promoRepository.save(promoTrouve.get()));
        } else {
            Promo newPromo = new Promo(annee_promo, 1);
            return ResponseEntity.ok(promoRepository.save(newPromo));
        }
    }

    @GetMapping("/api/promo/liste")
    public ResponseEntity<List<Promo>> listerPromos() {
        return ResponseEntity.ok(promoRepository.findAll());
    }

}
