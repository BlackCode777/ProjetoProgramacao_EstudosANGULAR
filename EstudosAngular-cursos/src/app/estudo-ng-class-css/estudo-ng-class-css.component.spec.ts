import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoNgClassCssComponent } from './estudo-ng-class-css.component';

describe('EstudoNgClassCssComponent', () => {
  let component: EstudoNgClassCssComponent;
  let fixture: ComponentFixture<EstudoNgClassCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoNgClassCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoNgClassCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
