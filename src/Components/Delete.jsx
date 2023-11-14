import { deleteData } from "../apiService.js";

export default function Delete({ item, APIState, setAPIState }) {
  function handleClick() {
    deleteData(item, APIState, setAPIState);
  }

  return (
    <div
      onClick={handleClick}
      className={
        "inline ml-2 cursor-pointer cursor-pointer text-2xl transition ease-in-out duration-150  hover:text-amber-500 hover:border-amber-500 hover:font-ex "
      }
    >
      <i className="fa-solid fa-xmark transition ease-in-out duration-500 hover:scale-150"></i>
    </div>
  );
}
