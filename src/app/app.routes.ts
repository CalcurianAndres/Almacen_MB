import { Routes } from '@angular/router';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { MaterialesAlmacenadosComponent } from './materiales-almacenados/materiales-almacenados.component';
import { RecepcionMaterialComponent } from './recepcion-material/recepcion-material.component';

export const routes: Routes = [
    { path: '', component: MaterialesComponent },
    { path: 'almacenes', component: AlmacenesComponent },
    { path: 'inventario', component: MaterialesAlmacenadosComponent },
    { path: 'looteo', component: RecepcionMaterialComponent }
];
