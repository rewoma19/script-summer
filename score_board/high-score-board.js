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

function updateScore(scoreBoard, player, points) {
  for (let key in scoreBoard) {
    if (key === player) {
      scoreBoard[player] += points;
    }
  }

  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }

  return scoreBoard;
}
