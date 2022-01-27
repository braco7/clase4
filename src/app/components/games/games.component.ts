import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";

export interface Game {
  name: string,
  description: string,
  platform: string,
  img: string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  items: Game[] = [];
  carrito: Game[] = [];

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.items = this.gamesService.getData();
  }


  addCarrito(element: Game) {
    //console.log("se agrego este item al carrito", element);
    this.carrito.push(element);
  }

  gameInCart: Game = this.gamesService.getGame(this.carrito)

}
