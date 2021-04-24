import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('دستور پخت ماکارونی','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', 'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg'),
    new Recipe('دستور پخت ماکارونی','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', 'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg'),
    new Recipe('دستور پخت ماکارونی','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', 'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
