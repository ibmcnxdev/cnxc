// ==UserScript==
// @name         Add Edit EViTa Config To Profile
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  Extend EViTa Config in User Profile
// @author       Michael Siegrist
// @include      *://*collabservintegration.com/profiles/html/profileView*
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
	require(["dojo/query", "dojo/NodeList-dom","dojo/domReady!"],  function(){
        dojo.place("<button class=\"lotusBtn\" title=\"EViTA Config\" hastooltip=\"dijit_Tooltip_3721\" id=\"btn_actn__evitaConfig\"> <img alt=\"\" class=\"AEMenuItemIcon_lconn_profiles_actionBar_ActionBar_0 lotusHidden\" src=\"https://justteamup.eu-de.mybluemix.net/adminautotagging?organisationId=22029399\"><a href=\"https://justteamup.eu-de.mybluemix.net/adminautotagging?organisationId=22029399\"><span>EViTA Config</span></a>  </button>","btn_actn__personCardShareFile","after");
        });
}