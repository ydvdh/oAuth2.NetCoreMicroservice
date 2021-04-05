import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movies/movie-list.component';
import { ContactUsComponent } from './home/contact-us.component';
import { SigninRedirectCallbackComponent } from './home/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './home/signout-redirect-callback.component';
import { UnauthorizedComponent } from './home/unauthorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'app-signout-callback', component: SignoutRedirectCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
