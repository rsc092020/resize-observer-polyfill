!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ResizeObserver=e():t.ResizeObserver=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(1),o=r(i);window.ResizeObserver=o["default"],e["default"]=o["default"],t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(2),o=r(i),ResizeObserver=o["default"];"function"==typeof window.ResizeObserver&&(ResizeObserver=window.ResizeObserver),e["default"]=ResizeObserver,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(3),a=n(4),c=r(a),f=n(7),l=r(f),h=new c["default"],d=new u.WeakMap,ResizeObserver=function(){function ResizeObserver(t){if(i(this,ResizeObserver),!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=new l["default"](t,h,this);d.set(this,e)}return s(ResizeObserver,null,[{key:"idleTimeout",get:function(){return h.idleTimeout},set:function(t){if("number"!=typeof t)throw new TypeError('type of "idleTimeout" value must be a number.');if(("undefined"==typeof t?"undefined":o(t))<0)throw new TypeError('"idleTimeout" value must be greater than 0.');h.idleTimeout=t}},{key:"continuousUpdates",get:function(){return h.continuousUpdates},set:function(t){if("boolean"!=typeof t)throw new TypeError('type of "continuousUpdates" value must be a boolean.');h.continuousUpdates=t}}]),ResizeObserver}();["observe","unobserve","disconnect"].forEach(function(t){ResizeObserver.prototype[t]=function(){var e;return(e=d.get(this))[t].apply(e,arguments)}}),e["default"]=ResizeObserver,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s="function"==typeof window.WeakMap&&"function"==typeof window.Map,u=function(){function t(t,e){var n=-1;return t.some(function(t,r){var i=t[0]===e;return i&&(n=r),i}),n}return s?window.WeakMap:function(){function e(){i(this,e),this.__entries__=[]}return e.prototype.get=function(e){var n=t(this.__entries__,e);return this.__entries__[n][1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype["delete"]=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e}()}(),a=function(){return s?window.Map:function(t){function e(){return i(this,e),n(this,t.apply(this,arguments))}return r(e,t),e.prototype.clear=function(){this.__entries__.splice(0,this.__entries__.length)},e.prototype.entries=function(){return this.__entries__.slice()},e.prototype.keys=function(){return this.__entries__.map(function(t){return t[0]})},e.prototype.values=function(){return this.__entries__.map(function(t){return t[1]})},e.prototype.forEach=function(t){for(var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=this.__entries__,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if(i=n.next(),i.done)break;o=i.value}var s=o;t.call(e,s[1],s[0])}},o(e,[{key:"size",get:function(){return this.__entries__.length}}]),e}(u)}();e.Map=a,e.WeakMap=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=!1;return function(){for(var r=this,i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];n!==!1&&clearTimeout(n),n=setTimeout(function(){n=!1,t.apply(r,o)},e)}}e.__esModule=!0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(5),a=r(u),c=n(6),f=r(c),l="function"==typeof window.MutationObserver,h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?50:arguments[0],n=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];i(this,t),this._idleTimeout=e,this._isCycleContinuous=n,this._cycleStartTime=0,this._isCycleActive=!1,this._isUpdateScheduled=!1,this._listenersEnabled=!1,this._mutationsObserver=null,this._observers=[],this.runUpdates=this.runUpdates.bind(this),this._onMutation=this._onMutation.bind(this),this._resolveScheduled=this._resolveScheduled.bind(this),this._continuousCycleHandler=o(this.runUpdates,100)}return t.prototype.connect=function(t){this.isConnected(t)||this._observers.push(t),this._listenersEnabled||this._addListeners()},t.prototype.disconnect=function(t){var e=this._observers,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this._listenersEnabled&&this._removeListeners()},t.prototype.isConnected=function(t){return!!~this._observers.indexOf(t)},t.prototype._updateObservers=function(){for(var t=!1,e=this._observers,n=Array.isArray(e),r=0,e=n?e:e[Symbol.iterator]();;){var i;if(n){if(r>=e.length)break;i=e[r++]}else{if(r=e.next(),r.done)break;i=r.value}var o=i;o.gatherActive(),o.hasActive()&&(t=!0,o.broadcastActive())}return t},t.prototype.runUpdates=function(){this._cycleStartTime=(0,a["default"])(),this._isCycleActive=!0,this.scheduleUpdate()},t.prototype.scheduleUpdate=function(){this._isUpdateScheduled||(this._isUpdateScheduled=!0,(0,f["default"])(this._resolveScheduled))},t.prototype._resolveScheduled=function(){var t=this._updateObservers();this._isUpdateScheduled=!1,this._isCycleActive&&(t?this.runUpdates():this._hasRemainingTime()?this.scheduleUpdate():this._endUpdates())},t.prototype._hasRemainingTime=function(){var t=(0,a["default"])()-this._cycleStartTime;return this._idleTimeout-t>0},t.prototype._endUpdates=function(){this._isCycleActive=!1,this._isCycleContinuous&&this._listenersEnabled&&this._continuousCycleHandler()},t.prototype._addListeners=function(){this._listenersEnabled||(this._listenersEnabled=!0,window.addEventListener("resize",this.runUpdates),l?(this._mutationsObserver=new MutationObserver(this._onMutation),this._mutationsObserver.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):this._isCycleContinuous=!0,this._isCycleContinuous&&this.runUpdates())},t.prototype._removeListeners=function(){this._listenersEnabled&&(window.removeEventListener("resize",this.runUpdates),this._mutationsObserver&&this._mutationsObserver.disconnect(),this._mutationsObserver=null,this._listenersEnabled=!1)},t.prototype._onMutation=function(t){var e=t.some(function(t){return"attributes"===t.type});e?this.runUpdates():this.scheduleUpdate()},s(t,[{key:"idleTimeout",get:function(){return this._idleTimeout},set:function(t){this._idleTimeout=t}},{key:"continuousUpdates",get:function(){return this._isCycleContinuous},set:function(t){l&&(this._isCycleContinuous=t,this._listenersEnabled&&t&&this.runUpdates())}}]),t}();e["default"]=h,t.exports=e["default"]},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(){return window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),t.exports=e["default"]},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(){return window.requestAnimationFrame&&"function"==typeof window.requestAnimationFrame?window.requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var o=n(3),s=n(8),u=r(s),a=n(9),c=r(a),ResizeObserver=function(){function ResizeObserver(t,e,n){if(i(this,ResizeObserver),"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this._callback=t,this._targets=new o.Map,this._activeTargets=[],this._controller=e,this._publicObserver=n}return ResizeObserver.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this._targets;e.has(t)||(e.set(t,new u["default"](t)),this._controller.isConnected(this)||this._controller.connect(this),this._controller.runUpdates())},ResizeObserver.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this._targets;e.has(t)&&(e["delete"](t),e.size||this.disconnect())},ResizeObserver.prototype.disconnect=function(){this.clearActive(),this._targets.clear(),this._controller.disconnect(this)},ResizeObserver.prototype.broadcastActive=function(){if(this.hasActive()){var t=this._publicObserver,e=this._activeTargets.map(function(t){return new c["default"](t.target,t.broadcastRect())});this.clearActive(),this._callback.call(t,e,t)}},ResizeObserver.prototype.clearActive=function(){this._activeTargets.splice(0)},ResizeObserver.prototype.hasActive=function(){return!!this._activeTargets.length},ResizeObserver.prototype.gatherActive=function(){this.clearActive();var t=this._activeTargets;this._targets.forEach(function(e){e.isActive()&&t.push(e)})},ResizeObserver}();e["default"]=ResizeObserver,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){return window.getComputedStyle(t)}function i(t){var e=t.replace("px","");return e=parseFloat(e),isNaN(e)?0:e}function o(t){return i(t.width)}function s(t){return i(t.height)}function u(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce(function(e,n){var r=t["border-"+n+"-width"];return e+i(r)},0)}function a(t){for(var e={},n=_,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var s;if(r){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var u=s,a=t["padding-"+u];e[u]=i(a)}return e}function c(t,e,n,r){return{width:t,height:e,top:n,right:t+r,bottom:e+n,left:r}}function f(t){var e=t.getBBox();return c(e.width,e.height,0,0)}function l(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p;var i=r(t),f=a(i),l=f.left+f.right,h=f.top+f.bottom,d=o(i),_=s(i);"border-box"===i.boxSizing&&(Math.round(d+l)!==e&&(d-=u(i,"left","right")+l),Math.round(_+h)!==n&&(_-=u(i,"top","bottom")+h));var v=Math.round(d+l)-e,y=Math.round(_+h)-n;return 1!==Math.abs(v)&&(d-=v),1!==Math.abs(y)&&(_-=y),c(d,_,f.top,f.left)}function h(t){return t instanceof window.SVGElement}function d(t){return h(t)?f(t):l(t)}e.__esModule=!0;var p=c(0,0,0,0),_=["top","right","bottom","left"],v=function(){function t(e){n(this,t),this.target=e,this._contentRect=p,this.broadcastWidth=0,this.broadcastHeight=0}return t.prototype.broadcastRect=function(){var t=this._contentRect;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t.prototype.isActive=function(){var t=d(this.target);return this._contentRect=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t}();e["default"]=v,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var ResizeObserverEntry=function ResizeObserverEntry(t,e){n(this,ResizeObserverEntry);var r=window.ClientRect?ClientRect.prototype:Object.prototype,i=Object.create(r,{width:{value:e.width},height:{value:e.height},top:{value:e.top},right:{value:e.right},bottom:{value:e.bottom},left:{value:e.left}});Object.defineProperties(this,{target:{value:t},contentRect:{value:i}})};e["default"]=ResizeObserverEntry,t.exports=e["default"]}])});