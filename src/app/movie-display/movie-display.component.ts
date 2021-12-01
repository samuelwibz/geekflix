import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';
import { HttpClient } from '@angular/common/http';
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
  displayDelete: number;
  
  loadedMovies: MovieDetails[] = []
  constructor(private movieService: MovieService, private router: Router, location:PlatformLocation, private httpClient:HttpClient, private movieSelectionService: MovieSelectionService ) {
    
    this.displayDelete = 0;
    location.onPopState(() => {
      //window.location.reload();
      localStorage.setItem ("happy_playlist",JSON.stringify(this.movieSelectionService.moviePlaylist));
    })
    
   }

  ngOnInit(){
    const happyEmotionMoviePlaylist = JSON.parse(localStorage.getItem('happy_playlist_main') || '{}')
    //console.log(this.movieSelectionService.happyEmotionMovies);
     console.log (happyEmotionMoviePlaylist);

    this.movieService
    .getMovieDetails()
    .subscribe( (data) => 
      { 
         this.loadedMovies = data.results
        
        
      }
    )
  }

   displaySelectedMovie(movie: MovieDetails){

      this.movieService.addDisplaySelectedMovie(movie);
   }



  deleteMovie(movie: MovieDetails){
    if (confirm("Are you sure you want to remove " + movie.title +"?")){
      this.loadedMovies.forEach((value, index) => {
        if(value == movie) this.loadedMovies.splice(index,1)
        })
      }
    }
}


