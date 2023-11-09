import Input from "./Input.jsx";
import Items from "./Items.jsx";

export default function Container() {
  return (
    <div className={"bg-amber-100 p-28 shadow-lg"}>
      <h1>Mes Courses</h1>
      <Input />
      <Items />
    </div>
  );
}
