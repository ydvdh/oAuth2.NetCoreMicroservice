import { NgModule } from '@angular/core';
import { AuthService } from './auth-service.';
import { MovieService } from './movie.service';
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        MovieService,
        AuthService
    ],
})
export class CoreModule { }
