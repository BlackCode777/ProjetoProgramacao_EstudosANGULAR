import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentSevenComponent } from './novo-component-seven.component';

describe('NovoComponentSevenComponent', () => {
  let component: NovoComponentSevenComponent;
  let fixture: ComponentFixture<NovoComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
