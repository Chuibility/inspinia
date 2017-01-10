/*! ngclipboard - v1.0.0 - 2015-10-24
* https://github.com/sachinchoolur/ngclipboard
* Copyright (c) 2015 Sachin; Licensed MIT */
!function(){"use strict";angular.module("ngclipboard",[]).directive("ngclipboard",function(){return{restrict:"A",scope:{ngclipboardSuccess:"&",ngclipboardError:"&"},link:function(a,b){var c=b.attr("id");c||(b.attr("id","ngclipboard"+Date.now()),c=b.attr("id"));var d=new Clipboard("#"+c);d.on("success",function(b){a.ngclipboardSuccess({e:b})}),d.on("error",function(b){a.ngclipboardError({e:b})})}}})}();