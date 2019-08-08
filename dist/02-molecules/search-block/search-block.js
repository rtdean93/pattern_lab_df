"use strict";/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */ // JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
// (function (Drupal) { // UNCOMMENT IF DRUPAL.
//
//   Drupal.behaviors.mainMenu = {
//     attach: function (context) {
(function(){// REMOVE IF DRUPAL.
'use strict';// Use context instead of document IF DRUPAL.
var a=document.getElementById("serach-input"),b=document.getElementById("search-wrapper"),c=document.getElementById("mobile-serach-icon-block");//search-button
//search-button
// Mobile Menu Show/Hide.
a.addEventListener("click",function(){b.classList.toggle("search-active")}),c.addEventListener("click",function(){b.classList.toggle("mobile-search-active")})})();
//# sourceMappingURL=search-block.js.map
