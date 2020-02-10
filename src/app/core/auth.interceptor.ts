import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      const cloned = req.clone({
        headers: req.headers
          .set('Authorization', `Bearer ${user.token}`)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
