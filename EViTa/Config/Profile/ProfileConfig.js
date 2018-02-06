// ==UserScript==
// @name         Add Edit EViTa Config To Profile
// @namespace    http://www.mmi-consult.de
// @version      0.3
// @description  Extend EViTa Config in User Profile
// @author       Michael Siegrist
// @include      *://*collabservintegration.com/profiles/html/profileView*
// @include      *://*collabserv.com/profiles/html/profileView*
// @grant        none
// ==/UserScript==


if(typeof(dojo) != "undefined") {
    if(document.title.substring(0,5)=="EViTA"){
	require(["dojo/query", "dojo/NodeList-dom","dojo/domReady!"],  setTimeout(function(){
        dojo.place("<button class=\"lotusBtn\" title=\"EViTA Config\" hastooltip=\"dijit_Tooltip_3721\" id=\"btn_actn__evitaConfig\"> <img alt=\"\" class=\"AEMenuItemIcon_lconn_profiles_actionBar_ActionBar_0 lotusHidden\" src=\"https://justteamup.eu-de.mybluemix.net/adminautotagging?organisationId=22029399\"><a href=\"https://justteamup.eu-de.mybluemix.net/adminautotagging?organisationId=22029399\"><span>EViTA Config</span></a>  </button>","btn_actn__personCardShareFile","after");
        },1000));
  }
}