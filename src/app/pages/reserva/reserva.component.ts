import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ReservationDetails {
  date: string;
  time: string;
  guests: number;
  environment: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css',
})
export class ReservaComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly minDate = this.formatDateInput(new Date());
  readonly timeSlots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

  readonly reservationForm = this.formBuilder.nonNullable.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(12)]],
    environment: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\s-]{8,20}$/)]],
  });

  submitted = false;
  confirmation: ReservationDetails | null = null;

  onSubmit(): void {
    this.submitted = true;
    this.confirmation = null;

    if (this.reservationForm.invalid) {
      this.reservationForm.markAllAsTouched();
      return;
    }

    this.confirmation = this.reservationForm.getRawValue();
  }

  formatDate(date: string): string {
    if (!date) {
      return '';
    }

    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
      new Date(`${date}T12:00:00`),
    );
  }

  private formatDateInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
