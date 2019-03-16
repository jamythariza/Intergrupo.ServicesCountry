import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CountriesService} from 'src/app/services/countries.service';
import { CountriesModel } from '../services/countries-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-web-part-countrie-web-part',
  templateUrl: './web-part-countrie-web-part.component.html',
  styleUrls: ['./web-part-countrie-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WebPartCountrieWebPartComponent implements OnInit {
  @Input() description: string;

  constructor(private service: CountriesService, private modalService: NgbModal) { }
  name: string;
  currenciesName: string;
  languages: string;
  alpha3Code: string;
  srcImage: string;

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(reg: CountriesModel) {
    this.service.formData = Object.assign({}, reg);
  }

  open(name: any, currenciesName: any, alpha3Code: string, languages: string, modal) {

    this.name = name;
    this.currenciesName  = currenciesName;
    this.alpha3Code = alpha3Code;
    this.languages = languages;
    this.modalService.open(modal);
  }
  change(value: string) { this.alpha3Code = value; }

}
