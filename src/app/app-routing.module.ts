import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [

    { path: '', component: AuthenticationComponent },
    { path: 'forecast', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: '**', component: HomeComponent, canActivate: [AuthGuardService], }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
