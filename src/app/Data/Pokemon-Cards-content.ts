import {PokemonCards} from "../project.interface";

export const PokemonCardsList: PokemonCards[] = [
  {id: 1, name: 'Starter pack', description: 'contain starter pokemon cards', price: 10,rarity: 'uncommon'},//no image for now
  {id: 2, name: 'Basic pack', description: 'contain Basic pokemon cards', price: 5, rarity:'common'},
  {id: 3, name: 'Legendary pack', description: 'may contain legendary pokemon cards', price: 25, rarity: 'ultra rare'},
  {id: 4, name: 'Mythical pack', description: 'may contain mythical pokemon cards', price: 20, rarity: 'rare'},
  {id: 5, name: 'gen-1 pack', description: 'contain only gen-1 pokemon cards', price: 12},
  {id: 6, name: 'gen-2 pack', description: 'contain only gen-2 pokemon cards', price: 12}
];
