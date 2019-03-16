import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPartCountrieWebPartComponent } from './web-part-countrie-web-part.component';

describe('WebPartCountrieWebPartComponent', () => {
  let component: WebPartCountrieWebPartComponent;
  let fixture: ComponentFixture<WebPartCountrieWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartCountrieWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPartCountrieWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
