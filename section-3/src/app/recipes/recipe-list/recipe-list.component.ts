import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://res.publicdomainfiles.com/pdf_view/2/13494146416391.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://res.publicdomainfiles.com/pdf_view/2/13494146416391.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
