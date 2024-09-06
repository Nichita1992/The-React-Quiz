function RestartQuiz({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "dataActive" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default RestartQuiz;
