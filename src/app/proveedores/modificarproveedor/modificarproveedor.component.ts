import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarproveedor',
  templateUrl: './modificarproveedor.component.html',
  styleUrls: ['./modificarproveedor.component.css']
})
export class ModificarproveedorComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;

  proveedor: any;

  constructor(private ProveedoresService: ProveedoresService, private router: Router) {
    this.proveedor = {
      id: '',
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: '',
      email: '',
      contacto: ''
    }
  }
  onSubmit() {
    this.proveedor.id = this.formpro.value.id;
    console.log(this.formpro.value.id);
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    this.ProveedoresService.anyadirProveedor(this.proveedor);
    this.formpro.reset();
    this.navegarProveedores();
  }

  navegarProveedores() {
    this.router.navigate(['/proveedores']);
  }

  ngOnInit() {
  }

}
