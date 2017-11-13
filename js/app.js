import {Game} from "./game";

document.addEventListener('DOMContentLoaded', function(){

    let newGame = new Game();
    newGame.startGame();

    document.addEventListener('keydown', function(event){
        newGame.turnFurry(event);
    });
    let restart = document.querySelector('#over button');
    restart.addEventListener('click', function(){
        setTimeout(function(){
            window.location.reload()
        }, 500);
    });
});