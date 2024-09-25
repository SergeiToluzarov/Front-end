/*! For license information please see 11d8aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{223:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=t(0),l=t(6),a=t(7),d=t(4);class n{constructor(e){this._modal=e,this._modalButtons=(0,s.querySelectorAll)("[data-modal]"),this._modalClass=".modal:not(.modal--no-modal)",this._modalWideClass="modal--wide",this._body=(0,s.querySelector)("body"),this._trigger=null,this._mouseDownElement=null,this._initialize()}_initialize(){const e=this._body.dataset.modalOpenNow;e&&this.open(e),(0,a.addEventListenerAll)(this._modalButtons,"click",((e,o)=>this._onModalButtonClick(e,o))),(0,l.addEventListener)(this._modalClass,"mousedown",(e=>this._onModalMouseDown(e))),(0,l.addEventListener)(this._modalClass,"click",((e,o)=>this._onOutOfModalClick(e,o))),(0,l.addEventListener)(window,"keydown",this._onKeyDown.bind(this))}open(e){const o=(0,s.querySelector)(".js-".concat(e));if(!o)return;this.close();let t=o.dataset.classMod;t&&(this._modal.className+=" "+t),(0,d.addClass)(this._body,"show-modal"),(0,d.removeClass)(o,"hidden");const l=(0,s.querySelector)(document,".course-layout__sidebar"),a=(0,s.querySelector)(document,".js-onboard-one"),n=(0,s.querySelector)(document,".js-onboard-two");n&&l&&!(0,d.hasClass)(n,"hidden")&&!(0,d.hasClass)(l,"course-theory--collapsed")&&l.click(),a&&l&&!(0,d.hasClass)(a,"hidden")&&(0,d.hasClass)(l,"course-theory--collapsed")&&l.click();const i=(0,s.querySelector)(o,"form");if(i){const e=(0,s.querySelector)(i,"[data-focus]"),o=(0,s.querySelector)(i,"input:not([type=hidden]),textarea");e?e.focus():o&&o.focus()}else{const e=(0,s.querySelector)(o,".button"),t=(0,s.querySelector)(o,".modal__close");e&&!e.dataset.noFocus?e.focus():t&&t.focus()}o.dataset.resize&&window.dispatchEvent(new Event("resize")),this._fireModalEvent("open",e)}close(){(0,d.removeClass)(this._body,"show-modal"),this._modal.className="modal",this._trigger&&this._trigger.focus();const e=(0,s.querySelector)(this._modal,".modal__wrapper:not(.hidden)");e&&((0,d.addClass)(e,"hidden"),e.dispatchEvent(new Event("closeModal"))),this._fireModalEvent("close")}_onModalButtonClick(e,o){e&&e.preventDefault();if("close"===o.dataset.modal)this.close();else{const e=o.dataset.value;this._trigger=o,this.open(e)}}_onKeyDown(e){27===e.keyCode&&(0,d.hasClass)(this._body,"show-modal")&&(e.preventDefault(),this.close())}_onOutOfModalClick(e,o){let t=(0,d.hasClass)(this._modal,"modal--onboard-content");e.target===o&&e.target===this._mouseDownElement&&!e.target===t&&this.close()}_onModalMouseDown(e){this._mouseDownElement=e.target}_fireModalEvent(e){const o=new CustomEvent("modalAction",{detail:{modalAction:e,modalType:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}});document.dispatchEvent(o)}}o.default=n;const i=(0,s.querySelector)(".modal:not(.modal--no-modal)");if(i){window.modal=new n(i);const e=window.location.hash;if(e&&!e.includes("/")){const o=e.replace("#","");window.modal.open(o)}window.postMessage("modal.loaded")}}}]);