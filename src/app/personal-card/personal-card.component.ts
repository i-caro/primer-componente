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

  ngOnInit() {}

}
