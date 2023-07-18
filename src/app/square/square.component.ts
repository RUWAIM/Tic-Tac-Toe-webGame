import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit{

  constructor(public gameseverice: GameService){ }

@Input() square: any;

  ngOnInit(): void {

  }

  changePlayer(){
    this.gameseverice.isGameRunning = true;

    if(this.gameseverice.isGameRunning && this.square.state === null){
      this.square.state = this.gameseverice.activePlayer;
      this.gameseverice.changePlayerTurn(this.square);
    }
  }
}
