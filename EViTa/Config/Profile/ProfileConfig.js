// ==UserScript==
// @name         Add Edit EViTa Config To Profile
// @namespace    http://www.mmi-consult.de
// @version      0.5
// @description  Extend EViTa Config in User Profile
// @author       Michael Siegrist
// @include      *://*collabservintegration.com/profiles/html/profileView*
// @include      *://*collabserv.com/profiles/html/profileView*
// @grant        none
// ==/UserScript==


if(typeof(dojo) != "undefined") {
    if(document.title.substring(0,5)=="EViTA"){
	require(["dojo/query", "dojo/NodeList-dom","dojo/domReady!"],  setTimeout(function(){
		   dojo.place("<a href=\"https://justteamup.eu-de.mybluemix.net/justsearch/config/global/22029399\" style=\"text-decoration:none !important;color: inherit !important;font-weight: inherit !important;\"><mmibutton class=\"lotusBtn\" title=\"EViTA Config\" hastooltip=\"dijit_Tooltip_3721\" id=\"btn_actn__evitaConfig\"> <img alt=\"\" class=\"AEMenuItemIcon_lconn_profiles_actionBar_ActionBar_0 lotusHidden\" src=\"https://apps.na.collabserv.com/connections/resources/web/com.ibm.lconn.core.styles.oneui3/images/blank.gif?etag=20180213.201733\"><span>EViTA Config</span></mmibutton></a>","AEMenu_lconn_profiles_actionBar_ActionBar_0","after");
        },3000));
  }
}