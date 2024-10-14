import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.scss'
})
export class NuevoProductoComponent {
  productForm: FormGroup;

  @Input() producto: any;
  @Input() showModal!: boolean;
  @Output() onCloseModal = new EventEmitter();


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      proveedor: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      Swal.fire({
        title: 'Nuevo producto agregado',
        icon: 'success',
        toast: true,
        showConfirmButton: false,
        position: 'top-end',
        timer: 5000,
        timerProgressBar: true
      })
      this.producto.push(this.productForm.value)
      console.log(this.producto)
      this.onCloseModal.emit()
    } else {
      console.log('Formulario no válido');
    }
  }


}
