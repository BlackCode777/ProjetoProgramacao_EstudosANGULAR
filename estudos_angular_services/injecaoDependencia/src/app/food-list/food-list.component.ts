import { Component } from '@angular/core';
import { FoodListServService } from './food-list-serv.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  // create variable for receive list of foods
  public list: Array<any> = [];//this.foodListServService.getList();

  constructor(private foodListServService: FoodListServService) { }
  ngOnInit() {
    this.list = this.foodListServService.getList(); 
  }



}
