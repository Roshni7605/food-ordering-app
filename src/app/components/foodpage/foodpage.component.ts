import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/model/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Food

  constructor(private router: ActivatedRoute,
              private foodService: FoodService,
              private cartService: CartService,
              private route: Router) 
  {
    router.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food)
    this.route.navigateByUrl('/cart')
  }

}
