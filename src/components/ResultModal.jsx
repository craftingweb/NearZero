export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>{" "}
      </p>
      <p>
        You stopped the timer wtih <strong>X seconds left. </strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
