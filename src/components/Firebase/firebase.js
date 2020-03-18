import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAMWqoumqTFtOuFTllFVNm7VuOJtNu45_I",
    authDomain: "waynecounty-8ec76.firebaseapp.com",
    databaseURL: "https://waynecounty-8ec76.firebaseio.com",
    projectId: "waynecounty-8ec76",
    storageBucket: "waynecounty-8ec76.appspot.com",
    messagingSenderId: "531514939034",
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