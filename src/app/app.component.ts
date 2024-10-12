import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCards } from "./project.interface";
import { NgForOf, NgIf } from "@angular/common";
import { PokemonCardsListComponent } from "./pokemon-cards-list/pokemon-cards-list.component";
import { PokemonCardsListItemComponent } from "./pokemon-cards-list-item/pokemon-cards-list-item.component";
import { PokemonCardsService } from './service/Pokemon-Cards-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf,
    NgIf,
    PokemonCardsListItemComponent,
    PokemonCardsListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  PokemonCards!: PokemonCards;

  constructor(private pokemonCardsService: PokemonCardsService) {}

  ngOnInit(): void {
    const PokemonCardsId = 1;

    this.pokemonCardsService.getPokemonCardsById(PokemonCardsId).subscribe(card => {
      if (card) {
        this.PokemonCards = card;
      } else {
        console.error('Card not found');
      }
    });
  }
}
