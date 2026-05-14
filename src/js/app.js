import json from "./parser.js";
import read from "./reader.js";

export class GameSavingLoader {
  static load() {
    return read().then(data => {
      return json(data)
    })
  }
}

// GameSavingLoader.load().then((saving) => {
//   // saving объект класса GameSaving
// }, (error) => {
//   // ...
// });