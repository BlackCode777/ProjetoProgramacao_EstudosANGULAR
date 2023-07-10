import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentTwoComponent } from './novo-component-two.component';

describe('NovoComponentTwoComponent', () => {
  let component: NovoComponentTwoComponent;
  let fixture: ComponentFixture<NovoComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
