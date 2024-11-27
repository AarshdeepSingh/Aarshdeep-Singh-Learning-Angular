import {Component, Input, OnInit} from '@angular/core';
import {PokemonCardsListComponent} from "../pokemon-cards-list/pokemon-cards-list.component";
import {PokemonCards} from "../project.interface";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-pokemon-cards-list-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './pokemon-cards-list-item.component.html',
  styleUrl: './pokemon-cards-list-item.component.css'
})
export class PokemonCardsListItemComponent implements OnInit{

  @Input() pokemonCards!: PokemonCards;

  constructor() {
  }
  ngOnInit(): void {
    console.log('Game item',this.pokemonCards);
  }
}
