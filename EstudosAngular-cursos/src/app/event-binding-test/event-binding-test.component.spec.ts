import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingTestComponent } from './event-binding-test.component';

describe('EventBindingTestComponent', () => {
  let component: EventBindingTestComponent;
  let fixture: ComponentFixture<EventBindingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
