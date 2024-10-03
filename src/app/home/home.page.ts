import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';
  surname: string = '';
  age: string='';

  personalCards: Array<{ name: string; surname: string; age: string }> = [];

  constructor() {}

  addPersonalCard() {
    if (this.name && this.surname && this.age) {
      this.personalCards.push({
        name: this.name,
        surname: this.surname,
        age: this.age
      });

      this.name = '';
      this.surname = '';
      this.age = '';
    }
  }
}
