import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./pages/items/items.component";
import {ItemsEditComponent} from "./pages/items-edit/items-edit.component";
import {NotfoundComponent} from "./fallback/notfound/notfound.component";
import {RoutePaths} from "./RoutePaths";

const routes: Routes = [
  {
    path: RoutePaths.items,
    component: ItemsComponent
  },
  {
    path: RoutePaths.edit,
    component: ItemsEditComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
