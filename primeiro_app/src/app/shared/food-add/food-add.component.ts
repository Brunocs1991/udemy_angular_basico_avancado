import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private readonly foodListService: FoodListService) {}

  ngOnInit(): void {}

  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: (error) => alert(error.message),
    });
  }
}
