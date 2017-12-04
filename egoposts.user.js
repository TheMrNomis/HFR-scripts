// ==UserScript==
// @name          [HFR] ego posts
// @version       0.9.3
// @namespace     homnomnom.fr
// @description   colore en bleu les posts que l'on a posté
// @icon          http://reho.st/self/8be6cfd410001113ffc0e909a807205fdb5b6751.png
// @include       https://forum.hardware.fr/*
// @noframes
// @grant         GM_info
// @grant         GM_deleteValue
// @grant         GM_getValue
// @grant         GM_listValues
// @grant         GM_setValue
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_addStyle
// @grant         GM_log
// @grant         GM_openInTab
// @grant         GM_registerMenuCommand
// @grant         GM_setClipboard
// @grant         GM_xmlhttpRequest
// ==/UserScript==

// $Rev: 1424 $

// historique :
// 0.1.0 (04/12/2017) :
// - création à partir de [HFR] ego quote par roger21

if(document.forms.namedItem("hop") && document.forms.namedItem("hop").elements.namedItem("pseudo")){
    var pseudal=document.forms.namedItem("hop").elements.namedItem("pseudo").value;
    var msgs=document.querySelectorAll("tr.message");
    for(var msg of msgs) {
        var pseudalMsg = msg.querySelector("td.messCase1 > div > b.s2").textContent;
        if(pseudalMsg.indexOf(pseudal) === 0) {
            //msg.style.backgroundColor="#ccffcc"; // vert pale
            msg.style.backgroundColor="#bdf6f6"; // bleu pale a tendence fluo
        }
    }
}
