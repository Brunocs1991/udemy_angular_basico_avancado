import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  private list: Array<string> = ['X Bancon', 'Feijao', 'Ovo'];
  constructor() {}

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string): number {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string): void {
    return this.emitEvent.emit(value);
  }
}
