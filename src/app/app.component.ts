/* import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
} */

  import { Component } from '@angular/core';
  import { TablaPedidosComponent } from './tabla-pedidos/tabla-pedidos.component';
  import { FormVentasComponent } from './form-ventas/form-ventas.component';
  import { ResumenVentasComponent } from './resumen-ventas/resumen-ventas.component';
  
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      TablaPedidosComponent,
      FormVentasComponent,
      ResumenVentasComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  })
  export class AppComponent {
    title = 'pizzeria';
  }
  

  
  