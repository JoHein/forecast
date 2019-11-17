export class User {

    email: string;
    displayName: string;
    photoURL: string;

    constructor(email: string, displayName: string, photoURL:string ) {
        this.email = email;
        this.displayName = displayName;
        this.photoURL = photoURL;
    }
}
