import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      SHIPS
    </section>
  `,
  styleUrls: ['./ship-admin.component.scss']
})

export class ShipAdminComponent {

  constructor() {
  }

}
