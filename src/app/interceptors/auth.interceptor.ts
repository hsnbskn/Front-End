import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

// Durdurup bakıyor token var mı diye kontrol ediyor varsa devamke..

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer" + token)
    })
    return next.handle(request);
  }
}


//Error

//request post işlemi ürün seç ekle herhangi bir istek..
//next bir sonraki aşamada olacak olan şey..