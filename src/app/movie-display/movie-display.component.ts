import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';

import { MovieDetails} from '../movie-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { MovieSelectionService } from '../movie-selection-service';
@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  
  loadedMovies: MovieDetails[] = []
  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute, location:PlatformLocation) {
    location.onPopState(() => {
      window.location.reload();
    })
   }

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

 

   displaySelectedMovie(movie: MovieDetails){
      this.router.navigate(['/selection'], {relativeTo: this.route});
      console.log(movie);

      this.movieService.addToSelectedMovie(movie);
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