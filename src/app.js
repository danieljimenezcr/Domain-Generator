/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net"];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
};
