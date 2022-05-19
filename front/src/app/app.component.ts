import { Component } from '@angular/core';
import { Producto } from './models/producto';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  producto:Producto = new Producto();
  datatable:any = [];

  constructor(private productoService:ProductoService){

  }

  ngOnInit(): void{
    this.onDataTable();
  }

  onDataTable(){
    this.productoService.getProducto().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onAddProducto(producto:Producto):void{
    this.productoService.addProducto(producto).subscribe(res =>{
      if(res){
        alert(`El producto ${producto.nombre} se ha registrado con exito`);
        this.clear();
        this.onDataTable();
      }else{
        alert('Error')
      }
    });
  }

  onUpdateProducto(producto:Producto):void{
    this.productoService.updateProducto(producto.id, producto).subscribe(res => {
      if(res){
        alert(`El producto numero ${producto.id} se ha modificado con exito`);
        this.clear();
        this.onDataTable();
      }else{
        alert('Error')
      }
    });
  }

  onDeleteProducto(id:number):void{
    this.productoService.deleteProducto(id).subscribe(res => {
      if(res){
        alert(`El producto numero: ${id} se ha eliminado con exito`);
        this.clear();
        this.onDataTable();
      }else{
        alert('Error')
      }
    })
  }

  onSetData(select:any){
    this.producto.id = select.id_producto;
    this.producto.nombre = select.nombre;
    this.producto.cantidad = select.cantidad;
    this.producto.descripcion = select.descripcion;
  }

  clear(){
    this.producto.id = 0;
    this.producto.nombre = "";
    this.producto.cantidad = 0;
    this.producto.descripcion = "";
  }
}
