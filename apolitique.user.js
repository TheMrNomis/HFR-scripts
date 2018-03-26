// ==UserScript==
// @name        [HFR] Apolitique
// @namespace   fr.homnomnom
// @include     https://forum.hardware.fr/*
// @exclude     https://forum.hardware.fr/message.php*
// @version     3
// @grant       none
// ==/UserScript==

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * n0m1s wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */

var msgs=document.querySelectorAll("tr.message > td.messCase2 > div:not(.toolbar)");
for(var msg of msgs) {
    msg.innerHTML = msg.innerHTML.replace(/polit(i(qu?|c|s)|o(l|n))/g, "pouet");
}
