import { TestBed } from '@angular/core/testing';

import { SeguridadRutaGuard } from './seguridad-ruta.guard';

describe('SeguridadRutaGuard', () => {
  let guard: SeguridadRutaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeguridadRutaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
