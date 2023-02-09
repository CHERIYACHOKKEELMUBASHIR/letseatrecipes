import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  results:any
  elements:any

  constructor(private act:ActivatedRoute ,private data:ProductService,private route:Router){}

  fooditem:any[]=[];

  ngOnInit(){
    this.act.params
    .subscribe((result)=>{
      this.results=result['name']
    })
    this.viewcard()


    // this.data.getfooditems().subscribe((result)=>{
    //   console.log("result",result);
    //   this.fooditem=result
      
    // })

    this.act.params
    .subscribe((result)=>{
      this.results=result['name']
    })
    

    

  }
 
  viewcard(){
    this.data.viewcard(this.results)
    .subscribe((result:any)=>{
      console.log("data",result);
      this.elements=result
      console.log(this.elements);
      console.log("elements",this.elements);
      
    })
    
  }

  // video(){
  //   this.route.navigateByUrl('videos')
  // }
}
