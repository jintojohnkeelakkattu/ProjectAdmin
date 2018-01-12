import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPopupComponent } from './overlay-popup.component';

describe('OverlayPopupComponent', () => {
  let component: OverlayPopupComponent;
  let fixture: ComponentFixture<OverlayPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
