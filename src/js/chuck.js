export default class getChuck {  
  static async chuckJoke() {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
