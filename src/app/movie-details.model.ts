/*
export interface MoviePage{
     page: number;
}

export interface MovieResults {
    
        adult: boolean,
        backdrop_path: string ,
        genre_ids: [],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
       
}

export interface MovieTotalPages{
    total_pages: number
}
export interface MovieTotalResults{
    total_results:number
}
*/



export interface MovieDetails 
{
    
   
     adult: boolean,
     backdrop_path: string ,
     genre_ids: [],
     id: number,
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     poster_path: string,
     release_date: string,
     title: string,
     video: boolean,
     vote_average: number,
     vote_count: number
    


    /*
    constructor(adult: boolean, backdrop_path: string, genre_ids: [], id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string,release_date: string,title: string, video: boolean, vote_average: number, vote_count: number) {
        this.adult = adult;
        this.backdrop_path=backdrop_path;
        this.genre_ids = genre_ids;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
    */
}



/*
"adult": false,
"backdrop_path": "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
"genre_ids": [3 items],
"id": 580489,
"original_language": "en",
"original_title": "Venom: Let There Be Carnage",
"overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
"popularity": 4141.331,
"poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
"release_date": "2021-09-30",
"title": "Venom: Let There Be Carnage",
"video": false,
"vote_average": 6.8,
"vote_count": 2039
*/