import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MovieService } from './movie-service';
import {HttpClientModule} from '@angular/common/http';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MoviePlaylistComponent } from './movie-playlist/movie-playlist.component';
import { MovieSelectionService } from './movie-selection-service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';



const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'selection', component: MovieSelectionComponent},
  {path: 'playlist', component: MoviePlaylistComponent}
];
@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,
    MovieDisplayComponent,
    MovieSelectionComponent,
    HeaderComponent,
    MoviePlaylistComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    DragDropModule,
    FormsModule
    
  ],
  providers: [MovieService,LocalStorageService, MovieSelectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
