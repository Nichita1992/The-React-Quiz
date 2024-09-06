function Progress({ index, totalQuestions, points, totalPoints }) {
  return (
    <div>
      <header className="progress">
        <progress max={totalQuestions} value={index}></progress>
        <p>
          Question <strong>{index + 1}</strong> / {totalQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {totalPoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
