import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular-app', el);
  }

}
