function createScoreBoard() {
  const highScoreBoard = {
    "The Best Ever": 1000000,
  };

  return highScoreBoard;
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  if (scoreBoard.hasOwnProperty(player)) {
    delete scoreBoard[player];
  }

  return scoreBoard;
}
