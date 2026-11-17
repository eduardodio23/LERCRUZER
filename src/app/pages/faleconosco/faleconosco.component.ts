import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-faleconosco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './faleconosco.component.html',
  styleUrl: './faleconosco.component.css',
})
export class FaleconoscoComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = false;

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitted = true;
    this.contactForm.reset();
  }
}
