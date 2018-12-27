import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rest:RestService) { }

  ngOnInit() {
  }

  loginUser(){
    this.rest.doPOST();
  }

}
