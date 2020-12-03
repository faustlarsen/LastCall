export default class User {
  constructor() {
    this.beersLiked = [];
  }

  //method to find beer for user
  showBeerResult(color, ibu, clarity, flavor, beers) {

    for (let i = 0; i < beers.beersArray.length; i++) {
      let matching = 0;
      if (color === beers.beersArray[i].color) {
        matching++;
      }
      if (ibu === beers.beersArray[i].ibu) {
        matching++;
      }
      if (flavor === beers.beersArray[i].flavor) {
        matching++;
      }
      if (clarity === beers.beersArray[i].clarity) {
        matching++;
      }
      console.log(matching);
      if (matching >= 2) {
        this.beersLiked.push(beers.beersArray[i]);
      }
    }
    console.log(this.beersLiked);
  }

}




// this.beerLiked.push(beers.beersArray[i]);
//color, ibu, flavor, clarity - priorities
//color, ibu, clarity, flavor - answers
// 5, 3, 1, 700 - user answer
// 4, 1, 2, 600 - our beer1 beers.beersArray[0]
// 5, 3, 2, 700 - our beer2 beers.beersArray[1]
// 5, 3, 1, 700 - our beer3 beers.beersArray[2]
// beers.beersArray[2]