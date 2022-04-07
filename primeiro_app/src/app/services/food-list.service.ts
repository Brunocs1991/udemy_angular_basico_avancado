import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['X Bancon', 'Feijao', 'Ovo'];
  constructor() {}

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string): number {
    return this.list.push(value);
  }
}
