import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonCardsService } from './service/Pokemon-Cards-service.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCardsListComponent } from "./pokemon-cards-list/pokemon-cards-list.component";
import { PokemonCardsListItemComponent } from "./pokemon-cards-list-item/pokemon-cards-list-item.component";

describe('AppComponent', () => {
  let pokemonCardsServiceSpy: jasmine.SpyObj<PokemonCardsService>;

  beforeEach(async () => {
    pokemonCardsServiceSpy = jasmine.createSpyObj('PokemonCardsService', ['getPokemonCardsById']);

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterOutlet,
        PokemonCardsListComponent,
        PokemonCardsListItemComponent
      ],
      providers: [
        { provide: PokemonCardsService, useValue: pokemonCardsServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignore unknown elements
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the correct PokemonCard property on init`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockCard = { id: 1, name: 'Starter pack', description: 'contain starter pokemon cards', price: 10 };
    pokemonCardsServiceSpy.getPokemonCardsById.and.returnValue(of(mockCard));

    app.ngOnInit();

    expect(app.PokemonCard).toEqual(mockCard);
    expect(pokemonCardsServiceSpy.getPokemonCardsById).toHaveBeenCalledWith(1);
  });

  it('should render the title correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Aarshdeep-Singh-Learning-Angular');
  });
});
