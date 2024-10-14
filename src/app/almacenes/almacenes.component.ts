import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-almacenes',
  standalone: true,
  imports: [MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './almacenes.component.html',
  styleUrl: './almacenes.component.scss'
})
export class AlmacenesComponent implements AfterViewInit {

  public almacenes: Almacen[] = [
    {
      nombre: 'Almacén Central',
      descripcion: 'Almacén principal de la empresa.',
      secciones: 'A, B, C',
      stand: 10
    },
    {
      nombre: 'Almacén Norte',
      descripcion: 'Almacén ubicado en el norte de la ciudad.',
      secciones: 'D, E',
      stand: 5,
    },
    {
      nombre: 'Almacén Sur',
      descripcion: 'Almacén ubicado en el sur de la ciudad.',
      secciones: 'F, G, H',
      stand: 0,
    },
    {
      nombre: 'Almacén Este',
      descripcion: 'Almacén ubicado en el este de la ciudad.',
      secciones: 'I, J',
      stand: 20,
    },
    {
      nombre: 'Almacén Oeste',
      descripcion: 'Almacén ubicado en el oeste de la ciudad.',
      secciones: 'K, L, M',
      stand: 30,
    },
  ];


  displayedColumns: string[] = ['nombre', 'descripcion', 'secciones', 'stand'];
  dataSource = new MatTableDataSource<Almacen>(this.almacenes);

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

export interface Almacen {
  nombre: string;          // Cambié String a string (es más común en TypeScript)
  descripcion: string;     // Cambié String a string
  secciones: string; // Cambié posiciones a Posiciones
  stand: Number,
}
