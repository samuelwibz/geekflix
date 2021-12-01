import { Injectable, Output } from "@angular/core";

import { MovieService } from "./movie-service";
import { MovieDetails } from "./movie-details.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MovieSelectionService {
    
    moviePlaylist: MovieDetails[] = [];

    constructor ( private movieService: MovieService, private httpClient :HttpClient){}

    getMovie(){
       let movie = this.movieService.getSelectedMovie();
       return movie;
    }

    getSimilarMovieData(id: number): Observable<any> {
        const begURL = "https://api.themoviedb.org/3/movie/";
        const endURL = "/similar?api_key=ee311cf55f11854e4456bfb7e592e06e&language=en-US&page=1";

        return this.httpClient.get<MovieDetails>(`${begURL}${id}${endURL}`)
    }

    addToHappyEmotionMovies (movie: MovieDetails){
        movie.mood = "happy";
        this.moviePlaylist.push(movie);
    }
    
    addToNeutralEmotionMovies (movie: MovieDetails){
        movie.mood = "neutral";
        this.moviePlaylist.push(movie);
    }

    addToSadEmotionMovies (movie: MovieDetails){
        movie.mood = "sad";
        this.moviePlaylist.push(movie);
    }



}