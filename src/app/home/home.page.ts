import { Component } from '@angular/core';
import { PeopleService } from '../share/services/people.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';
  surname: string = '';
  age: string='';

  constructor(private peopleService: PeopleService) {}

  // Función para añadir una nueva persona
  addPersonalCard() {
    if (this.name && this.surname && this.age) {
      const newPerson = { name: this.name, surname: this.surname, age: this.age };
      this.peopleService.addPerson(newPerson);
      this.name = '';
      this.surname = '';
      this.age = '';
    }
  }
}
