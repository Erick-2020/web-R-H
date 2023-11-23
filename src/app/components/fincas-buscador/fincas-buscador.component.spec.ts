import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasBuscadorComponent } from './fincas-buscador.component';

describe('FincasBuscadorComponent', () => {
  let component: FincasBuscadorComponent;
  let fixture: ComponentFixture<FincasBuscadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincasBuscadorComponent]
    });
    fixture = TestBed.createComponent(FincasBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
