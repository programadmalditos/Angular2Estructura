import {Component, Input} from '@angular/core';
import {Producto} from '../../classes/Producto';

@Component({
    moduleId: module.id,
    selector: 'listado-productos',
    templateUrl: 'listado-productos.html'

})

export class ListadoProductoComponent {
    @Input() productos: Array<Producto>;

    displayProducto(producto: Producto) {
    console.log(producto);
    }
}
