import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ResumeComponent {
  constructor() { }
}
