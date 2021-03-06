import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule' },
    { path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
    // imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}