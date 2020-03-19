import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "Your api key here",
    authDomain: "your domain here",
    databaseURL: "your database here",
    projectId: "your project id here",
    storageBucket: "id here",
    messagingSenderId: "id here",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email,password) => this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email,password) => this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    
}

export default Firebase;
