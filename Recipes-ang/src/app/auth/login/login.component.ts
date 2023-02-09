import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  name:any;
  password:any

constructor(private router:Router,private auth:AuthenticationService){}

  ngOnInit() {

    
  }

  login(){

    var name: any = this.name
    var password: any = this.password
    this.auth.login(name, password)
      .subscribe((result: any) => {
        if(result.data)
        
        {
          
          alert(result.message)
          localStorage.setItem("name", JSON.stringify(result.data[0].name))
          console.log("vsaghjasbjb",result.data[0].name);
          
          console.log("arrrray",result);
          
          
          this.router.navigateByUrl('home')
          
        }
        else
        {
          alert(result.message)
          this.router.navigateByUrl('')
        }

      }, 
      (result: any) => {
        alert(result.error.message)
      })
    

  }

  // register(){
  //   this.router.navigateByUrl('register')
  // }

  


}
