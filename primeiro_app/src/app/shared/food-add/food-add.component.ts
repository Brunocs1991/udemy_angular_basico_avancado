import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private readonly foodListService: FoodListService) {}

  ngOnInit(): void {}

  public listAddItem(value: string): number {
    return this.foodListService.foodListAdd(value);
  }
}
