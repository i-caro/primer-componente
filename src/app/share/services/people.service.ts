import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleSubject = new BehaviorSubject<Array<{ name: string; surname: string; age: string }>>([]);
  people$ = this.peopleSubject.asObservable();

  constructor() {}

  addPerson(person: { name: string; surname: string; age: string }) {
    const currentPeople = this.peopleSubject.getValue();
    this.peopleSubject.next([...currentPeople, person]);
  }

  deletePerson(index: number) {
    const currentPeople = this.peopleSubject.getValue();
    const updatedPeople = currentPeople.filter((_, i) => i !== index);
    this.peopleSubject.next(updatedPeople);
  }
}
