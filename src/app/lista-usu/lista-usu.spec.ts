import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsu } from './lista-usu';

describe('ListaUsu', () => {
  let component: ListaUsu;
  let fixture: ComponentFixture<ListaUsu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUsu],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
