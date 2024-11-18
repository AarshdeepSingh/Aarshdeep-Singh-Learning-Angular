import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCardsService } from '../service/Pokemon-Cards-service.service';
import { PokemonCards } from '../project.interface';
import {PokemonCardsListItemComponent} from "../pokemon-cards-list-item/pokemon-cards-list-item.component";
import {CurrencyPipe, NgClass, NgForOf, NgStyle, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pokemon-cards-list',
  templateUrl: './pokemon-cards-list.component.html',
  standalone: true,
  imports: [
    PokemonCardsListItemComponent,
    NgClass,
    NgStyle,
    CurrencyPipe,
    NgForOf,
    UpperCasePipe
  ],
  styleUrls: ['./pokemon-cards-list.component.css']
})
export class PokemonCardsListComponent implements OnInit {

  PokemonCardsList: PokemonCards[] = [];

  constructor(private pokemonCardsService: PokemonCardsService, private router: Router) {}

  ngOnInit() {
    console.log("pokemon cards list "+this.loadPokemonCards());
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
