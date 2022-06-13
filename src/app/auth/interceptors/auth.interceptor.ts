import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
class AuthInterceptor implements HttpInterceptor{

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken: string | null =  localStorage.getItem('accessToken');
    const tokenType: string | null = localStorage.getItem('tokenType');
    let request= req;
    if(accessToken && tokenType) {
      const completeToken = `${tokenType} ${accessToken}`;

      request= req.clone({
        setHeaders:{

          authorization: completeToken
        }
      })
    }

    return next.handle(request);
  }
}


export default AuthInterceptor;
