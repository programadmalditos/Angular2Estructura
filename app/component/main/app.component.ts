import { Component,OnInit } from '@angular/core';
import { Producto } from '../../classes/Producto';
import { ProductoServiceHttp } from '../../services/listaCompra-service-http/listaCompra.service.http';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'App.html',
})
export class AppComponent  implements OnInit  {
  productos: Array<Producto>;
 
constructor(private productoService: ProductoServiceHttp) {

  }

ngOnInit()
    {
           this.productoService.getProductos().subscribe(o => {

            this.productos = o;
        });
    }

guardar(model: Producto): void {
  //let v=Math.max.apply(Math,this.productos.map(function(o){return o.id;}));
  //model.id=++v;

   this.productoService.addProducto(model).subscribe(o => {

            this.productos.push(o);
        });;
}

}
