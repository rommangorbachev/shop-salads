import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaladModel } from '../models/salad.model';
import { map } from 'rxjs/operators';
import { environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaladsService {

  constructor(private http: HttpClient) {
  }

  getSalads() {
    return this.http.get<SaladModel[]>(`${env.urlApi}/salads`).pipe(
      map(response => {
        return response.map((saladData) => {
          return new SaladModel(
            saladData._id,
            saladData.title,
            saladData.description,
            saladData.image,
            saladData.price)
        })
      })
    );
  }
}
