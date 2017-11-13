/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', function(){

    let newGame = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Game */]();
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__furry__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin__ = __webpack_require__(3);



class Game{
    constructor(){
        this.board = document.querySelector('#board').children;
        this.furry = new __WEBPACK_IMPORTED_MODULE_0__furry__["a" /* Furry */]();
        this.coin = new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */]();
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
            this.coin = new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */]();
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Furry; });
class Furry{
    constructor(x, y, direction){
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
class Coin{
    constructor(x, y){
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}



/***/ })
/******/ ]);