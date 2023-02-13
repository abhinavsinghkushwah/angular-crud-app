import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { AppService } from '../app.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(private appService: AppService){}
  
   @Input() users: any[];

   getUsers(){
    this.users=this.appService.getUsers();
   }

   ngOnInit(){
    this.getUsers();
   }
}
