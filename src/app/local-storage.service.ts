import { Injectable } from "@angular/core";
import { MovieDetails } from "./movie-details.model";


@Injectable({ providedIn: 'root' })

export class LocalStorageService {
   //private storedMovie: string = "";

   setStoredItem(movie: MovieDetails){
    localStorage.setItem("stored_movie", JSON.stringify(movie));
   }
   getStoredItem(key:string){
       // return localStorage.getItem(key);
   }
}