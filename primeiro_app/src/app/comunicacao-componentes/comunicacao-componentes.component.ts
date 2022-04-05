import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacao-componentes',
  templateUrl: './comunicacao-componentes.component.html',
  styleUrls: ['./comunicacao-componentes.component.scss'],
})
export class ComunicacaoComponentesComponent implements OnInit {
  public addValue: number = 10;
  constructor() {}

  ngOnInit(): void {}
  public add() {
    this.addValue++;
  }
}
