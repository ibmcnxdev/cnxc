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
	require(["dojo/query", "dojo/NodeList-dom","dojo/domReady!"],  function(){
        dojo.place("<button class=\"lotusBtn\" title=\"EViTa Config\" hastooltip=\"dijit_Tooltip_3721\" id=\"btn_actn__evitaConfig\"> <img alt=\"\" class=\"AEMenuItemIcon_lconn_profiles_actionBar_ActionBar_0 lotusHidden\" src=\"https://www.mmi-consult.de/\"><a href=\"https://justteamup.eu-de.mybluemix.net/adminautotagging?organisationId=22029399\"><span>EViTa Config</span></a>  </button>","btn_actn__personCardShareFile","after");
        });
}