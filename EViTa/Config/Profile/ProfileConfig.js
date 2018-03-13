// ==UserScript==
// @name         Add Edit EViTa Config To Profile
// @namespace    http://www.mmi-consult.de
// @version      0.6
// @description  Extend EViTa Config in User Profile
// @author       Michael Siegrist
// @include      *://*collabservintegration.com/profiles/html/profileView*
// @include      *://*collabserv.com/profiles/html/profileView*
// @grant        none
// ==/UserScript==

if(typeof(dojo) != "undefined") {
    	require(["dojo/domReady!","dojo/query", "dojo/NodeList-traverse"], function(){
        try {
            // utility function to let us wait for a specific element of the page to load...
            var waitFor = function(callback, elXpath, elXpathRoot, maxInter, waitTime) {
                if(!elXpathRoot) var elXpathRoot = dojo.body();
                if(!maxInter) var maxInter = 10000;  // number of intervals before expiring
                if(!waitTime) var waitTime = 1;  // 1000=1 second
                if(!elXpath) return;
                var waitInter = 0;  // current interval
                var intId = setInterval( function(){
                    if( ++waitInter<maxInter && !dojo.query(elXpath,elXpathRoot).length) return;

                    clearInterval(intId);
                    if( waitInter >= maxInter) {
                        //console.log("**** WAITFOR ["+elXpath+"] WATCH EXPIRED!!! interval "+waitInter+" (max:"+maxInter+")");
                    } else {
                        //console.log("**** WAITFOR ["+elXpath+"] WATCH TRIPPED AT interval "+waitInter+" (max:"+maxInter+")");
                        callback();
                    }
                }, waitTime);
            };

            waitFor( function(){
			if(document.title.substring(0,5)=="EViTA"){
			  dojo.place("<a href=\"https://justteamup.eu-de.mybluemix.net/justsearch/config/global/22029399\" style=\"text-decoration:none !important;color: inherit !important;font-weight: inherit !important;\"><mmibutton class=\"lotusBtn\" title=\"EViTA Config\" hastooltip=\"dijit_Tooltip_3721\" id=\"btn_actn__evitaConfig\"> <img alt=\"\" class=\"AEMenuItemIcon_lconn_profiles_actionBar_ActionBar_0 lotusHidden\" src=\"https://apps.na.collabserv.com/connections/resources/web/com.ibm.lconn.core.styles.oneui3/images/blank.gif?etag=20180213.201733\"><span>EViTA Config</span></mmibutton></a>","AEMenu_lconn_profiles_actionBar_ActionBar_0","after");
        }
},".lotusActionBar");
      } catch(e) {
          console.log("Exception occurred in ProfileConfig: " + e);
      }
   });
}