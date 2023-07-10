import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentFiveComponent } from './novo-component-five.component';

describe('NovoComponentFiveComponent', () => {
  let component: NovoComponentFiveComponent;
  let fixture: ComponentFixture<NovoComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
