import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardsListComponent } from './pokemon-cards-list.component';

describe('PokemonCardsListComponent', () => {
  let component: PokemonCardsListComponent;
  let fixture: ComponentFixture<PokemonCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
