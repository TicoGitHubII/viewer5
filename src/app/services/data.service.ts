import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  public getData(): Observable<Product[]>{
    return this.http.get<Product[]>(
      ''
    )
  }
}
