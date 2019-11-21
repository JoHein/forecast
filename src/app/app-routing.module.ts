import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { WeatherResolverService } from './resolver/weather-resolver.service';
const routes: Routes = [

    { path: '', component: AuthenticationComponent },
    {
        path: 'forecast', component: HomeComponent, canActivate: [AuthGuardService],
        resolve: { weather: WeatherResolverService }
    },
    { path: '**', component: AuthenticationComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
