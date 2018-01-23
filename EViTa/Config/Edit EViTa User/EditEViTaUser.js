// ==UserScript==
// @name         Add Edit EViTa User Config
// @namespace    http://www.mmi-consult.de
// @version      0.1
// @description  Extend EViTa Config with Edit Button
// @author       Michael Siegrist
// @Include      *://*connections*.ibm.com/manage/user/updateUser/basic/showEdit*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
     if (dojo.byId("firstName").value=="EViTa") {
           dojo.place("<input type=\"button\" class=\"lotusFormButton\" id=\"cnfPage\" onclick=\"parent.location='http://msg.mmi-consult.de/';\" value=\"Config\" aria-label=\"Move to EViTA Config\">","userAccountPage","after");
     }

})();