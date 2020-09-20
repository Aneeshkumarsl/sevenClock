import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { tap,catchError,finalize ,delay} from 'rxjs/operators';
import { LoaderService } from './loader.service';
@Injectable()

export class customHttpInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        
      this.loaderService.ShowLoader();
      
      const tokenReq = req.clone(
          // {headers:req.headers.set('Authorization',localStorage.getItem('Authorization'))
          //                     .set('Content-Type','application/json')}

      )
                   
    return next.handle(tokenReq).pipe(
        delay(1000),
      finalize(()  => this.loaderService.HideLoader())
      );

  }

}
