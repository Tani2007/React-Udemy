import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formattingRemainingTime = (remainingTime / 1000).toFixed(2);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={dialog}>
      {userLost ? <h2>You Lost</h2> : <h2>You Win</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped timer with{" "}
        <strong>{formattingRemainingTime}seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
