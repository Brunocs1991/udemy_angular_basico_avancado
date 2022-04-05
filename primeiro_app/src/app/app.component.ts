import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public addValue: number = 10;
  constructor() {}

  public add() {
    this.addValue++;
  }
}
