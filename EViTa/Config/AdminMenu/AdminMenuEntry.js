// ==UserScript==
// @name         EViTA Config into CNX Admin menu
// @namespace    https://www.mmi-consult.de
// @version      0.3
// @description  Add EViTA Global Config into CNX Admin menu
// @include		 https://*.collabserv.com/*
// @include		 *://*.collabserv.com/*
// @author       Michael.Siegrist@mmi-consult.de
// @grant        none
// ==/UserScript==



if ((document.location.pathname === '/homepage/orgadmin/orgadmin.jsp') || (document.location.pathname === '/news/web/jsp/notificationCenter/ncFlyout.jsp')) {
    //Trap page URLs which do not load DOJO
} else {
    function waitById(label) {
        this.label = '***UNKNOWN***';
        this.onlyWhenVisible = false;    
        this.onlyWhenParentVisible = false; 
        this.parentToBeVisible = ""; 

        if (label) this.label = label;
        this.do = function(callback, elXpath, maxInter, waitTime) {
            var n = this;
            if(!maxInter) maxInter = 10000;  // number of intervals before expiring
            if(!waitTime) waitTime = 100;  // 1000=1 second
            if(!elXpath) return;

            var waitInter = 0;  // current interval
            var intId = setInterval( function(){
                var theWidget = dojo.byId(elXpath);
                if (++waitInter < maxInter && !theWidget) return;
                if (waitInter >= maxInter) {
                    clearInterval(intId);
                } else {
                    //
                    if (n.onlyWhenVisible || n.onlyWhenParentVisible) {
                        let theResult = null;
                        let newElem = theWidget;
                        if (n.onlyWhenParentVisible) {
                            if ((navigator.appVersion.indexOf("Trident") != -1) || (navigator.appVersion.indexOf("Edge") != -1)) {
                                newElem = dojo.query(theWidget).closest(n.parentToBeVisible);
                                newElem = newElem[0];
                            } else {
                                    newElem = theWidget.closest(n.parentToBeVisible);
                            }
                        }
                        if (newElem) {
                            if (newElem.offsetHeight > 0) theResult = theWidget;
                        }
                        if (theResult !== null){
                            clearInterval(intId);
                            callback(theResult);
                        } else {
                            return;
                        }
                    } else {
                        clearInterval(intId);
                        callback(theWidget);
                    }
                }
            }, waitTime);
        };

    }
	function waitForDojo(label) {
        this.label = '***UNKNOWN***';
        if (label) this.label = label;
        this.do = function(callback, maxInter, waitTime) {
            var n = this;
            if(!maxInter) maxInter = 10000;  // number of intervals before expiring
            if(!waitTime) waitTime = 100;  // 1000=1 second

            var waitInter = 0;  // current interval
            var intId = setInterval(function() {
                if ((++waitInter < maxInter) && (typeof dojo === "undefined")) return;
                clearInterval(intId);
                if (waitInter >= maxInter) {
                    if (document.body.classList.contains('lotusError')) {
                    }
                    return;
                } else {
                    if (dojo.version.major >= 1 && dojo.version.minor >= 10) {
                        dojo.require("dojo.cookie");
                        require(["dojo/domReady!"], callback());
                    }
                }
            }, waitTime);
        };
    }
	var dojoAddEViTAAdminConfig = new waitForDojo('AddEViTAAdminConfig');

	dojoAddEViTAAdminConfig.do(function () {
        try {

            var giveAccess = function (bssAdminMenuWidget) {
                let logoutWidget = dojo.query("li.manageorg", bssAdminMenuWidget);
                if (logoutWidget[0]) {
                    let inviteLI = dojo.create('li', { class: 'manageorg' })
                    let getElemORG= dojo.query(".org._myorg");
                    let OrgID= getElemORG[0].href.substring(getElemORG[0].href.lastIndexOf('/')+1);
                    let inviteA = dojo.create('a', { innerHTML: 'EViTA Config', id: 'mmiglobal', class: 'manageorg', target: '_parent',  href: 'https://justteamup.eu-de.mybluemix.net/justsearch/config/global/' + OrgID,role: 'menuitem', tabindex: '0' },  inviteLI);
	                dojo.place(inviteLI, logoutWidget[0], 'before');

                } else {
                    alert('AddEViTAAdminConfig.giveAccess : strange situation. LOGOUT element not found !!!');
                }
            };

                    let waitForById = new waitById('AddEViTAAdminConfig');
                    waitForById.do(
                        function (bssAdminMenuWidget) {
                            try {
                                giveAccess(bssAdminMenuWidget);

                            } catch (ex) {
                                alert("AddEViTAAdminConfig: error granting access: " + ex);
                            }
                        }, "bss-adminMenu");
        } catch (ex) {
            alert("AddEViTAAdminConfig error: MAIN: " + ex);
            }
    });
}