import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthService } from './auth-service.';
import { MovieService } from './movie.service';
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        MovieService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
})
export class CoreModule { }
