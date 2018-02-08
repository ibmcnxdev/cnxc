// ==UserScript==
// @name         Hide New Community Button 
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  Hide the Start a community Button!
// @author       Michael Siegrist
// @include      *://apps.*collabserv.com/communities/*
// @include      *://apps.collabservintegration.com/communities/*
// @grant        none
// ==/UserScript==

if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"],  function(){
		//get ID with query("#id) and add style
	   dojo.query("#createPlaceButton").style("display","none");
        });
}
