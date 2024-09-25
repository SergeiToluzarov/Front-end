/*! For license information please see c093f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{236:function(e,n,o){"use strict";var t=o(0),i=o(6),a=o(4),l=o(5);const r=o(508),s=(0,t.querySelectorAll)("input[data-email-suggest=on]");s.length&&(0,l.forEach)(s,(e=>{(0,i.addEventListener)(e,"blur",(()=>{r.run({email:e.value,suggested:function(n){if(n.full.length){let o=(0,t.querySelector)(e.parentNode,".form__notice");o||(o=document.createElement("p"),o.classList.add("form__notice"),e.parentNode.appendChild(o)),(0,a.removeClass)(o,"form__notice--red"),(0,a.removeClass)(o,"hidden"),o.innerHTML='Возможно вы имели в виду <a href="#">'+n.full+"</a>?";const l=(0,t.querySelector)(o,"a");(0,i.addEventListener)(l,"click",(t=>{t.preventDefault(),e.value=n.full,(0,a.removeClass)(e,"field--red"),(0,a.addClass)(o,"hidden")}))}}})}))}))},508:function(e,n,o){var t,i={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu"],run:function(e){e.domains=e.domains||i.defaultDomains,e.secondLevelDomains=e.secondLevelDomains||i.defaultSecondLevelDomains,e.topLevelDomains=e.topLevelDomains||i.defaultTopLevelDomains,e.distanceFunction=e.distanceFunction||i.sift3Distance;var n=function(e){return e},o=e.suggested||n,t=e.empty||n,a=i.suggest(i.encodeEmail(e.email),e.domains,e.secondLevelDomains,e.topLevelDomains,e.distanceFunction);return a?o(a):t()},suggest:function(e,n,o,t,i){e=e.toLowerCase();var a=this.splitEmail(e);if(o&&t&&-1!==o.indexOf(a.secondLevelDomain)&&-1!==t.indexOf(a.topLevelDomain))return!1;if(s=this.findClosestDomain(a.domain,n,i,this.domainThreshold))return s!=a.domain&&{address:a.address,domain:s,full:a.address+"@"+s};var l=this.findClosestDomain(a.secondLevelDomain,o,i,this.secondLevelThreshold),r=this.findClosestDomain(a.topLevelDomain,t,i,this.topLevelThreshold);if(a.domain){var s=a.domain,c=!1;if(l&&l!=a.secondLevelDomain&&(s=s.replace(a.secondLevelDomain,l),c=!0),r&&r!=a.topLevelDomain&&(s=s.replace(a.topLevelDomain,r),c=!0),1==c)return{address:a.address,domain:s,full:a.address+"@"+s}}return!1},findClosestDomain:function(e,n,o,t){var i;t=t||this.topLevelThreshold;var a=99,l=null;if(!e||!n)return!1;o||(o=this.sift3Distance);for(var r=0;r<n.length;r++){if(e===n[r])return e;(i=o(e,n[r]))<a&&(a=i,l=n[r])}return a<=t&&null!==l&&l},sift3Distance:function(e,n){if(null==e||0===e.length)return null==n||0===n.length?0:n.length;if(null==n||0===n.length)return e.length;for(var o=0,t=0,i=0,a=0;o+t<e.length&&o+i<n.length;){if(e.charAt(o+t)==n.charAt(o+i))a++;else{t=0,i=0;for(var l=0;l<5;l++){if(o+l<e.length&&e.charAt(o+l)==n.charAt(o)){t=l;break}if(o+l<n.length&&e.charAt(o)==n.charAt(o+l)){i=l;break}}}o++}return(e.length+n.length)/2-a},splitEmail:function(e){var n=e.trim().split("@");if(n.length<2)return!1;for(var o=0;o<n.length;o++)if(""===n[o])return!1;var t=n.pop(),i=t.split("."),a="",l="";if(0==i.length)return!1;if(1==i.length)l=i[0];else{a=i[0];for(o=1;o<i.length;o++)l+=i[o]+".";l=l.substring(0,l.length-1)}return{topLevelDomain:l,secondLevelDomain:a,domain:t,address:n.join("@")}},encodeEmail:function(e){var n=encodeURI(e);return n=n.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};e.exports&&(e.exports=i),void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t),"undefined"!=typeof window&&window.jQuery&&(jQuery.fn.mailcheck=function(e){var n=this;if(e.suggested){var o=e.suggested;e.suggested=function(e){o(n,e)}}if(e.empty){var t=e.empty;e.empty=function(){t.call(null,n)}}e.email=this.val(),i.run(e)})}}]);