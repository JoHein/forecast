import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { Router } from "@angular/router";
import { User } from '../models/user';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map, first, take, tap } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    user: User;
    userData: Observable<firebase.User>;

    constructor(public firebaseAuth: AngularFireAuth, public router: Router, public af: AngularFireModule ) {

     this.firebaseAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                this.user = new User(user.email,user.displayName,user.photoURL);

                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);

            }
     });
        this.userData = firebaseAuth.authState;

     }

    ngOnInit() {
    }

    get getUserLoggedIn(): boolean {
        let data = localStorage.getItem('user');
        if (data!=="null") {
            return true;
        } else {
            return false;
        }
    }



    signIn(email: string, password: string): any {
       let promise = this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (success) {
                return success;
            })
            .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            var errorMessage = error.message;
            // ...
            });
        return promise;
    }

    signUp(email: string, password: string): any {
        let promise = this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.router.navigate(['forecast']);
                this.emailVerification();
                return "success";
            })
            .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
           return error.message;
            });
        
        return promise;
    }


    signOut() {
        this.firebaseAuth.auth.signOut().then(function () {
            // Sign-out successful.
            localStorage.removeItem('user');
        }).catch(function (error) {
            // An error happened.
        });

    }

    emailVerification() {
        let user = this.firebaseAuth.auth.currentUser;
          user.sendEmailVerification().then(function (success) {
            // Email sent.
            console.log("email sent");
            return success;
        }).catch(function (error) {
            // An error happened.
        });

    }

    sendPasswordResetEmail(passwordResetEmail: string) {
       let resultReset=  this.firebaseAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(function (success) {
            return success;
       }).catch(function (error) {
           return error;
       })

        return resultReset;
    }

    //////////////FACEBOOK//////////////////

    FacebookSignIn() {
        return this.AuthLogin(new auth.FacebookAuthProvider());
    }

    AuthLogin(provider) {
        return this.firebaseAuth.auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                  console.log('You have been successfully logged in!')
            }).catch((error) => {
                console.log(error)
            })
    }
}

