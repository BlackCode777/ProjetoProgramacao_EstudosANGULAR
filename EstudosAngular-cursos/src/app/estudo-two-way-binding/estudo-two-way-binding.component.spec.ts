import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoTwoWayBindingComponent } from './estudo-two-way-binding.component';

describe('EstudoTwoWayBindingComponent', () => {
  let component: EstudoTwoWayBindingComponent;
  let fixture: ComponentFixture<EstudoTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoTwoWayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
