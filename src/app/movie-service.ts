import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MovieDetails } from "./movie-details.model";


@Injectable()
export  class MovieService {
    //loadedMovies: MovieDetails[] = [];

    constructor(private httpClient :HttpClient){}
    
    
        getData(): Observable<any>{
            return this.httpClient.get<MovieDetails>("https://api.themoviedb.org/3/discover/movie?api_key=ee311cf55f11854e4456bfb7e592e06e&with_genres=878#");
        }

    
}

//https://api.themoviedb.org/3/movie/550?api_key=ee311cf55f11854e4456bfb7e592e06e