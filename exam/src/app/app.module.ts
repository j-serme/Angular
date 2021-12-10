import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatistiqueComponent } from './une-statistique/une-statistique.component';
import { ListeStatistiquesComponent } from './liste-statistiques/liste-statistiques.component';
import { CreationStatistiqueComponent } from './creation-statistique/creation-statistique.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UneStatistiqueComponent,
    ListeStatistiquesComponent,
    CreationStatistiqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
