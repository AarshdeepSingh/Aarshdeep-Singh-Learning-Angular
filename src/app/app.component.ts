import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {product} from "./project.interface";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  products: product[] = [
    {id: 1, name: 'Starter pack', description: 'contain starter pokemon cards', price: 10, image: '',rarity: 'uncommon'},//no image for now
    {id: 2, name: 'Basic pack', description: 'contain Basic pokemon cards', price: 5, image: '',rarity:'common'},
    {id: 3, name: 'Legendary pack', description: 'may contain legendary pokemon cards', price: 25, image: '',rarity: 'ultra rare'},
    {id: 4, name: 'Mythical pack', description: 'may contain mythical pokemon cards', price: 20, image: '',rarity: 'rare'},
    {id: 5, name: 'gen-1 pack', description: 'contain only gen-1 pokemon cards', price: 12, image: ''},
    {id: 6, name: 'gen-2 pack', description: 'contain only gen-2 pokemon cards', price: 12, image: ''}
  ]

}
