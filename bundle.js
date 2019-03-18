!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var r=30,s=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.xPos=t*r,this.yPos=i*r,this.value=n,this.open=!1,this.flagged=!1,this.img1=new Image,this.img1.src="images/slytherin_banner.png",this.img2=new Image,this.img2.src="images/ravenclaw_banner.png",this.img3=new Image,this.img3.src="images/hufflepuff_banner.png",this.img4=new Image,this.img4.src="images/gryffindor_banner.png",this.banners=[this.img1,this.img2,this.img3,this.img4],this.deathEater=new Image,this.deathEater.src="images/death_eater.png"}var t,i,s;return t=e,(i=[{key:"draw",value:function(e){e.fillStyle="rgb(229, 199, 160)",e.fillRect(this.xPos,this.yPos,r,r),e.strokeStyle="rgb(69, 18, 1)",e.strokeRect(this.xPos,this.yPos,r,r)}},{key:"clicked",value:function(e,t,i){return i.beginPath(),i.moveTo(this.xPos+1,this.yPos+1),i.lineTo(this.xPos+r-1,this.yPos+1),i.lineTo(this.xPos+r-1,this.yPos+r-1),i.lineTo(this.xPos+1,this.yPos+r-1),i.closePath(),i.isPointInPath(e,t)}},{key:"revealSquare",value:function(e){var t=this;console.log(this.value),this.left=this.xPos+15,this.right=this.xPos+15,window.requestAnimationFrame(function(){return t.animateOpen(e)}),this.open=!0}},{key:"toggleFlag",value:function(e){this.flagged?(e.clearRect(this.xPos,this.yPos,r,r),e.fillStyle="rgb(229, 199, 160)",e.fillRect(this.xPos,this.yPos,r,r),e.strokeStyle="rgb(69, 18, 1)",e.strokeRect(this.xPos,this.yPos,r,r),this.flagged=!1):(this.flag=this.banners[Math.floor(Math.random()*this.banners.length)],e.drawImage(this.flag,this.xPos+5,this.yPos+2,r-10,r-4),this.flagged=!0)}},{key:"setOpen",value:function(){this.open=!0}},{key:"hasMine",value:function(){return-1==this.value}},{key:"animateOpen",value:function(e){var t=this;this.right<=this.xPos+r&&(window.requestAnimationFrame(function(){return t.animateOpen(e)}),e.clearRect(this.xPos,this.yPos,r,r),e.strokeStyle="rgb(69, 18, 1)",e.strokeRect(this.xPos,this.yPos,r,r),this.hasMine()&&e.drawImage(this.deathEater,this.xPos+5,this.yPos+2,r-10,r-4),e.fillStyle="rgb(229, 199, 160)",e.fillRect(this.right,this.yPos,this.xPos+r-this.right,r),e.strokeStyle="rgb(69, 18, 1)",e.strokeRect(this.right,this.yPos,this.xPos+r-this.right,r),this.right+=1,e.fillRect(this.xPos,this.yPos,this.left-this.xPos,r),e.strokeStyle="rgb(69, 18, 1)",e.strokeRect(this.xPos,this.yPos,this.left-this.xPos,r),this.left-=1)}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.grid=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],this.mines=[]}var t,i,n;return t=e,(i=[{key:"draw",value:function(e){this.placeMines();for(var t=0;t<256;t++){var i=t%16,n=Math.floor(t/16);if(!this.grid[i][n]){var r=this.getValue(i,n);this.grid[i][n]=new s(i,n,r)}}for(var a=0;a<this.grid.length;a++)for(var o=0;o<this.grid.length;o++)this.grid[a][o].draw(e)}},{key:"placeMines",value:function(){for(;this.mines.length<40;){for(var e=Math.floor(16*Math.random()),t=Math.floor(16*Math.random()),i=!1,n=0;n<this.mines.length;n++)if(this.mines[n][0]==e&&this.mines[n][1]==t){i=!0;break}i||(this.mines.push([e,t]),this.grid[e][t]=new s(e,t,-1))}console.log(this.mines)}},{key:"getValue",value:function(e,t){var i=this,n=0;return o.forEach(function(r){if(i.validPos(e+r[0],t+r[1])){var s=i.grid[e+r[0]][t+r[1]];s&&-1==s.value&&n++}}),n}},{key:"validPos",value:function(e,t){return e>=0&&e<16&&t>=0&&t<16}},{key:"findClickedSquare",value:function(e,t,i,n){var r=!1;return this.grid.forEach(function(s){s.forEach(function(s){s.clicked(e,t,n)&&!s.open&&(0!=i||s.flagged?2==i&&s.toggleFlag(n):(s.revealSquare(n),s.hasMine()&&(r=!0)))})}),r}},{key:"revealMines",value:function(e){var t=this,i=0;this.mines.forEach(function(n){var r=n[0],s=n[1];t.grid[r][s].open||t.grid[r][s].flagged||(setTimeout(function(){return t.grid[r][s].revealSquare(e)},100+i),i+=100)})}},{key:"setSquaresOpen",value:function(){this.grid.forEach(function(e){e.forEach(function(e){e.open||e.setOpen()})})}}])&&a(t.prototype,i),n&&a(t,n),e}();function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.board=new h,this.gameOver=!1}var t,i,n;return t=e,(i=[{key:"draw",value:function(e){this.board.draw(e)}},{key:"handleEvent",value:function(e,t,i){var n,r=e.pageX-t.offsetLeft,s=e.pageY-t.offsetTop;n="click"==e.type?0:2,this.gameOver=this.board.findClickedSquare(r,s,n,i),this.gameOver&&this.endGame(i)}},{key:"endGame",value:function(e){this.board.revealMines(e),this.board.setSquaresOpen()}}])&&l(t.prototype,i),n&&l(t,n),e}();document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("canvas");e.width=480,e.height=480;var t=e.getContext("2d"),i=new u;i.draw(t),e.addEventListener("click",function(n){i.handleEvent(n,e,t)},!1),e.addEventListener("contextmenu",function(n){n.preventDefault(),i.handleEvent(n,e,t)},!1)})}]);
//# sourceMappingURL=bundle.js.map