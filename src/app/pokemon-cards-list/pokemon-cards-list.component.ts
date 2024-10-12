import { Component } from '@angular/core';
import {PokemonCardsListItemComponent} from "../pokemon-cards-list-item/pokemon-cards-list-item.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";

interface PokemonCards {
  id: number;
  name: string;
  description: string;
  price: number;
  // optional
  rarity?: string;
}

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
  styleUrl: './pokemon-cards-list.component.css'
})

export class PokemonCardsListComponent {

  contentItems: PokemonCards[] = [
    {id: 1, name: 'Starter pack', description: 'contain starter pokemon cards', price: 10,rarity: 'uncommon'},//no image for now
    {id: 2, name: 'Basic pack', description: 'contain Basic pokemon cards', price: 5, rarity:'common'},
    {id: 3, name: 'Legendary pack', description: 'may contain legendary pokemon cards', price: 25, rarity: 'ultra rare'},
    {id: 4, name: 'Mythical pack', description: 'may contain mythical pokemon cards', price: 20, rarity: 'rare'},
    {id: 5, name: 'gen-1 pack', description: 'contain only gen-1 pokemon cards', price: 12},
    {id: 6, name: 'gen-2 pack', description: 'contain only gen-2 pokemon cards', price: 12}
  ]


   protected readonly PokemonCardsListItemComponent = PokemonCardsListItemComponent;
}
