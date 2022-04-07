import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['X Bancon', 'Feijao', 'Ovo'];
  constructor() {}

  public foodList() {
    return this.list;
  }
}
