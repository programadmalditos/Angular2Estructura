import {Component, Output, EventEmitter} from '@angular/core';
import {Producto} from '../../classes/Producto';

@Component({
    moduleId: module.id,
    selector: 'formulario-producto',
    templateUrl: 'formulario-producto.html'

})

export class FormularioProductoComponent {
    @Output() onsubmit= new EventEmitter<any>();
    model: Producto= new Producto(0, '', 0, 0);


    public submit() {
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Producto(0, '', 0, 0);
    }
}
