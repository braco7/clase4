import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() gameInCart: Game = { name: "", description: "", platform: "", img: "" }
  @Input() indexInput: any = 0

  constructor() { }

  ngOnInit(): void {
  }



}
