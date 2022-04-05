import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacao-componentes',
  templateUrl: './comunicacao-componentes.component.html',
  styleUrls: ['./comunicacao-componentes.component.scss'],
})
export class ComunicacaoComponentesComponent implements OnInit {
  public addValue: number = 10;

  public getDados: { nome: string; idade: number } | undefined;
  constructor() {}

  ngOnInit(): void {}
  public add() {
    this.addValue++;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
