import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() {

   }

   sendMsgToComponent(){
    return "Hello from companay service"
   }
}
