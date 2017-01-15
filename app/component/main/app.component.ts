import { Component } from '@angular/core';
import { Producto } from '../../classes/Producto';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'App.html',
})
export class AppComponent  {
  productos: Array<Producto> = [
    new Producto(1, 'Leche', 1, 3),
    new Producto(2, 'Patatas', 0.70, 3, 'Para freir')
  ];

guardar(model: Producto): void {
  let v=Math.max.apply(Math,this.productos.map(function(o){return o.id;}));
  model.id=++v;

  this.productos.push(model);
}

}
