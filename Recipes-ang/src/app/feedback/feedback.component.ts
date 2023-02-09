import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit{

  
  
  registerform=this.fb.group({
    name:["",[Validators.required,Validators.pattern('[A-Za-z]*')]],
    feedback:["",[Validators.required,Validators.minLength(10),Validators.maxLength(50)]]

  })

  ngOnInit(): void {
    
  }

  constructor(private fb:FormBuilder,private route:Router){
   
  }

  feedback(){

    if(this.registerform.valid){
  
      alert("Thank you for your valuable feedback!!!!!")

      this.route.navigateByUrl('home')
    }   
  }

}


