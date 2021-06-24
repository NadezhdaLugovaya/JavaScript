let gameBoard = {
  cells: [],
  width: 0,
  height: 0,
  gameFinished: false,
}

const BOARD =["8wbwbwbwb",
              "7bwbwbwbw",
              "6wbwbwbwb",
              "5bwbwbwbw",
              "4wbwbwbwb",
              "3bwbwbwbw",
              "2wbwbwbwb",
              "1bwbwbwbw",
              " ABCDEFGH"];
const whiteBoard = ["         ",
                    "         ",
                    "         ",
                    "         ",
                    "         ",
                    "         ",
                    " pppppppp",
                    " RNBQKBNR",
                    "         "] 

const blackBoard = [" RNBQKBNR",
                    " pppppppp",
                    "         ",
                    "         ",
                    "         ",
                    "         ",
                    "         ",
                    "         ",
                    "         "] 

gameBoard.init = function(template, templateWhite, templateBlack){
  this.height = template.length;
  this.width = template[0].length;
  this.cells = [];
  this.el = document.getElementById('board');
  this.el.style.width = this.width * 1.1 + 1.1 + 'em';
  for (let j = 0; j < this.height; j++){
    this.cells.push([]);
    for (let i = 0; i < this.width; i++){
      this.cells[j].push({});
      let el = document.createElement('div');
      el.classList.add('cell');
      this.cells[j][i].el = el;
      switch(template[j][i]){
        case 'b':
          this.cells[j][i].type = 'Black';
          el.classList.add('black');
          break;
        case 'w':
          this.cells[j][i].type = 'White';
          el.classList.add('white');
          break;
        default:
          this.cells[j][i].type = 'Coord';
          el.innerText = template[j][i];
      }
      switch(templateWhite[j][i]){
        case 'R':
           el.innerText = 'Л';
          el.classList.add('white_shapes');
          break;
        case 'N':
          el.innerText = 'К';
          el.classList.add('white_shapes');
          break;
        case 'B':
          el.innerText = 'С';
          el.classList.add('white_shapes');
          break;
        case 'Q':
          el.innerText = 'Ф';
          el.classList.add('white_shapes');
          break;
        case 'K':
          el.innerText = 'Кр';
          el.classList.add('white_shapes');
          break;
        case 'p':
          el.innerText = 'п';
          el.classList.add('white_shapes');
          break;
      }
      switch(templateBlack[j][i]){
        case 'R':
          el.innerText = 'Л';
          el.classList.add('black_shapes');
          break;
        case 'N':
          el.innerText = 'К';
          el.classList.add('black_shapes');
          break;
        case 'B':
          el.innerText = 'С';
          el.classList.add('black_shapes');
          break;
        case 'Q':
          el.innerText = 'Ф';
          el.classList.add('black_shapes');
          break;
        case 'K':
          el.innerText = 'Кр';
          el.classList.add('black_shapes');
          break;
        case 'p':
          el.innerText = 'п';
          el.classList.add('black_shapes');
          break;
      }
    this.el.appendChild(el);
    }
  }
  this.gameFinished = false;
}
gameBoard.init(BOARD, whiteBoard, blackBoard);