import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 5000);
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick;
  }
}
