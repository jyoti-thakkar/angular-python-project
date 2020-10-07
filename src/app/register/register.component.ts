import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Roles: any = ['Admin', 'Author', 'Reader'];
form: FormGroup;
serverData: JSON;
submitted = false;
SERVER_URL = "http://127.0.0.1:5000";
emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  constructor( private formBuilder: FormBuilder,private httpClient: HttpClient) {

  }

  ngOnInit() {
  this.form = this.formBuilder.group({
      firstName: [''],
      email: [''],
      password: [''],
    });
  }
  submit() {
  console.log("Hi");
    if (!this.form.valid) {
      return;
    }
      const formData = new FormData();
    formData.append("name",this.form.value['firstName']);
    formData.append("email",this.form.value['email']);
    formData.append("password", this.form.value['password']);

    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    this.httpClient.post<any>(this.SERVER_URL, formData, { headers }).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
