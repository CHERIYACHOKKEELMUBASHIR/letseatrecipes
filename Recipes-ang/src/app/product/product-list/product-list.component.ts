import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  

  
  fooditems:any[]=[];


  constructor (private ps:ProductService ,private vw:Router){ }

  ngOnInit(): void {
    this.ps.getfooditems().subscribe((result)=>{
      console.log("result",result);
      this.fooditems=result
      
    })
  }

  
 
}
