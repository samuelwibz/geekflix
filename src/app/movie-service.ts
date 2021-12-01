import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient , HttpParams} from "@angular/common/http";
import { MovieDetails } from "./movie-details.model";
import { ActivatedRoute, Router } from "@angular/router";


@Injectable()
export  class MovieService {
    
     selectedMovie: MovieDetails [] = [];

    constructor(private httpClient :HttpClient, private route: ActivatedRoute, private router: Router){}
    
        getMovieDetails(): Observable<any>{
            return this.httpClient.get<MovieDetails>("https://api.themoviedb.org/3/discover/movie?api_key=ee311cf55f11854e4456bfb7e592e06e&with_genres=878#");
        }

        addToSelectedMovie (movie: MovieDetails){
            this.selectedMovie.length = 0;
            this.selectedMovie.push(movie);
        }

        getSelectedMovie(){
                return this.selectedMovie;
        }

        addDisplaySelectedMovie(movie: MovieDetails){
            this.router.navigate(['/selection']);
            console.log(movie);
            this.addToSelectedMovie(movie);
        }
            
}

//https://api.themoviedb.org/3/movie/550?api_key=ee311cf55f11854e4456bfb7e592e06e