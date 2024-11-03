import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { PokemonCardsListItemComponent } from "../pokemon-cards-list-item/pokemon-cards-list-item.component";
import { NgClass, NgForOf, NgStyle } from "@angular/common";
import { PokemonCardsService } from "../service/Pokemon-Cards-service.service";
import { PokemonCards } from "../project.interface";

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
  styleUrls: ['./pokemon-cards-list.component.css']
})
export class PokemonCardsListComponent implements OnInit {

  PokemonCardsList: PokemonCards[] = [];

  constructor(private pokemonCardsService: PokemonCardsService, private router: Router) {}

  ngOnInit(): void {
    this.loadPokemonCards();
  }

  loadPokemonCards() {
    this.pokemonCardsService.getPokemonCards().subscribe({
      next: (data: PokemonCards[]) => this.PokemonCardsList = data,
      error: (err: any) => console.error("Error fetching Pokemon cards", err),
      complete: () => console.log("Pokemon cards data fetch complete")
    });
  }

  editItem(card: PokemonCards) {
    this.router.navigate(['/modify'], { state: { item: card } });
  }

  deleteItem(id: number) {
    this.pokemonCardsService.deleteGame(id).subscribe(() => {
      this.loadPokemonCards(); // Reload the list after deletion
    });
  }

  goToAddItem() {
    this.router.navigate(['/modify']);
  }
}
