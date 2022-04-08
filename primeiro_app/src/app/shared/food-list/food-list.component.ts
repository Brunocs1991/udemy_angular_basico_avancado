import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];
  constructor(private readonly foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => alert(error.message),
    });
    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert(`Adicionado => ${res.nome}`);
        return this.foodList.push(res);
      },
      error: (err: string) => console.log(err),
    });
  }
}
