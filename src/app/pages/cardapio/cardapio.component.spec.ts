import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CardapioComponent } from './cardapio.component';

describe('CardapioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates a menu with a reservation link', () => {
    const fixture = TestBed.createComponent(CardapioComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Cardápio');
    expect(fixture.nativeElement.querySelector('a[routerLink="/reserva"]')).toBeTruthy();
  });
});
