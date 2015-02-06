/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  'use strict';
  document.addEventListener('DocumentLocalized', function() { // l20n ready
    document.body.classList.remove('hidden');
    $.material.ripples();
    // document.addEventListener('deviceready', this.onDeviceReady, false); // cordova ready

    // App.init();
    var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=15WHndnmcxDgUcW-zV1l8Sg41lwBycRTY48aYHttWs9U#gid=0';
//    "https://docs.google.com/spreadsheets/d/15WHndnmcxDgUcW-zV1l8Sg41lwBycRTY48aYHttWs9U/edit?usp=sharing"
    // Load an entire sheet.
    $('#statistics').sheetrock({
      url: mySpreadsheet,
      sql: "select A,B,C,D,E"
    });
  });
}());
