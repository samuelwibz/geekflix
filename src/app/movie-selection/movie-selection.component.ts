import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { MovieDetails } from '../movie-details.model';
import { MovieSelectionService } from '../movie-selection-service';
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {
  userSelectedMovie: MovieDetails[] = [];
  similarMovies: MovieDetails[] = [];

  constructor(private route: ActivatedRoute, private movieSelectionService: MovieSelectionService, private movieService: MovieService , private localStorageService: LocalStorageService) { }

  ngOnInit() {
      
    this.userSelectedMovie = this.movieSelectionService.getMovie();
  
    this.movieSelectionService.
    getSimilarMovieData(this.userSelectedMovie[0].id)
    .subscribe(
      (data) =>{
      this.similarMovies = data.results;
      }
    )
  }

  displaySelectedMovie(movie: MovieDetails){
    const storedMovie = movie;
    localStorage.setItem("stored_item", JSON.stringify(storedMovie));
    this.movieService.addDisplaySelectedMovie(JSON.parse(localStorage.getItem('stored_item') || '{}'));
 }

  refreshSimilarMovieList(){
    console.log(this.userSelectedMovie[0]);
    this.similarMovies.length =0;
  
    this.movieSelectionService.
     getSimilarMovieData(this.userSelectedMovie[0].id)
     .subscribe(
          (data) =>{
        this.similarMovies = data.results;
        }
      )
  }

    addHappyEmotionMovie (movie: MovieDetails){
      if (!this.movieSelectionService.moviePlaylist.includes(movie)){
        if (confirm( movie.title +" has been added to your movie list")){
         this.movieSelectionService.addToHappyEmotionMovies(movie);
       
        }
      } else{
          confirm (movie.title +" already exists in your playlist")
      }
    }

    addNeutralEmotionMovie (movie: MovieDetails){
      if (!this.movieSelectionService.moviePlaylist.includes(movie)){
        if (confirm( movie.title +" has been added to your movie list")){
         this.movieSelectionService.addToNeutralEmotionMovies(movie);
     
        }
      } else{
          confirm (movie.title + " already exists in your playlist")
      }
    }
    
    addSadEmotionMovie (movie: MovieDetails){
      if (!this.movieSelectionService.moviePlaylist.includes(movie)){
        if (confirm( movie.title +" has been added to your movie list")){
         this.movieSelectionService.addToSadEmotionMovies(movie);
       
        }
      } else{
          confirm (movie.title +" already exists in your playlist")
      }
    }

}


