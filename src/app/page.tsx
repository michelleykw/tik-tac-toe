import Board from "./Board";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <heaer></heaer>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    </main>
  );
}
