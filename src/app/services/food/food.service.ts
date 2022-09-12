import { Injectable } from '@angular/core';
import { Food } from 'src/app/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: false,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food1.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
      // {
      //   id: 2,
      //   name: 'Chole Bhture',
      //   price: 6,
      //   cookTime: '40-50',
      //   favorite: true,
      //   origins: ['indian'],
      //   star: 4.0,
      //   imageUrl: '/assets/food2.jpg',
      //   tags: ['FastFood','Pizza','Lunch']
      // },
      // {
      //   id: 3,
      //   name: 'Chole Bhture',
      //   price: 6,
      //   cookTime: '40-50',
      //   favorite: true,
      //   origins: ['indian'],
      //   star: 4.0,
      //   imageUrl: '/assets/food3.jpg',
      //   tags: ['FastFood','Pizza','Lunch']
      // },
      {
        id: 4,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id: 5,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id: 6,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food6.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id: 7,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food7.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id: 8,
        name: 'Chole Bhture',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food8.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
    ]

  }
}
