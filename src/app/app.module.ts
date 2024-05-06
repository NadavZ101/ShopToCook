import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { ShoppingListComponent } from './cmps/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './cmps/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './cmps/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './cmps/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './cmps/recipe-details/recipe-details.component';
import { IngredientComponent } from './cmps/ingredient/ingredient.component';
import { RecipeComponent } from './cmps/recipe/recipe.component';
import { HeaderComponent } from './cmps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    IngredientComponent,
    RecipeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
