import { Injectable } from "@angular/core";
import { PokemonCardsList } from "../Data/Pokemon-Cards-content";
import { of, Observable } from "rxjs";
import { PokemonCards } from "../project.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonCardsService {
  private PokemonCards: PokemonCards[] = PokemonCardsList;

  constructor() {}

  getPokemonCards(): Observable<PokemonCards[]> {
    return of(this.PokemonCards);
  }

  getPokemonCardsById(id: number): Observable<PokemonCards | undefined> {
    const foundCard = this.PokemonCards.find(item => item.id === id);
    return of(foundCard);
  }

  deleteGame(id: number): Observable<PokemonCards[]> {
    this.PokemonCards = this.PokemonCards.filter(item => item.id !== id);
    return of(this.PokemonCards);
  }
}
