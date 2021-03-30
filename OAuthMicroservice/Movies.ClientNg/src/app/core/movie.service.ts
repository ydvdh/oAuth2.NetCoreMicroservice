import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {
    constructor(private _httpClient: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this._httpClient.get<Movie[]>(Constants.apiRoot + 'Movies');
    }
}