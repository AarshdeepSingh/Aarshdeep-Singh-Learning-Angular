import {Component, Input, input} from '@angular/core';
import {PokemonCardsListComponent} from "../pokemon-cards-list/pokemon-cards-list.component";

@Component({
  selector: 'app-pokemon-cards-list-item',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-cards-list-item.component.html',
  styleUrl: './pokemon-cards-list-item.component.css'
})
export class PokemonCardsListItemComponent {

  @Input() pokemonCard!: { id: number; name: string; description: string; imageUrl: string };
}
