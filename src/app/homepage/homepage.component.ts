import { Component, OnInit } from '@angular/core';
import { MovieSelectionService } from '../movie-selection-service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    
  ]
})
export class HomepageComponent implements OnInit {

  constructor(private movieSelectionService: MovieSelectionService) { }

  ngOnInit(): void {
   
  }

}


//https://wallpaperaccess.com/full/220303.jpg