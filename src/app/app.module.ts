import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemsEditComponent } from './pages/items-edit/items-edit.component';
import { NotfoundComponent } from './fallback/notfound/notfound.component';
import { KeyvaluePipe } from './keyvalue.pipe';
import { ItemsCardComponent } from './components/items-card/items-card.component';
import { FormAddItemComponent } from './components/form-add-item/form-add-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemsEditComponent,
    NotfoundComponent,
    KeyvaluePipe,
    ItemsCardComponent,
    FormAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
