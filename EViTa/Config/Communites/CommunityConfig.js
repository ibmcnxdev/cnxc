// ==UserScript==
// @name         Add EViTa Community Config
// @namespace    http://www.mmi-consult.de
// @version      0.3
// @description  Add EViTa Community Config
// @author       You
// @include      *://apps.*collabserv.com/communities/service/html/communityview*fullpageWidgetId=Members
// @include      *://apps.*collabserv.com/communities/service*fullpageWidgetId=Members
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
				var el = document.getElementById("Members_navItem")
                reloadFn = function() {
                   window.location.reload();
                }
                el.addEventListener('click', reloadFn);
                if (dojo.byId("memberAddButtonLink")) {
                    var arra =dojo.query(".lotusFloatContent.commFocusPT");
                    dojo.forEach(arra, function(item, index){
                        if (arra[index].innerText.slice(0,5)=="EViTA"){
                            var strCLink='https://justteamup.eu-de.mybluemix.net/justsearch/config/community/' + communityActionData.communityOrgId+ '/' + communityActionData.uuid;
                            if (arra[index].lastChild.lastChild) {
							dojo.place("<a> | </a><a role=\"button\" id=\"mmicommunity\" onclick=\"parent.location='https://justteamup.eu-de.mybluemix.net/justsearch/config/community/' + communityActionData.communityOrgId+ '/' + communityActionData.uuid+ '\"';\" href=\"https://justteamup.eu-de.mybluemix.net/justsearch/config/community/communityActionData.communityOrgId/communityActionData.uuid\"\" title=\"Config\" hastooltip=\"dijit_Tooltip_2664\">Config</a>",arra[index].lastChild.lastChild,"after");
							} else
                            {
                            dojo.place("<br><a role=\"button\" id=\"mmicommunity\" onclick=\"parent.location='https://justteamup.eu-de.mybluemix.net/justsearch/config/community/' + communityActionData.communityOrgId+ '/' + communityActionData.uuid+ '\"';\" href=\"https://justteamup.eu-de.mybluemix.net/justsearch/config/community/communityActionData.communityOrgId/communityActionData.uuid\"\" title=\"Config\" hastooltip=\"dijit_Tooltip_2664\">Config</a>",arra[index].lastChild,"after");
                            }
							document.getElementById("mmicommunity").setAttribute("href",strCLink);
                    
                        }
                    });
                }
},".fn.url.commFocusML");
      } catch(e) {
          console.log("Exception occurred in CommunityConfig: " + e);
      }
   });
}