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
      firstName: 'aksf',
      lastName:'adskjf',
      email: "dhdsjg"
    },
    {
      firstName: 'aksf',
      lastName:'adskjf',
      email: "dhdsjg"
    },
    {
      firstName: 'aksf',
      lastName:'adskjf',
      email: "dhdsjg"
    },
    {
      firstName: 'aksf',
      lastName:'adskjf',
      email: "dhdsjg"
    }
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
