import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direativas-atributos',
  templateUrl: './direativas-atributos.component.html',
  styleUrls: ['./direativas-atributos.component.scss'],
})
export class DireativasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '20px';
  public backgroundColor: string = 'red';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;

      if (this.height === '20px') {
        this.height = '50px';
        this.backgroundColor = 'blue';
      } else {
        this.height = '20px';
        this.backgroundColor = 'red';
      }
    }, 2000);
  }
}
