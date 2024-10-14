import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCard, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-materiales-almacenados',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './materiales-almacenados.component.html',
  styleUrl: './materiales-almacenados.component.scss'
})
export class MaterialesAlmacenadosComponent {
  public productos: Producto[] = Array.from({ length: 100 }, (v, i) => ({
    codigo: `P00${i + 1}`,                         // Código del producto
    producto: `Producto ${i + 1}`,                 // Nombre del producto
    marca: `Marca ${Math.ceil(Math.random() * 10)}`, // Marca aleatoria entre 1 y 10
    lote: `Lote ${Math.floor(Math.random() * 1000)}`, // Lote aleatorio
    fecha_vencimiento: new Date(Date.now() + Math.random() * 31536000000), // Fecha de vencimiento aleatoria en el próximo año
    almacen: 'Almacén Central',                    // Nombre del almacén
    posicion: `Posición ${Math.floor(Math.random() * 50) + 1}`, // Posición aleatoria entre 1 y 50
    stand: 'Stand 1',                             // Stand del producto
    cantidad: Math.floor(Math.random() * 1000)
  }));

  displayedColumns: string[] = ['codigo', 'producto', 'marca', 'lote', 'fecha_vencimiento', 'almacen', 'posicion', 'stand', 'cantidad'];
  dataSource = new MatTableDataSource<Producto>(this.productos);


  isDateThisMonth(date: Date): boolean {
    const now = new Date();
    return date.getFullYear() === now.getFullYear();
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

}

export interface Producto {
  codigo: string;           // Código del producto
  producto: string;         // Nombre del producto
  marca: string;            // Marca del producto
  lote: string;             // Lote del producto
  fecha_vencimiento: Date;  // Fecha de vencimiento
  almacen: string;          // Nombre del almacén
  posicion: string;         // Posición en el almacén
  stand: string;            // Stand del producto
  cantidad: number;
}
