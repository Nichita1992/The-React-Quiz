function NextButton({ answer, dispatch, index, totalQuestions }) {
  if (index < totalQuestions - 1) {
    return (
      <div>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        )}
      </div>
    );
  }
  if ((index = totalQuestions - 1)) {
    return (
      <div>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finished" })}
          >
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default NextButton;
