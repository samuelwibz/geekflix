import { Component, OnInit } from '@angular/core';
import { MovieSelectionService } from '../movie-selection-service';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';
import { PlatformLocation } from '@angular/common';
import { MovieDetails } from '../movie-details.model';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-movie-playlist',
  templateUrl: './movie-playlist.component.html',
  styleUrls: ['./movie-playlist.component.css'],

})
export class MoviePlaylistComponent implements OnInit {

  playlistFilter = [{ mood: 'happy', name:'Happy'},{ mood: 'neutral', name:'Meh...'}, {mood:'sad', name:'Sad'}];
  
  moviePlaylist: MovieDetails[] = [];

  selectedMoviePlaylist:MovieDetails[] = [];

  constructor(private movieSelectionService: MovieSelectionService, private location: PlatformLocation) { 
    location.onPopState(() => {
      localStorage.setItem ("happy_playlist_main",JSON.stringify(this.movieSelectionService.moviePlaylist));
    })

  }

  ngOnInit(): void {
    const happyEmotionMoviePlaylist = JSON.parse(localStorage.getItem('happy_playlist') || '{}')
    this.moviePlaylist = happyEmotionMoviePlaylist;
  }

  public movieSelected(event: any){
    this.selectedMoviePlaylist.length =0;
      this.moviePlaylist.filter(
        item => {
          if (item.mood === event.target.value){
           if (!this.selectedMoviePlaylist.includes(item)){
              this.selectedMoviePlaylist.push(item)
           }
         } 
        }
      )
      console.log (this.selectedMoviePlaylist)
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.selectedMoviePlaylist, event.previousIndex, event.currentIndex)
  }

}
