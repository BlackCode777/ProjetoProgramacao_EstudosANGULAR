import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentOneComponent } from './novo-component-one.component';

describe('NovoComponentOneComponent', () => {
  let component: NovoComponentOneComponent;
  let fixture: ComponentFixture<NovoComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
