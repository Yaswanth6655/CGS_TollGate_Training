let board = ["", "", "", "", "", "", "", "", ""],
  currentPlayer = "X",
  gameActive = true;
const winCond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
document.querySelectorAll("#game div").forEach(
  (cell, i) =>
    (cell.onclick = () => {
      if (board[i] || !gameActive) return;
      board[i] = currentPlayer;
      cell.textContent = currentPlayer;
      if (winCond.some((c) => c.every((j) => board[j] === currentPlayer))) {
        document.getElementById("winner").textContent =
          currentPlayer + " Wins!";
        gameActive = false;
      } else if (!board.includes("")) {
        document.getElementById("winner").textContent = "It's a Draw!";
        gameActive = false;
      } else currentPlayer = currentPlayer === "X" ? "O" : "X";
    })
);
document.getElementById("reset").onclick = () => {
  board.fill("");
  document.querySelectorAll("#game div").forEach((c) => (c.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("winner").textContent = "";
};
