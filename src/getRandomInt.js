export function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(29,780);
    return Math.floor(Math.random() * (max - min) + min);
}
let index = getRandomInt();
let output = data.results[index].Joke;

