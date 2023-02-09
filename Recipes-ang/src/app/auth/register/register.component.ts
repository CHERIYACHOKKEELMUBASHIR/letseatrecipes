import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  
  registerform=this.fb.group({
    name:["",[Validators.required,Validators.pattern('[A-Za-z]*')]],
    phonenumber:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    password:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  constructor ( private fb:FormBuilder,private db:AuthenticationService,private route:Router){}

  ngOnInit(): void {
    
  }
  register(){
    var name:any=this.registerform.value.name
    var phonenumber:any=this.registerform.value.phonenumber
    var password:any=this.registerform.value.password


    if(this.registerform.valid){
    
      this.db.register(name,phonenumber,password)
    
      .subscribe((result)=>{
        console.log("RESname:",name,phonenumber,password)
        console.log("result:",result);
        if(result){
          console.log("RES:",result)
          alert ("Register successfully")
          this.route.navigateByUrl('')
        }
      },(result)=>{
        console.log("test:",result.error.message)
        alert(result.error.message)
      })

    }
  }

}
