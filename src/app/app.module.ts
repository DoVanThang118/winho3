import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {NewComponent} from "./new/new.component";
import {ProductListComponent} from "./product-list/product.list.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ContentfulService} from "./contentful.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product-list', component:ProductListComponent
  },
  {
    path: 'new', component: NewComponent
  }
]

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  exports:[],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
