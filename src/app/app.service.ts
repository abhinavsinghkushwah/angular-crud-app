import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { 
    console.log("service is up and running");
    
  }
  users=[
    {
      firstName: 'demofirstname',
      lastName:'demosurname',
      email: "demoemail"
    },
    {
      firstName: 'demofirstname2',
      lastName:'demosurname2',
      email: "demoemail2"
    },
    
  ]
  getUsers(){
    return this.users;
  }
  addUser(user: any){
    this.users.push(user);
  }
  testMethod(): string{
    return "method works"
    
  }
}
