import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { FormularioProductoComponent } from './component/formulario-producto/formulario-producto.component';
import { ListadoProductoComponent } from './component/listado-producto/listado-productos.component';
import { ProductoServiceHttp } from './services/listaCompra-service-http/listaCompra.service.http';
import { HttpModule }  from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, FormularioProductoComponent, ListadoProductoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductoServiceHttp]
})
export class AppModule { }
