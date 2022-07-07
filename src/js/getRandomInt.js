export default function getRandomInt() {
  let min = Math.ceil(0);
  let max = Math.floor(1622);
  return Math.floor(Math.random() * (max - min) + min);
}