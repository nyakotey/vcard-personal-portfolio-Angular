import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContactComponent {
  constructor() {}
  fullname = '';
  email = '';
  message = '';
}
