import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFoodComponentComponent } from './event-food-component.component';

describe('EventFoodComponentComponent', () => {
  let component: EventFoodComponentComponent;
  let fixture: ComponentFixture<EventFoodComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFoodComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFoodComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
