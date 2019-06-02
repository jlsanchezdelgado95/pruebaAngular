import { Injectable } from '@angular/core';
import { ProveedoresComponent } from '../proveedores/proveedores.component';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  proveedores: any = [
    {
      id: '1',
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      id: '2',
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ]
  getProveedores() {
    return this.proveedores;
  }

  getProveedor(id: string): any {
    return this.proveedores.find(proveedor => proveedor.id === id);
  }

  deleteProveedores(id: string): any {
    let indice = this.proveedores.findIndex(proveedor => proveedor.id === id);
    this.proveedores.splice(indice, 1);
  }

  anyadirProveedor(proveedor: ProveedoresService) {//Le tengo que pasar la id?
    /*if (!this.proveedores.findIndex(proveedor => proveedor.id === id)) {
      console.log("HOLA");
      this.proveedores.push(proveedor);
    }*/
      this.proveedores.push(proveedor);
  }

  modificarProveedor(proveedor: ProveedoresService){
    //borro y vuelvo a insertar?¿?
  }
}
