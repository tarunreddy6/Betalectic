import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfavorite',
  templateUrl: './addfavorite.component.html',
  styleUrls: ['./addfavorite.component.css']
})
export class AddfavoriteComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.router.navigateByUrl("hasFav");
  }

}
