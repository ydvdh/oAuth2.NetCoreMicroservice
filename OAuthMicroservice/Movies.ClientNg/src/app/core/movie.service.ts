import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Constants } from '../constants';
import { Movie } from '../model/movie';
import { AuthService } from './auth-service.';

@Injectable()
export class MovieService {
    constructor(private _httpClient: HttpClient, private _authService: AuthService) { }

    getMovies(): Observable<Movie[]> {
        return from(this._authService.getAccessToken().then(token => {
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            return this._httpClient.get<Movie[]>(Constants.apiRoot + 'Movies', { headers: headers }).toPromise();
        }));
    }
}