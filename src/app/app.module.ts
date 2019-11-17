import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './navbar/navbar.component';


const firebaseConfig = {
    apiKey: "AIzaSyAt6DLiK3qVcgjMk2IHEdmk9iUf9UtiYxg",
    authDomain: "forecast-ab12b.firebaseapp.com",
    databaseURL: "https://forecast-ab12b.firebaseio.com",
    projectId: "forecast-ab12b",
    storageBucket: "forecast-ab12b.appspot.com",
    messagingSenderId: "70130401149",
    appId: "1:70130401149:web:c3631ee58c12367adcd614",
    measurementId: "G-KFQSWK42JM"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
