// ==UserScript==
// @name         ZingMp3DownAll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Điệp Esc
// @match        http://mp3.zing.vn/album/*
// @match        http://mp3.zing.vn/playlist/*
// @match        http://mp3.zing.vn/nghe-si/*

// @grant        none
//@run-at        document-idle
// ==/UserScript==

(function() {
    'use strict';

    var e=document.createElement('script');
    //e.setAttribute('src','http://localhost:8080/zingmp3all_full.js');
    e.setAttribute('src','http://xn--vngcip-pxa1uk94wvba.vn/tamper_monkey/app/zingmp3all.js');
    e.setAttribute('type','text/javascript');
    document.head.appendChild(e);

})();