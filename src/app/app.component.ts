import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import {Validators, FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-crud';

  constructor(private appService: AppService){}
  userForm= new FormGroup({
    firstName: new FormControl('', Validators.nullValidator),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  users: any[]=[];
  userCount:number=this.appService.users.length;
  ngOnInit(){
    this.appService.getUsers();
    const val=this.appService.testMethod();
    console.log(val);
    
  }
  onSubmit(){
    console.log(this.userForm.value);
    console.log('click button works')
    const data=this.appService.addUser(this.userForm.value);
    this.userCount=this.userCount+1;
    this.userForm.reset();
    
  }
  getAllUsers(){
    this.users=this.appService.getUsers();
  }
}
