import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {
  todayDate: Date = new Date();
  number = 4;

  toupper = "welcome"

  person = {
    name : 'radha',
    age : 16
  }

    people = [
    { name: 'radha', age: 16 },
    { name: 'john', age: 25 },
    { name: 'alice', age: 30 }
  ];
  JSON: any;

  gender = ''

  inviteMap = {
    'male' : 'his',
    'female' : 'her' 
  };

  changeGender(gender:string){
    this.gender=gender;
  }
}
