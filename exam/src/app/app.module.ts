import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatistiqueComponent } from './une-statistique/une-statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    UneStatistiqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
