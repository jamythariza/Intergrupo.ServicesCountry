import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {CountriesModel} from './countries-model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  formData: CountriesModel;
  list: CountriesModel[];
  readonly rootURL = 'https://restcountries.eu/rest/v2/region/Americas';
  constructor( private http: HttpClient) { }

  refreshList() {
    this.http.get(this.rootURL).toPromise().then(res => this.list = res as CountriesModel[]);
  }
}
