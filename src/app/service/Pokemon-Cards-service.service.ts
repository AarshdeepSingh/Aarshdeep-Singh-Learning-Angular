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

  addPokemonCard(newCard: PokemonCards): Observable<PokemonCards[]> {
    newCard.id = this.PokemonCards.length ? Math.max(...this.PokemonCards.map(card => card.id)) + 1 : 1;
    this.PokemonCards.push(newCard);
    return of(this.PokemonCards); // Return the updated list
  }

  updatePokemonCard(updatedCard: PokemonCards): Observable<PokemonCards[] | undefined> {
    const index = this.PokemonCards.findIndex(card => card.id === updatedCard.id);
    if (index !== -1) {
      this.PokemonCards[index] = updatedCard;
      return of(this.PokemonCards); // Return the updated list
    }
    return of(undefined);
  }


  deleteGame(id: number): Observable<PokemonCards[]> {
    this.PokemonCards = this.PokemonCards.filter(item => item.id !== id);
    return of(this.PokemonCards);
  }
}
