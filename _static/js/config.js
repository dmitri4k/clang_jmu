"use strict";
(function () {
  var settings = {};
  //@efouh: added this variable back because it is needed by gradebook.html
  settings.BOOK_NAME = "csf";
  settings.BOOK_LANG = "en";
  settings.REQ_FULL_SS = true;
  settings.BUILD_TO_ODSA = "OpenCSF/";
  settings.LOCAL_MODE = true;
  settings.NARRATION_ENABLED = true;

  window.ODSA = window.ODSA || {};
  window.ODSA.SETTINGS = settings;
}());
