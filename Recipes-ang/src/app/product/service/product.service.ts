import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  

  constructor(private http:HttpClient) { }

  getfooditems():Observable<any>{
    return this.http.get('http://localhost:3000/product/list')
  }

  // getfooditem(ressd:any): Observable<any>{
  //  const a:any = this.products.splice(this.products.findIndex(a=>a.name ===ressd),1)
  //  return a
  // }

  viewcard(productName:any):Observable<any>{
    console.log("pro",productName);

    return this.http.get(`http://localhost:3000/product/search/${productName}`)
  }
}
