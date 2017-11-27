import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
