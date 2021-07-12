import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { UserClaims } from '@okta/okta-auth-js';
import { EMPTY, Observable, of} from 'rxjs';
import { switchMap,tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient,private oktaAuth: OktaAuthService) { }

    async login(): Promise<void> {
        await this.oktaAuth.signInWithRedirect();
    }
    
    async logout(): Promise<void> {
        await this.oktaAuth.signOut();
    }

    $authenticationState=this.oktaAuth.$authenticationState.pipe(
        tap(data=>console.log(`User is ${JSON.stringify(data)}`))
    );

    async getUser():Promise<UserClaims|null>{
        var isAuthenticated= await this.oktaAuth.isAuthenticated();
        if(isAuthenticated){
            return await this.oktaAuth.getUser();
        }
        return new Promise((resolve) => { resolve(null); });

    }
}