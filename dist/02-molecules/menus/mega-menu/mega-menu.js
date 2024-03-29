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
var a=document.getElementById("toggle-expand-mobile"),b=document.getElementById("mega-nav-wrapper"),c=b.getElementsByClassName("expand-sub"),d=document.getElementById("site-header");a.addEventListener("click",function(){a.classList.toggle("toggle-expand--open"),b.classList.toggle("main-nav--open"),d.classList.toggle("active-mobile-header")});// Expose mobile sub menu on click.
for(var e=0;e<c.length;e++)c[e].addEventListener("click",function(a){var b=a.currentTarget,c=b.nextElementSibling,d=b.parentElement;b.classList.toggle("expand-sub--open"),c.classList.toggle("mega-menu--sub-open"),d.classList.toggle("mega-menu--sub-parent-open")})})();
//# sourceMappingURL=mega-menu.js.map
