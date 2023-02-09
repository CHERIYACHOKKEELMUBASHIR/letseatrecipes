import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http: HttpClient) { }

  register(name: any, phonenumber: any, password: any) {
    console.log("RESnameservice:", name, phonenumber, password)

    const data = {
      name,
      phonenumber,
      password
    }
    return this.http.post("http://localhost:3000/auth/register", data)

  }


  login(name:any,password:any) {
    console.log("user:",name,password);
    
    const data={
      "name":name,
      "password":password
    }
    console.log("DATA",data)
    return this.http.post('http://localhost:3000/auth/login',data)
  }
}