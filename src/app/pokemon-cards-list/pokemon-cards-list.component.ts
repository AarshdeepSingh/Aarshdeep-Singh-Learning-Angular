import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCardsService } from '../service/Pokemon-Cards-service.service';
import { PokemonCards } from '../project.interface';

@Component({
  selector: 'app-pokemon-cards-list',
  templateUrl: './pokemon-cards-list.component.html',
  standalone: true,
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
      error: (err: any) => console.error("Error fetching Pokemon cards", err)
    });
  }

  editItem(card: PokemonCards) {
    this.router.navigate(['/modify'], { state: { item: card } });
  }

  deleteItem(id: number) {
    this.pokemonCardsService.deleteGame(id).subscribe(() => {
      this.loadPokemonCards();
    });
  }

  goToAddItem() {
    this.router.navigate(['/modify']);
  }
}
