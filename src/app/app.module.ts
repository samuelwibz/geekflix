import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MovieService } from './movie-service';

import {HttpClientModule} from '@angular/common/http';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  //{path: 'selection/:title/:image/:description', component: MovieSelectionComponent}
  {path: 'selection', component: MovieSelectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,
    MovieDisplayComponent,
    MovieSelectionComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
