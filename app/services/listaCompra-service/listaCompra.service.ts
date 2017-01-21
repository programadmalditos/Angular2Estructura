import { Injectable } from '@angular/core';
import {Producto} from '../../classes/Producto';

let productos: Producto[]= [
    new Producto(1, 'Leche', 1, 1),
    new Producto(2, 'Huevos', 12, 1),
];
const FETCH_LATENCY = 500;

@Injectable()
export class ProductoService
{
    getProductos()
    {
        return new Promise<Producto[]>(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 
            FETCH_LATENCY);
        });
    }

    addProducto(producto: Producto)
    {
        productos.push(producto);
    }
// tslint:disable-next-line:eofline
}