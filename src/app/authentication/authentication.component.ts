import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    regRes: string;
    isLoggedIn = false;


    constructor(public authService: AuthServiceService, private router: Router, ) {

    }

    ngOnInit() {

    }

    
    async signUp(email: string, password: string) {
        console.log('vatefaire enculer');
        return this.regRes = await this.authService.signUp(email, password).then((data) => {
            return data;
        })
    }

    signIn(email:string, password:string) {
        this.authService.signIn('marcel@gmail.com', 'marcel').then((data) => {
            if (data='success') {
                this.router.navigate(['forecast']);
            }
        });

    }

    signOut() {
        this.authService.signOut();
        this.router.navigate(['']);
    }

    forgotPassword(email:string) {
        this.authService.sendPasswordResetEmail(email);
    }
}
