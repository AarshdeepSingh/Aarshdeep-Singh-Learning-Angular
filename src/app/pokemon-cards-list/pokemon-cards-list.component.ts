import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCardsService } from '../service/Pokemon-Cards-service.service';
import { PokemonCards } from '../project.interface';
import {PokemonCardsListItemComponent} from "../pokemon-cards-list-item/pokemon-cards-list-item.component";
import {CurrencyPipe, NgClass, NgForOf, NgStyle, UpperCasePipe} from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

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
    UpperCasePipe,
    MatCardModule,
    MatButtonModule
  ],
  styleUrls: ['./pokemon-cards-list.component.css']
})
export class PokemonCardsListComponent implements OnInit {

  PokemonCardsList: PokemonCards[] = [];

  displayedColumns: string[] = ['id', 'name', 'price', 'rarity'];
  dataSource = new MatTableDataSource<PokemonCards>([
    {id: 1, name: 'Starter pack', description: 'contain starter pokemon cards', price: 10,rarity: 'uncommon', imageUrl:'https://toppng.com/uploads/preview/01-of-tag-team-pokemon-cards-115633311462spbwkyvr6.png'},
    {id: 2, name: 'Basic pack', description: 'contain Basic pokemon cards', price: 5, rarity:'common'},
    {id: 3, name: 'Legendary pack', description: 'may contain legendary pokemon cards', price: 25, rarity: 'ultra rare'},
    {id: 4, name: 'Mythical pack', description: 'may contain mythical pokemon cards', price: 20, rarity: 'rare'},
    {id: 5, name: 'gen-1 pack', description: 'contain only gen-1 pokemon cards', price: 12},
    {id: 6, name: 'gen-2 pack', description: 'contain only gen-2 pokemon cards', price: 12}
  ]);

  sortCardsByPrice() {
    this.PokemonCardsList.sort((a, b) => a.price - b.price);
  }


  constructor(private pokemonCardsService: PokemonCardsService, private router: Router) {}

  ngOnInit() {
    console.log("pokemon cards list "+this.loadPokemonCards());
    this.sortCardsByPrice();
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
