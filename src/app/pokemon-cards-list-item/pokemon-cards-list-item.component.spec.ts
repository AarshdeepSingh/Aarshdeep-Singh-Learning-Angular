import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardsListItemComponent } from './pokemon-cards-list-item.component';

describe('PokemonCardsListItemComponent', () => {
  let component: PokemonCardsListItemComponent;
  let fixture: ComponentFixture<PokemonCardsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
