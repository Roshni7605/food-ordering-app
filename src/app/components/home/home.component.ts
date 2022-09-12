import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = []

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll()
  }

}
