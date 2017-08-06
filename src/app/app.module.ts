import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverDirectiveDirective } from './hover-directive/hover-directive.directive';
import { ShowImageComponent } from './show-image/show-image.component';
import { routes } from '../../app.route'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HoverDirectiveDirective,
    ShowImageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
