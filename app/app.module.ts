import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { FormularioProductoComponent } from './component/formulario-producto/formulario-producto.component';
import { ListadoProductoComponent } from './component/listado-producto/listado-productos.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormularioProductoComponent, ListadoProductoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
