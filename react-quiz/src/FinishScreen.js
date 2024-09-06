import RestartQuiz from "./RestartQuiz";

function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.round((points * 100) / totalPoints)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <RestartQuiz dispatch={dispatch} />
    </div>
  );
}

export default FinishScreen;
