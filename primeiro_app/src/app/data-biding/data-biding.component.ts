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
  constructor() {}

  ngOnInit(): void {}
}
