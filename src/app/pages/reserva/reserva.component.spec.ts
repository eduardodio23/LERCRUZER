import { TestBed } from '@angular/core/testing';
import { ReservaComponent } from './reserva.component';

describe('ReservaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaComponent],
    }).compileComponents();
  });

  it('creates a reservation form with the expected options', () => {
    const fixture = TestBed.createComponent(ReservaComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.reservationForm.invalid).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(4);
    expect(fixture.nativeElement.textContent).toContain('Área VIP');
  });

  it('validates and summarizes a completed reservation', () => {
    const fixture = TestBed.createComponent(ReservaComponent);
    const component = fixture.componentInstance;
    component.reservationForm.setValue({
      date: component.minDate,
      time: '19:00',
      guests: 2,
      environment: 'Varanda',
      name: 'Ana Silva',
      phone: '(11) 99999-9999',
    });

    component.onSubmit();

    expect(component.confirmation?.name).toBe('Ana Silva');
    expect(component.confirmation?.environment).toBe('Varanda');
  });
});
