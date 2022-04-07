import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];
  constructor(private readonly foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
    this.foodListService.emitEvent.subscribe({
      next: (res: string) => alert(`Adicionado => ${res}`),
      error: (err: string) => console.log(err),
    });
  }
}
