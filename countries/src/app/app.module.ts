import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CountriesService} from './services/countries.service';
import { WebPartCountrieWebPartComponent } from './web-part-countrie-web-part/web-part-countrie-web-part.component';

@NgModule({
  declarations: [
    WebPartCountrieWebPartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [WebPartCountrieWebPartComponent],
  entryComponents: [WebPartCountrieWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(WebPartCountrieWebPartComponent, { injector: this.injector });
    customElements.define('app-web-part-countrie-web-part', el);
  }
}
