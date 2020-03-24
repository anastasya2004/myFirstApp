import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
   declarations: [
      AppComponent,
      MyHeaderComponent,
      MyHeaderComponent,
      MyHeaderComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
