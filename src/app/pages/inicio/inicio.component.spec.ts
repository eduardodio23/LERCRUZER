import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates a welcome page with reservation and menu links', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('A mesa está posta');
    expect(fixture.nativeElement.querySelectorAll('a[routerLink]').length).toBe(5);
  });
});
