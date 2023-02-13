import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { OnInit, Input, Output, EventEmitter} from '@angular/core'
@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent {

  @Input() userCount=0;
  @Output() getUsersEvent= new EventEmitter();

  getAllUsers(){
    this.getUsersEvent.emit('get all users')
  }
}

