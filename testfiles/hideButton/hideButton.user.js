// ==UserScript==
// @name         Hide New Community
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  Prototype: Hide the Start a community Button!
// @author       Michael Siegrist
// @include      *://apps.*collabserv.com/communities/*
// @include      *://apps.collabservintegration.com/communities/*
// @grant        none
// ==/UserScript==

if(typeof(dojo) != "undefined") {
    var waitFor = function(callback, elXpath, maxInter, waitTime) {
    if(!maxInter) var maxInter = 20;  // number of intervals before expiring
    if(!waitTime) var waitTime = 100;  // 1000=1 second
    if(!elXpath) return;

    var waitInter = 0;  // current interval
    var intId = setInterval(function() {
      if (++waitInter < maxInter && !dojo.query(elXpath).length) return;
      clearInterval(intId);
      callback();
    }, waitTime);
  };
	require(["dojo/domReady!"],  function(){
		//get ID with query("#id) and add style
	   dojo.query("#createPlaceButton").style("display","none");
        });
}
