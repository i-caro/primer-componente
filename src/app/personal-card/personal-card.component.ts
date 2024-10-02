import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {

  @Input('name') name:string ="";

  @Input('surname') surname:string="";

  @Input('age') age:string="";

  constructor() { }

  public people = [
    { name: 'Iván', surname: 'Caro Romero', age: '19' },
    { name: 'Adrian', surname: 'Barrios Márquez', age: '19' },
    { name: 'Samuel', surname: 'Avella Pérez', age: '19' },
    { name: 'Paco', surname: 'Flores Ramírez', age: '58' }
  ];

  ngOnInit() {}

}
