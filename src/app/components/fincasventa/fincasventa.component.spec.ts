import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasventaComponent } from './fincasventa.component';

describe('FincasventaComponent', () => {
  let component: FincasventaComponent;
  let fixture: ComponentFixture<FincasventaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincasventaComponent]
    });
    fixture = TestBed.createComponent(FincasventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
