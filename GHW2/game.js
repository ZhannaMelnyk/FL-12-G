const boardSize = 15;
var board = document.getElementById('board');
for (let i = 0; i <= boardSize + 1; i++) {
  var row = document.createElement('tr');
  board.appendChild(row);
  switch (i) {
    case 0:
      row.classList.add('top-side');
      break;
    case 1:
      row.classList.add('first-row');
      break;
    case boardSize:
      row.classList.add('last-row');
      break;
    case boardSize + 1:
      row.classList.add('bottom-side');
      break;
    default:
      row.classList.add('inner-row');
  }
  for (let j = 0; j <= boardSize + 1; j++) {
    var cell = document.createElement('td');
    switch (j) {
      case 0:
        cell.classList.add('left-side');
        break;
      case 1:
        cell.classList.add('first-cell');
        break;
      case boardSize:
        cell.classList.add('last-cell');
        break;
      case boardSize + 1:
        cell.classList.add('right-side');
        break;
      default:
        cell.classList.add('inner-cell');
    }
    row.appendChild(cell);
  }
}