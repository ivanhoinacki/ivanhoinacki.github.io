import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatPaginatorIntl } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LibModule } from './lib.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule, CookieService } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibModule,
    CookieModule.forRoot()
  ],
  providers: [
    CookieService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
