// ==UserScript==
// @name         NCTDownAll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Điệp Esc
// @match        http://www.nhaccuatui.com/playlist/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var e=document.createElement('script');
    //e.setAttribute('src','http://localhost:8080/nctall_full.js');
    e.setAttribute('src','https://cdn.rawgit.com/DiepEsc/Mp3AlbumDownloadAllScript/482e4b48/nctall.js');
    e.setAttribute('type','text/javascript');
    document.head.appendChild(e);
})();