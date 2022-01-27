import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput: Game = { name: "", description: "", platform: "", img: "" };
  @Input() indexInput: number = 0;
  @Output() selectGame: EventEmitter<any>;


  constructor() {
    this.selectGame = new EventEmitter();
  }

  ngOnInit(): void {
  }

  buyGame() {
    //console.log(this.dataInput);
    this.selectGame.emit(this.dataInput);
  }


}
