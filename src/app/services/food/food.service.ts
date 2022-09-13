import { Injectable } from '@angular/core';
import { Food } from 'src/app/model/food';
import { Tag } from 'src/app/model/Tag';

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
        tags: ['Pizza','Lunch']
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
        name: 'Ice Cream',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood','Lunch']
      },
      {
        id: 5,
        name: 'Idli-Dosa',
        price: 6,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood','Lunch']
      },
      {
        id: 6,
        name: 'Paneer Butter Masala',
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
        name: 'Chesse Pizza',
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
        name: 'Butter Paneer with Naan',
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

  getAllFoodByTag(tag: string) :Food[]{

    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllTag() : Tag[]{
    return [
      { name : 'All', count: 14},
      { name : 'FastFood', count: 6},
      { name : 'Pizza', count: 8},
      { name : 'Lunch', count: 12},
    ]
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!
  }
}
