import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentTreeComponent } from './novo-component-tree.component';

describe('NovoComponentTreeComponent', () => {
  let component: NovoComponentTreeComponent;
  let fixture: ComponentFixture<NovoComponentTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponentTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
