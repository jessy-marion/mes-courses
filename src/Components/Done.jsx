import { patchDataDone } from "../apiService.js";

export default function Done({ item, APIState, setAPIState }) {
  function handleClick() {
    patchDataDone(item, APIState, setAPIState);
  }

  return (
    <div
      onClick={handleClick}
      className={
        "inline ml-3 cursor-pointer cursor-pointer text-2xl transition ease-in-out duration-150 hover:text-amber-500 hover:border-amber-500 hover:font-ex"
      }
    >
      <i className="fa-solid fa-check transition ease-in-out duration-500 hover:scale-150"></i>
    </div>
  );
}
