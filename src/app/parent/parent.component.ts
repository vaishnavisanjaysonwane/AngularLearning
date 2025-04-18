import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {
  fruits : string[] = ['Apple','Banana','Cherry','Mango'];
  // fruits: string[] | null = null;

    isTrue = false;
    //2
    userName : string = 'rcb'

    // @Output() name: string = ''

    //2.2
    message = '';

    receiveMessage(data: string) {
      let modified = data.replace('cup', 'NO cup');
      let capitalized = modified.toUpperCase()
      console.log(capitalized)
      this.message = capitalized
    };
}
