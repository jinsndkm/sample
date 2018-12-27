import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  products:any = [];
  username:string;
  password:string;

  constructor(private router: Router,public rest:RestService) { }

  ngOnInit() {
  }

  getProducts() {
    alert("callsed")
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      alert(JSON.stringify(data))
      console.log(data);
      this.products = data;
    });
  }

  loginUser(){
    if(this.username=="admin" && this.password=="admin"){
      this.getProducts();
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/error'])
    }
  }

}
