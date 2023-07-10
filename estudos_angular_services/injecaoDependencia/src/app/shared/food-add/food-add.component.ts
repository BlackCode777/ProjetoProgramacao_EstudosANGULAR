import { Component } from '@angular/core';
import { FoodListServService } from 'src/app/food-list/food-list-serv.service';
import { FoodListInterface } from '../food-list-interface';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

  // create variable for receive list of foods
  public list: Array<FoodListInterface> = [];//this.foodListServService.getList();

  constructor( private foodListServService: FoodListServService ) { }
  ngOnInit(): void {}

  // create method for add new food
  public listAddValue(food: FoodListInterface){
    this.list.push(food);
    //return this.foodListServService.addFood(food);
    //console.log(food);
  }
  

}
