import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasalquilerComponent } from './fincasalquiler.component';

describe('FincasalquilerComponent', () => {
  let component: FincasalquilerComponent;
  let fixture: ComponentFixture<FincasalquilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincasalquilerComponent]
    });
    fixture = TestBed.createComponent(FincasalquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
