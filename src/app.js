/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("btn").addEventListener("click", generateDomain);
};

function generateDomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net"];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          let div = document.createElement("div");
          div.innerHTML = `${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`;
          document.body.appendChild(div);
        }
      }
    }
  }
}
