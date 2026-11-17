import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EventosComponent } from './eventos.component';

describe('EventosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates event options and a contact link', () => {
    const fixture = TestBed.createComponent(EventosComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.event-card').length).toBe(3);
    expect(fixture.nativeElement.querySelector('a[routerLink="/faleconosco"]')).toBeTruthy();
  });
});
