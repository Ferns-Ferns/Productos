import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

//Aqui es donde se conectar al API 
  url:string = "https://localhost:44307/api/Producto";

  getProducto(){
    return this.http.get(this.url);
  }

  addProducto(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, producto);
  }

  updateProducto(id:number, producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url + `/${id}`, producto);
  }

  deleteProducto(id:number){
    return this.http.delete(this.url + `/${id}`);
  }
}
