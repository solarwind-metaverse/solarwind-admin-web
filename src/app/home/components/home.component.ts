import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      SOLARWIND ADMIN
    </section>
  `
})

export class HomeComponent {
}