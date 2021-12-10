import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationStatistiqueComponent } from './creation-statistique/creation-statistique.component';
import { ListeStatistiquesComponent } from './liste-statistiques/liste-statistiques.component';

const routes: Routes = [
{path: 'liste-statistiques', component: ListeStatistiquesComponent},{ path: 'creation-statistique', component: CreationStatistiqueComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
