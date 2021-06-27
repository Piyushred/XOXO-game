export default class GameView{

    constructor(){
        let result= document.querySelector(".result");
        result.style.visibility= "hidden";
    }

    updateBoard(game){

        this.updateTurn(game);

        let winningCombination = game.findWinningCombinations();
        let isDraw=game.isDraw();

        for(let i=0;i< game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`); //USING TIC ` to be able to use i value
            tile.classList.remove("tile-winner");
            tile.textContent= game.board[i];

            let tileType = game.board[i] == 'X'? 'tile-x':'tile-o';

            tile.innerHTML = `<span class ="${tileType}">${game.board[i] ? game.board[i]: "" }</span>`;

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
                let result= document.querySelector(".result");
                result.style.visibility= "visible";   
                let winner= document.querySelector(".result .winner");
                winner.textContent= game.turn; 
            }else if(isDraw){
                let result= document.querySelector(".result");
                result.style.visibility= "visible";   
                result.innerHTML = "This match is a DRAW!"+`
                <div class="winner"></div>
                `;
                let winner= document.querySelector(".result .winner");
                winner.textContent= "X O"; 
            }
        }        
        
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");

        playerX.classList.remove('active');
        playerO.classList.remove('active');

        if(game.turn == 'X')
            playerX.classList.add('active');
        else
            playerO.classList.add('active');
    }



}

