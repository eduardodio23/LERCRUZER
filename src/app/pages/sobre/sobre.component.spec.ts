import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SobreComponent } from './sobre.component';

describe('SobreComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates the restaurant story and philosophy', () => {
    const fixture = TestBed.createComponent(SobreComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain(
      'Um restaurante feito para receber',
    );
    expect(fixture.nativeElement.textContent).toContain('Ingredientes de verdade');
  });
});
