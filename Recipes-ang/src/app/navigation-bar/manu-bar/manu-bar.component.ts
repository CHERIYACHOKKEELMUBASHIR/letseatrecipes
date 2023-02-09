import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manu-bar',
  templateUrl: './manu-bar.component.html',
  styleUrls: ['./manu-bar.component.scss']
})
export class ManuBarComponent {

  user:any

  constructor(private router:Router){

    this.user=JSON.parse(localStorage.getItem('name')||"")
  }

  navigateTo(route:string){
    this.router.navigate([`/${route}`])
  }

  logout(){
    this.router.navigateByUrl('')
  }
 
}
