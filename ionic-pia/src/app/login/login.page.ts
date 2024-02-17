import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  
  constructor(private router: Router,
    private autSvc: AuthService) { }

  ngOnInit() {
  }

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        this.router.navigate(['/admin']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            console.log(user.code);
          }
        }
      }
    }).catch((error: any)=>{
      console.log(error);
    })

  } 

}
