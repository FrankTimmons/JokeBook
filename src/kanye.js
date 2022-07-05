export default class getKanye {  
  static async kanyeQuote() {
    try {
      const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}