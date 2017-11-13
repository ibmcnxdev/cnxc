// ==UserScript==
// @name         UnHide New Community
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  UnHide the new Community button
// @author       You
// @include      *://apps.*collabserv.com/communities/*
// @include      *://apps.collabservintegration.com/communities/*
// @grant        none
// ==/UserScript==



if(typeof(dojo) != "undefined") {
    var waitFor = function(callback, elXpath, maxInter, waitTime) {
    if(!maxInter) var maxInter = 2000;  // number of intervals before expiring
    if(!waitTime) var waitTime = 1;  // 1000=1 second
    if(!elXpath) return;

    var waitInter = 0;  // current interval
    var intId = setInterval(function() {
      if (++waitInter < maxInter && !dojo.query(elXpath).length) return;
      clearInterval(intId);
      callback();
    }, waitTime);
  };
	require(["dojo/domReady!"],  function(){
        //UnHide "New Community Button"
        dojo.query("#createPlaceButton").style("display","inline");
        });
}

