import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent implements OnInit {
  people: Array<{ name: string; surname: string; age: string }> = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {

    this.peopleService.people$.subscribe(people => {
      this.people = people;
    });
  }

  deletePerson(index: number) {
    this.peopleService.deletePerson(index);
  }
}