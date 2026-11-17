import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContatoComponent } from './contato.component';

describe('ContatoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('shows institutional information and a location map', () => {
    const fixture = TestBed.createComponent(ContatoComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.detail-card').length).toBe(4);
    expect(fixture.nativeElement.querySelector('iframe[title]')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Dados de demonstração');
  });
});
