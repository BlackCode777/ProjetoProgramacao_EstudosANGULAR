import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteHoraParaDecimalComponent } from './converte-hora-para-decimal.component';

describe('ConverteHoraParaDecimalComponent', () => {
  let component: ConverteHoraParaDecimalComponent;
  let fixture: ComponentFixture<ConverteHoraParaDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteHoraParaDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverteHoraParaDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
