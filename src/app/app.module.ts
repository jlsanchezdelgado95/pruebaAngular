import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BorrarproveedoresComponent } from './proveedores/borrar-proveedor/borrar-proveedor.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { ModificarproveedorComponent } from './proveedores/modificarproveedor/modificarproveedor.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'borrar-proveedor/:id', component: BorrarproveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent},
  { path: 'modificarproveedor/:id', component: ModificarproveedorComponent},
  { path: '**', component: InicioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    BorrarproveedoresComponent,
    AddproveeComponent,
    ModificarproveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
