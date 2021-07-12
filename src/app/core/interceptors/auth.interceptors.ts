import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private oktaAuth: OktaAuthService){
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url);
        const accessToken = 'Bearer '+this.oktaAuth.getAccessToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization', accessToken)
          }); 
        return next.handle(req);
    }
}