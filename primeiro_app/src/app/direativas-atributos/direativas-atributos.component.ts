import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direativas-atributos',
  templateUrl: './direativas-atributos.component.html',
  styleUrls: ['./direativas-atributos.component.scss'],
})
export class DireativasAtributosComponent implements OnInit {
  public valor: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
    }, 2000);
  }
}
