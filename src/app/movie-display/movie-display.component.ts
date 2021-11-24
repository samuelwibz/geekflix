import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';

import { MovieDetails} from '../movie-details.model';

import {map} from 'rxjs/operators';
@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  //movieList: MovieDetails=  [];
    loadedMovies: MovieDetails[] = []
  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.movieService
    .getData()
    .subscribe( (data) => 
      {
        
         this.loadedMovies = data.results;
         console.log(this.loadedMovies[10].title);
        
         
      }

    )
  }

   displaySelectedMovie(){
    
   }

}


/*
.pipe(
      map((responseData: {[key: number] : MovieDetails}) => {
        const postsArray: MovieDetails[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
           postsArray.push({ ... responseData[key]});
          }
        }
        return postsArray;
    }))
    */