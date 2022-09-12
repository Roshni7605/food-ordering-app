import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFood: string = ''

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchFood'])
      this.searchFood = params['searchFood']
    })
  }

  search(): void{
    if(this.searchFood)
    this.router.navigateByUrl('/search/'+ this.searchFood)
  }

}
