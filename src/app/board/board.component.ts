import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  squares: any[];
  xIsNext: boolean;
  winner: string;
  
  constructor(){
  }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(position: number){
    if(!this.winner){
      if(!this.squares[position]){
        this.squares.splice(position, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
      let handle = this.calculateWinner();
      if (handle === null && this.squares.indexOf(null) == -1 && !this.winner){
        this.winner = "Tie!";
      }
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      for(let j = 0; j < lines[i].length; j++){
        let x = this.checkCombination('X', lines[i]);
        let o = this.checkCombination('O', lines[i]);
        if(x === 1){
          this.winner = 'Player X won the game';
        }else if(o === 1){
          this.winner = 'Player O won the game';
        }/* else if(x == 2 || o == 2){
          this.winner = 'Tie!';
        } */
      }
    }
    return null;
  }

  checkCombination(player:string, line:number[]):number{
    let count = 0;
    for(let i = 0; i < line.length; i++){
      if(this.squares[line[i]] === player){
        count++;
      }
    }
    if(count === 3){
      return 1;
    }/* else if(this.squares.indexOf(null) == -1){
      return 2;
    } */
    return 0;
  }

}
