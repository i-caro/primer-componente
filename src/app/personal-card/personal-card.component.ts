import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent {

  @Input() people: Array<{ name: string; surname: string; age: string }> = [];

  constructor() {}
}
