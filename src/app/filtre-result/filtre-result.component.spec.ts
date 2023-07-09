import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreResultComponent } from './filtre-result.component';

describe('FiltreResultComponent', () => {
  let component: FiltreResultComponent;
  let fixture: ComponentFixture<FiltreResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltreResultComponent]
    });
    fixture = TestBed.createComponent(FiltreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
