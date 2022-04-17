import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(private fromBuilder: FormBuilder) {}
  public cadastroForm: FormGroup = this.fromBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {}

  public submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm);
    }
  }
  get f() {
    return this.cadastroForm.controls;
  }
}
