import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import { HomeComponent } from './app/home/home.component';
import { ModifyListItemsComponent } from './app/modify-list-items/modify-list-items.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component'; //
import {PokemonCardsListComponent} from "./app/pokemon-cards-list/pokemon-cards-list.component";


const routes = [
  {path: '', component: HomeComponent},
  {path: 'modify', component: ModifyListItemsComponent},
  {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
  provideRouter(routes)
]
})
  .catch((err) => console.error(err));
