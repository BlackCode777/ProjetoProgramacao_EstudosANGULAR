import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentSixComponent } from './novo-component-six.component';

describe('NovoComponentSixComponent', () => {
  let component: NovoComponentSixComponent;
  let fixture: ComponentFixture<NovoComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
