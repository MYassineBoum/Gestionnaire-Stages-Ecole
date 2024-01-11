import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promo } from '../Classes/promo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private httpClient: HttpClient) { }

  fetchPromotions() {
    return this.httpClient.get('http://localhost:9092/api/promo/liste');
  }

  ajouterPromotion(promo: Promo) {
    return this.httpClient.post('http://localhost:9092/api/promo/ajouter', promo);
  }

  modifierPromotion(promo: Promo) {
    return this.httpClient.post('http://localhost:9092/api/promo/modifier', promo);
  }

  supprimerPromotion(annee_promo: number): Observable<any> {
    if(confirm("Vous voulez vraiment supprimer cette promotion ?")){
      return this.httpClient.delete(`http://localhost:9092/api/promo/supprimer/${annee_promo}`, {responseType: 'text'});
    } else {
      return new Observable();
    }
  }

  verifierPromotion(promo: Promo) {
    return this.httpClient.post('http://localhost:9092/api/promo/verifier', promo);  
  }
}
