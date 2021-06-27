export default class Game{


    constructor(){
        this.turn ="X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn=="X"){
            this.turn="O";
        }else{
            this.turn="X";
        }
    }

    makeMove(i){

        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){
            return false;
        }
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombinations();
        if(!winningCombination){
            this.nextTurn();
        }
        return true;
    }

    findWinningCombinations(){
        const winningCombinations = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[6,4,2]
        ];

        for(const combination of winningCombinations){
            const [a,b,c] = combination;

            if(this.board[a] && this.board[a] === this.board[b] && this.board[b] === this.board[c]){
                return combination;
            }
        }
        return null;

    }

    endOfGame(){
        let winningCombination = this.findWinningCombinations();

        if(winningCombination){
            return true;
        }
        return false;
    }

    isDraw(){
        for(let i=0;i<9;i++){
            if(this.board[i]==null){
                return false;
            }
        }
        return true;
    }

}