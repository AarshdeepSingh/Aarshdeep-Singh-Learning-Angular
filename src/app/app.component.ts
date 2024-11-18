import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCards } from './project.interface';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle, UpperCasePipe} from '@angular/common';
import { PokemonCardsListComponent } from './pokemon-cards-list/pokemon-cards-list.component';
import { PokemonCardsListItemComponent } from './pokemon-cards-list-item/pokemon-cards-list-item.component';
import { PokemonCardsService } from './service/Pokemon-Cards-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import {DataPipePipe} from "./data-pipe.pipe";
import {PokemonCardsList} from "./Data/Pokemon-Cards-content";
import {BoldCardNamePipe} from "./bold-card-name.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf,
    NgIf,
    PokemonCardsListItemComponent,
    PokemonCardsListComponent,
    NavbarComponent,
    UpperCasePipe,
    CurrencyPipe,
    DataPipePipe,
    NgClass,
    NgStyle,
    BoldCardNamePipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  PokemonCards!: PokemonCards[];

  constructor(private pokemonCardsService: PokemonCardsService) {}

  ngOnInit(): void {
    const PokemonCardsId = 1;

    this.pokemonCardsService.getPokemonCardsById(PokemonCardsId).subscribe(card => {
      if (card) {
        this.PokemonCards = [card];  // Assuming the service returns a single card, wrap it in an array
      } else {
        console.error('Card not found');
      }
    });
  }

  protected readonly PokemonCardsList = PokemonCardsList;
}
