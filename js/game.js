import {Furry} from "./furry";
import {Coin} from "./coin";

class Game{
    constructor(){
        this.board = document.querySelector('#board').children;
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
    }
    index(x,y) {
        return x + (y * 10);
    }
    showFurry(){
        return this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    }
    showCoin(){
        return this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    hideVisibleFurry(){
        let deleteElem = document.querySelector('.furry');
        if(deleteElem !== null){
            deleteElem.classList.remove('furry');
        }
    }
    checkCoinCollision(){
        if(this.coin.x === this.furry.x && this.coin.y === this.furry.y ){
            document.querySelector('.coin').classList.remove('coin');
            this.score ++;
            document.querySelector('#score strong').innerHTML = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }

    moveFurry(){
        this.hideVisibleFurry();
        if(this.furry.direction === "right") {
            this.furry.x++;
        }else if (this.furry.direction === "down"){
            this.furry.y++;
        }else if (this.furry.direction === "left"){
            this.furry.x--;
        }else if (this.furry.direction === "up"){
            this.furry.y--;
        }

        this.checkCoinCollision();
        this.gameOver();
        this.showFurry();
    }
    startGame(){
        this.showFurry();
        this.showCoin();
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }

    turnFurry(event){
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }
    gameOver(){
        if(this.furry.x <0 || this.furry.x >9 || this.furry.y <0 || this.furry.y >9 ){
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            let theEnd = document.getElementById('over');
            theEnd.classList.remove('invisible');
            theEnd.querySelector('span strong').innerText = this.score;
        }
    }
}

export {Game};