import { Component, OnInit } from '@angular/core';
import { PokemonCardsListItemComponent } from "../pokemon-cards-list-item/pokemon-cards-list-item.component";
import { NgClass, NgForOf, NgStyle } from "@angular/common";
import { PokemonCardsService } from "../service/Pokemon-Cards-service.service"; // Import the service
import { PokemonCards } from "../project.interface"; // Ensure this is imported correctly

@Component({
  selector: 'app-pokemon-cards-list',
  standalone: true,
  imports: [
    PokemonCardsListItemComponent,
    NgStyle,
    NgClass,
    NgForOf
  ],
  templateUrl: './pokemon-cards-list.component.html',
  styleUrls: ['./pokemon-cards-list.component.css'] // Corrected to plural
})
export class PokemonCardsListComponent implements OnInit {

  PokemonCardsList: PokemonCards[] = [];

  constructor(private pokemonCardsService: PokemonCardsService) {} // Use the correct type here

  ngOnInit(): void {
    this.pokemonCardsService.getPokemonCards().subscribe({
      next: (data: PokemonCards[]) => this.PokemonCardsList = data,
      error: (err: any) => console.error("Error fetching Pokemon cards", err),
      complete: () => console.log("Pokemon cards data fetch complete")
    });
  }
}
