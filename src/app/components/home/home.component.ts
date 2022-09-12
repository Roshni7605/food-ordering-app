import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food/food.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = []

  constructor(private foodService: FoodService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchFood'])
      this.foods = this.foodService
                       .getAll()
                       .filter(food => food.name.toLowerCase()
                       .includes(params['searchFood'].toLowerCase()))
      else
      this.foods = this.foodService.getAll()
    })
    
  }

}
