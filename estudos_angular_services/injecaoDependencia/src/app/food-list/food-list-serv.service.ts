import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodListInterface } from '../shared/food-list-interface';

@Injectable({
  providedIn: 'root'
})
export class FoodListServService {

  /* create list of foods */
  private list: Array<FoodListInterface> = [];
  foodListServService: any;

  constructor(private http: HttpClient) { }

  // create for method atualize one element of list
  public atualizeList(food: string, index: number){
    // Validate if index is valid
    if(index < 0 || index > this.list.length){
      return 'Index is invalid';
    }else{
      return this.list[index].nome = food;
    } 
  }

  // create method for add new food
  public listAddValue(food: string){
    return this.foodListServService.addFood(food);
    console.log(food);
  }


  // create method Get for return list of foods
  public getListFoods(){
    return this.http.get('http://localhost:3000/foodPosts');
  }

  // create method Post for save list of foods
  public postList(){
    return this.http.post('http://localhost:3000/foodPosts', this.list);
  }
  

  // create method for add new food
   public addFood(food: FoodListInterface){
     return this.list.push(food);
   }

  // create method for return list of foods
  public getList(){
    return this.list;
  }

  // ng g i shared/food-list-interface --skipTests  

}
