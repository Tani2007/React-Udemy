import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
export default function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className=" backdrop:bg-stone-900/90    rounded-lg bg-gradient-to-tr from-stone-400 to-stone-200 font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4"
      ref={dialog}
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
