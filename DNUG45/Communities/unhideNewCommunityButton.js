// ==UserScript==
// @name         UnHide New Community Button
// @namespace    http://www.mmi-consult.de
// @version      0.2
// @description  UnHide the new Community button
// @author       Michael Siegrist
// @include      *://*collabserv.com/communities/*
// @include      *://apps.collabservintegration.com/communities/*
// @grant        none
// ==/UserScript==



if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"],  function(){
        //UnHide "New Community Button"
        dojo.query("#createPlaceButton").style("display","inline");
        });
}

