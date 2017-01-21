import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../../rxjs/index';
import {Producto} from '../../classes/Producto';



@Injectable()
export class ProductoServiceHttp
{
    private productosUrl = 'http://localhost:5000/api/compra';

    constructor(private http: Http){}


    getProductos(): Observable<Producto[]> {
        return this.http.get(this.productosUrl)
        .map(this.obtenerDatos).catch(this.handleError);
    }

    addProducto(model:Producto):Observable<Producto>{

       return this.http.post(this.productosUrl,model).map(this.obtenerDatos).catch(this.handleError);
    }

   
    private obtenerDatos(res: Response)
    {
        let data = res.json();
        return data || { };
    }

    private handleError(error: any)
    {
        let mensaje = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Error de servidor';
        console.error(mensaje); // log to console instead
        return Observable.throw(mensaje);
    }
}