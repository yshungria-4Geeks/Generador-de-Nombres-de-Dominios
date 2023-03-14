/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "their"];

  let adj = ["great", "big", "small"];

  let noun = ["jogger", "racoon", "elephant"];

  for (let index = 0; index < pronoun.length; index++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[index] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
