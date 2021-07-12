import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { ServerApis } from 'src/app/api.constants';
import { User } from 'src/app/auth/user';
import { LoginModal } from 'src/app/models/LoginModal';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { TransportService } from '../transport/transport.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject<any>(null);

constructor(private transportService:TransportService,private toastrService: NbToastrService, private router: Router) { }

    public login(loginModal:LoginModal)
    {  
     this.transportService.
      CreateRaw<LoginResponse>(loginModal,ServerApis.userLoginURL).subscribe((data:LoginResponse)=>{
      this.afterSuccessfulLogin(data);
    },error=>{

    });
    }

  afterSuccessfulLogin(data:LoginResponse)
  {
  const user = new User(data.responseObject.email,data.responseObject.token );
  this.user.next(user);

  localStorage.setItem('user', JSON.stringify(user));
  this.router.navigate(['/pages']);
  }

public autoLogin() 
  {
    const user = localStorage.getItem('user')
    if(!user)
    {
      return
    }
      this.user.next(JSON.parse(user));
      this.router.navigate(['/pages']);
  }
}
