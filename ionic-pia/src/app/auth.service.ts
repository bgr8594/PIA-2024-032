import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { User } from './user';
import {Router } from '@angular/router';

const firebaseApp = initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoged : any = false;
  auth: Auth;

  constructor(private router: Router) {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
   }
   tieneSesion(){
    return this.isLoged;
   }

   getStateAuth(){
    return this.auth;
   }
     //login
  onLogin(user: User): Promise<any>{
      return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
   //register
   onRegister(user: User): Promise<any>{
      return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  onLogout(){
    signOut(this.auth).then(response=>{
      console.log("Logout!");
      this.router.navigateByUrl('/login');
    }).catch(error=>{

    });
  }
  
}
