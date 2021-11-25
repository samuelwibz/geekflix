import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../movie-details.model';
import { MovieSelectionService } from '../movie-selection-service';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css'],
  providers: [MovieSelectionService]
})
export class MovieSelectionComponent implements OnInit {
  userSelectedMovie: MovieDetails[] = [];

  constructor(private route: ActivatedRoute, private movieSelectionService: MovieSelectionService ) { }

  ngOnInit(): void {
    this.userSelectedMovie = this.movieSelectionService.getMovie();
    //this.route.params ['paramter defined in module/ts route']
    console.log(this.userSelectedMovie);
  }
  /*this.route.params.subscribe ( (params: Params) => {
      
  })
  */

 
}
