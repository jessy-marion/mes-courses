export default function Item({ item }) {
  console.log(item);
  return <li>{item && item.item}</li>;
}
