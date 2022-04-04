import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Bruno', idade: 5 },
    { nome: 'Costa', idade: 5 },
    { nome: 'e', idade: 1 },
    { nome: 'Silva', idade: 5 },
  ];

  public nome: string = 'bruno';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 5000);
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList(): void {
    this.list.push({ nome: 'Teste', idade: 5 });
  }
  public onClickEventList(evento: number): void {
    this.list.splice(evento, 1);
  }
}
