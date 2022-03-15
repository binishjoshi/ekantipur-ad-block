// ==UserScript==
// @name        Ekantipur Static AdBlock
// @namespace   Ekantipur Static AdBlock
// @match       https://ekantipur.com/*
// @grant       none
// @version     0.01
// @author      neo
// @updateURL   https://github.com/cyclonejet/ekantipur-ad-block/raw/master/ekantipur-ad-block.js
// @downloadURL https://github.com/cyclonejet/ekantipur-ad-block/raw/master/ekantipur-ad-block.js
// @description 2/16/2022, 12:18:28 AM
// ==/UserScript==


var styles = `
  .static-sponsor,
  .daraz-sponser,
  .ekans-wrapper,
  .img-fluid {
    display: none;
  }
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

var roadblock_ad = document.querySelector("#roadblock-ad");
roadblock_ad.style.display = 'none';
