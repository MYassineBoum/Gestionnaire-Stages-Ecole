import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private httpClient: HttpClient) { }

  fetchPromotions() {
    return this.httpClient.get('http://localhost:9092/api/promo/liste');
  }

}
