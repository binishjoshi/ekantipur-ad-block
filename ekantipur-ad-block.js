// ==UserScript==
// @name        Ekantipur Static AdBlock
// @namespace   Ekantipur Static AdBlock
// @match       https://ekantipur.com/*
// @grant       none
// @version     0.01
// @author      neo
// @description 2/16/2022, 12:18:28 AM
// ==/UserScript==


var styles = `
  .static-sponsor,
  .daraz-sponser,
  .ekans-wrapper {
    display: none;
  }
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
