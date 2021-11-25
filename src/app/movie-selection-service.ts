import { Injectable, Output } from "@angular/core";

import { MovieService } from "./movie-service";
import { MovieDetails } from "./movie-details.model";

@Injectable()
export class MovieSelectionService {
    //selectedMovies: MovieDetails [] = [];

    //selectionRequest = new EventEmitter <MovieDetails []> ();


    constructor ( private movieService: MovieService){}


    
    getMovie(){
       // console.log(this.movieService.selectedMovies[0])
       let movie = this.movieService.getSelectdMovie();
       
       //console.log(movie);
       return movie;
     

    }

    

}