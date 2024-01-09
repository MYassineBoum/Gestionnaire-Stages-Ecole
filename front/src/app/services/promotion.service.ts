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

  modifierPromotion(annee_promo: number, requestBody?: any): Observable<any> {
    const url = `http://localhost:9092/api/promo/modifier/${annee_promo}`;
    return this.httpClient.put(url, requestBody);
  }
  
}
