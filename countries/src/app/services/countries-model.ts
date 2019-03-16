export class CountriesModel {
    name: string;
    alpha3Code: string;
    currencies: [{
        name: string,
        symbol: string
      }];
      languages: [{
        name: string,
        iso639_1: string
      }];

}
