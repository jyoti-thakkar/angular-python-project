import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: string;
password: string;
serverData: JSON;
  employeeData: JSON;
  constructor(private httpClient: HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
 url : string = "http://127.0.0.1:5000/"
   login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.httpClient.get('http://127.0.0.1:5000/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
    }else {
      alert("Invalid credentials");
    }
  }

}
