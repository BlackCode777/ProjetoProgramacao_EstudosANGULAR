import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursaoAlgoritmosRecursivosComponent } from './recursao-algoritmos-recursivos.component';

describe('RecursaoAlgoritmosRecursivosComponent', () => {
  let component: RecursaoAlgoritmosRecursivosComponent;
  let fixture: ComponentFixture<RecursaoAlgoritmosRecursivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursaoAlgoritmosRecursivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursaoAlgoritmosRecursivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
