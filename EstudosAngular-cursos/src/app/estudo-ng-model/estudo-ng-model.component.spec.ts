import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoNgModelComponent } from './estudo-ng-model.component';

describe('EstudoNgModelComponent', () => {
  let component: EstudoNgModelComponent;
  let fixture: ComponentFixture<EstudoNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoNgModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
