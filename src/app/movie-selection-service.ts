import { Injectable, Output } from "@angular/core";
import { EventEmitter } from "stream";
import { MovieService } from "./movie-service";
import { MovieDetails } from "./movie-details.model";

@Injectable()
export class MovieSelectionService {

   //selectionRequest = new EventEmitter <MovieDetails[]> ();


    constructor ( private movieService: MovieService){


    }

}