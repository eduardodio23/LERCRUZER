import { TestBed } from '@angular/core/testing';
import { FaleconoscoComponent } from './faleconosco.component';

describe('FaleconoscoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaleconoscoComponent],
    }).compileComponents();
  });

  it('creates a validated contact form', () => {
    const fixture = TestBed.createComponent(FaleconoscoComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.contactForm.invalid).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('form input').length).toBe(2);
    expect(fixture.nativeElement.querySelector('textarea')).toBeTruthy();
  });
});
