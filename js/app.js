console.log("hello");

class Furry{
    constructor(x, y, direction, board, furry, coin){
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }
}

class Coin{
    constructor(x, y){
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game{
    constructor(board, furry, coin, score, index){
        this.board = document.querySelector('#board').children;
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function(x,y) {
            return x + (y * 10);
        }
    }
    showFurry(){
        return this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    }
    showCoin(){
        return this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');

    }
}
let game1 = new Game();
game1.showFurry();
game1.showCoin();