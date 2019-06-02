import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-proveedor',
  templateUrl: './borrar-proveedor.component.html',
  styleUrls: ['./borrar-proveedor.component.css']
})
export class BorrarproveedoresComponent implements OnInit {
  id: string;
  nombre: string;
  constructor(private ProveedoresService: ProveedoresService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.nombre = this.ProveedoresService.getProveedor(this.id).nombre;
  }

  navegarProveedores() {
    this.router.navigate(['/proveedores']);
  }

  borrar() {
    this.ProveedoresService.deleteProveedores(this.id);
    this.navegarProveedores();
  }
}
