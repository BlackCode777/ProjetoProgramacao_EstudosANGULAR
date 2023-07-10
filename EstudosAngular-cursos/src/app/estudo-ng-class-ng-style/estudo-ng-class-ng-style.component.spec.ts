import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoNgClassNgStyleComponent } from './estudo-ng-class-ng-style.component';

describe('EstudoNgClassNgStyleComponent', () => {
  let component: EstudoNgClassNgStyleComponent;
  let fixture: ComponentFixture<EstudoNgClassNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoNgClassNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoNgClassNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
