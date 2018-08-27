// ==UserScript==
// @name         OpenNewWindowSearch
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  Open Search Results in new Windows
// @author       Urs Meli
// @include      https://*.collabserv*.com/search/*
// @include      *://*.collabserv.com/search/*
// @grant        none
// ==/UserScript==

if (typeof (Tools) == "undefined") {
    var Tools = {
        defaultWaitTime: 100,
        debugEnabled: false,
        maxLoopCount: 300,
        waitFor: function (callback, elXpath, elXpathRoot, maxInter, waitTime) {
            Tools.debug("wait For called");
            if (!elXpathRoot) var elXpathRoot = dojo.body();
            if (!maxInter) var maxInter = 10000;  // number of intervals before expiring
            if (!waitTime) var waitTime = Tools.defaultWaitTime;  // 1000=1 second
            if (!elXpath) return;
            var waitInter = 0;  // current interval
            var intId = setInterval(function () {
                if (++waitInter < maxInter && !dojo.query(elXpath, elXpathRoot).length) return;

                clearInterval(intId);
                if (waitInter >= maxInter) {
                    Tools.debug("**** WAITFOR [" + elXpath + "] WATCH EXPIRED!!! interval " + waitInter + " (max:" + maxInter + ")");
                } else {
                    Tools.debug("**** WAITFOR [" + elXpath + "] WATCH TRIPPED AT interval " + waitInter + " (max:" + maxInter + ")");
                    callback();
                }
            }, waitTime);
        },

        fireClick: function (element) {
            Tools.debug("Clicking on element ");
            if (element == undefined) { return };
            let ownerDoc = element.ownerDocument;
            if (ownerDoc == undefined) {
                Tools.warn("Click: owner doc not found");
                return;
            }
            let myEvent = ownerDoc.createEvent('MouseEvents');
            if (myEvent == undefined) {
                Tools.warn("MyEvent is nohting");
                return;
            }
            try {
                myEvent.initEvent('click', true, true);
                myEvent.synthetic = true;
                element.dispatchEvent(myEvent, true);
                Tools.debug("Clicker finished");
            }
            catch (e) {
                Tools.warn(e.message);
            }
        },
        debug: function (msg) {
            if (!Tools.debugEnabled) { return; }
            console.debug(msg);

        },
        log: function (msg) {
            if (!Tools.debugEnabled) { return; }
            console.log(msg);
        },
        warn: function (msg) {
            console.warn(msg);
        },
        error: function (msg) {
            console.error(msg);
        },

        updateResults: function () {
            var results = dojo.query(".icSearchMainAction");
            if (results != undefined) {
                dojo.forEach(results, function (result) {
                    if (dojo.getAttr(result, "target") != "_blank") {
                        dojo.setAttr(result, "target", "_blank");
                    }
                });
            }

            results = dojo.query(".lconnSearchBookmarkUrl");
            if (results != undefined) {
                dojo.forEach(results, function (result) {
                    if (dojo.getAttr(result, "target") != "_blank") {
                        dojo.setAttr(result, "target", "_blank");
                    }
                });
            }
        },
        initListener: function () {
            observer = new MutationObserver(function (mutations) {
                Tools.updateResults();
                Tools.debug("Number of mutations " + mutations.length);
            });
            var config = { childList: true };
            observer.observe(dojo.byId("contentContainer_results"), config);

        }


    };
    if (typeof (dojo) != "undefined") {
        Tools.waitFor(Tools.initListener, "#contentContainer_results");
        Tools.waitFor(Tools.updateResults, "#contentContainer_results_View");
    }
}