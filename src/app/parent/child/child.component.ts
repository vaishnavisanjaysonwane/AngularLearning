import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
    //1
    @Input() name: string = ''
    // userName : string = 'Vaishnavi'
    fName = ''

    //2.1
    @Output() messageEvent = new EventEmitter<string>();

    onParentButtonClick() {
      this.fName = this.name.toUpperCase()
      this.messageEvent.emit(this.fName);
    }
    
}
