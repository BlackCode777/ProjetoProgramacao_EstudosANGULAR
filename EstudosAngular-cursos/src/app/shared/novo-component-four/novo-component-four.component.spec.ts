import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentFourComponent } from './novo-component-four.component';

describe('NovoComponentFourComponent', () => {
  let component: NovoComponentFourComponent;
  let fixture: ComponentFixture<NovoComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
