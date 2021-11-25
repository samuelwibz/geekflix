import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MovieDetails } from "./movie-details.model";


@Injectable()
export  class MovieService {
    
    selectedMovies: MovieDetails [] = [];

    constructor(private httpClient :HttpClient){}
    
    
        getData(): Observable<any>{
            return this.httpClient.get<MovieDetails>("https://api.themoviedb.org/3/discover/movie?api_key=ee311cf55f11854e4456bfb7e592e06e&with_genres=878#");
        }

        addToSelectedMovie (selectedMovie: MovieDetails){
            this.selectedMovies.push(selectedMovie);
            //this.selectedMovies.length = 0;
            //console.log(this.selectedMovies.splice);
        }

        getSelectdMovie(){
            return this.selectedMovies;
        }

        
    

    
}

//https://api.themoviedb.org/3/movie/550?api_key=ee311cf55f11854e4456bfb7e592e06e