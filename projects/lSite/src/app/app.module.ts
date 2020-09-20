import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppSettings } from './app.settings';
import { AuthService } from './sharedServices/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { customHttpInterceptor} from './sharedServices/http.interceptor';
import { LoaderService} from './sharedServices/loader.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AppSettings,AuthService,LoaderService,
    {provide: HTTP_INTERCEPTORS,useClass:customHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
