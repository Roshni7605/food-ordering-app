import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!: Cart

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.setCart()
  }

  setCart(){
    this.cart = this.cartService.getCart()
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart()
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart()
  }

}
