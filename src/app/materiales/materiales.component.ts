import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    NuevoProductoComponent,
    CommonModule],
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.scss'
})
export class MaterialesComponent implements AfterViewInit {
  public productos = [
    {
      codigo: "P001",
      nombre: "Champú Nutritivo",
      marca: "Cuidado Total",
      proveedor: "Proveedor A",
      precio: 12.99
    },
    {
      codigo: "P002",
      nombre: "Gel de Ducha Refrescante",
      marca: "FreshSense",
      proveedor: "Proveedor B",
      precio: 8.50
    },
    {
      codigo: "P003",
      nombre: "Crema Hidratante",
      marca: "SkinCare",
      proveedor: "Proveedor C",
      precio: 15.75
    },
    {
      codigo: "P004",
      nombre: "Desodorante Roll-On",
      marca: "StayFresh",
      proveedor: "Proveedor D",
      precio: 6.25
    },
    {
      codigo: "B001",
      nombre: "Cerveza Lager",
      marca: "BrewMaster",
      proveedor: "Proveedor E",
      precio: 2.50
    },
    {
      codigo: "B002",
      nombre: "Cerveza IPA",
      marca: "Hoppy Brew",
      proveedor: "Proveedor F",
      precio: 3.00
    },
    {
      codigo: "B003",
      nombre: "Cerveza Stout",
      marca: "DarkSide",
      proveedor: "Proveedor G",
      precio: 4.50
    },
    {
      codigo: "B004",
      nombre: "Cerveza Sin Alcohol",
      marca: "Zero Brew",
      proveedor: "Proveedor H",
      precio: 2.00
    }
  ];
  public ShowModal: boolean = false;

  displayedColumns: string[] = ['codigo', 'nombre', 'marca', 'proveedor', 'precio'];
  dataSource = new MatTableDataSource<Producto>(this.productos);

  updateTable() {
    this.dataSource = new MatTableDataSource<Producto>(this.productos);
    this.dataSource.paginator = this.paginator;
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.lastPageLabel = 'Ultima página'
    this.paginator._intl.firstPageLabel = 'Primera página'
  }

  title = 'almacenMB';

}

export interface Producto {
  codigo: string,
  nombre: string,
  marca: string,
  proveedor: string,
  precio: number
}