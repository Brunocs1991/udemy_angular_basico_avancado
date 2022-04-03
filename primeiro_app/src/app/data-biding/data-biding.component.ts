import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Bruno Costa e Silva';
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string =
    'https://www.developeronrent.com/newcss/images/SVG/hire-angular-developer.png';
  public imgTitle: string = 'Property Biding';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  public nomeTwo: string = 'Bruno';
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent): void {
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
