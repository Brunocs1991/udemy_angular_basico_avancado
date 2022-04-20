import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 10;
  private carteira: number = 50;
  constructor() {}

  ngOnInit(): void {}

  public getPoupanca(): number {
    return this.poupanca;
  }
  public getCarteira(): number {
    return this.carteira;
  }
  public setSacar(value: string): number {
    const sacar = Number(value);
    return sacar;
  }

  public setDepositar(value: string): number {
    const depositar = Number(value);
    return depositar;
  }
}
