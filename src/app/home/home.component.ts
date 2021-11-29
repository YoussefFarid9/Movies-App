import { Component, OnInit } from '@angular/core';
import {ApiCallsService} from "../api-calls.service";
import {Router} from "@angular/router";


export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = '?api_key=ea13feb29808cba44ae41a961107c167';
export const URL = 'https://api.themoviedb.org/3/movie/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../../node_modules/bootswatch/dist/lumen/bootstrap.min.css',
  ]
})
export class HomeComponent implements OnInit {

  movies: any = [];
  movie: any = {};
  isdetail = false;



  constructor(
    private apiService:ApiCallsService,
    private router: Router

  ) { }


  ngOnInit(): void {
  }

  getMovies(event:Event){
    this.apiService.searchMovies((<HTMLInputElement>event.target).value).subscribe( (response:any) => {
      this.movies = response.results;
      console.log(this.movies)
    })
  }


   movieSelected(id:number){
    this.apiService.movieDetails(id).subscribe(
      (response:any) => {
        this.movie = response;
        this.isdetail = true;
      }
    )
  }

}
