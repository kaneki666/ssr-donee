(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[13],{2036:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return r(e,t),e}(Error);function i(t,e){if(!t)throw new o(e)}},2037:function(t,e,n){"use strict";function r(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}n.d(e,"a",(function(){return r}))},2038:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(1),o=n.n(r),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function c(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,c=e.iconFillColor,u=e.round,l=e.size,f=a(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",i({viewBox:"0 0 64 64",width:l,height:l},f),u?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),o.a.createElement("path",{d:t.path,fill:c}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}},2039:function(t,e,n){"use strict";var r=n(1),o=n.n(r),i=n(2046),a=n.n(i),c=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},l=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function c(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},f=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},p=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},d=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},h=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function y(t,e,n){var r=e.height,o=e.width,i=s(e,["height","width"]),a=u({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(t){console.error(t)}}),1e3);return c}var w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,f=void 0===l?550:l;y(t,u({height:i,width:f},"windowCenter"===c?d(f,i):h(f,i)),r)},e.handleClick=function(t){return l(e,void 0,void 0,(function(){var e,n,r,o,i,a,c,u,l,s;return f(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,u=e.opts,l=o(a,u),r?[2]:(t.preventDefault(),n?(s=n(),p(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(l),i&&i(t,l),[2]}}))}))},e}return c(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,i=t.disabledStyle,c=t.forwardedRef,l=(t.networkLink,t.networkName),f=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),p=t.style,d=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,s(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=a()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),y=u(u(f?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},p),r&&i);return o.a.createElement("button",u({},d,{"aria-label":d["aria-label"]||l,className:h,onClick:this.handleClick,ref:c,style:y}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(r.Component),b=w,v=function(){return v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},v.apply(this,arguments)};e.a=function(t,e,n,i){function a(r,a){var c=n(r),u=v({},r);return Object.keys(c).forEach((function(t){delete u[t]})),o.a.createElement(b,v({},i,u,{forwardedRef:a,networkName:t,networkLink:e,opts:n(r)}))}return a.displayName="ShareButton-"+t,Object(r.forwardRef)(a)}},2090:function(t,e,n){"use strict";var r=n(2036),o=n(2037),i=n(2039);var a=Object(i.a)("twitter",(function(t,e){var n=e.title,i=e.via,a=e.hashtags,c=void 0===a?[]:a,u=e.related,l=void 0===u?[]:u;return Object(r.a)(t,"twitter.url"),Object(r.a)(Array.isArray(c),"twitter.hashtags is not an array"),Object(r.a)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+Object(o.a)({url:t,text:n,via:i,hashtags:c.length>0?c.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});e.a=a},2091:function(t,e,n){"use strict";var r=n(2038),o=Object(r.a)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});e.a=o},2092:function(t,e,n){"use strict";var r=n(2036),o=n(2037),i=n(2039);var a=Object(i.a)("facebook",(function(t,e){var n=e.quote,i=e.hashtag;return Object(r.a)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Object(o.a)({u:t,quote:n,hashtag:i})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});e.a=a},2093:function(t,e,n){"use strict";var r=n(2038),o=Object(r.a)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});e.a=o},2094:function(t,e,n){"use strict";var r=n(2036),o=n(2037),i=n(2039);var a=Object(i.a)("whatsapp",(function(t,e){var n=e.title,i=e.separator;return Object(r.a)(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+Object(o.a)({text:n?n+i+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400});e.a=a},2095:function(t,e,n){"use strict";var r=n(2038),o=Object(r.a)({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});e.a=o},2107:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var l=i[u];if(!c(l))return!1;var f=t[l],s=e[l];if(!1===(o=n?n.call(r,f,s,l):void 0)||void 0===o&&f!==s)return!1}return!0}},2155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.clone=function(t){var e=t.title,n=t.description,r=t.base,o=t.canonical,i=t.meta,a=t.link,c=t.auto;try{return JSON.parse(JSON.stringify({title:e,description:n,base:r,canonical:o,meta:i,link:a,auto:c}))}catch(u){return{}}},e.defaults=function t(e,n){return Object.keys(n).reduce((function(o,i){return e.hasOwnProperty(i)?"object"===r(e[i])&&!Array.isArray(e[i])&&e[i]&&t(e[i],n[i]):e[i]=n[i],e}),e)},e.forEach=function(t,e){t&&t.length&&Array.prototype.slice.call(t).forEach(e)}},2303:function(t,e){e.__esModule=!0,e.default={body:'<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z" fill="currentColor"/>',width:1024,height:1024}},2304:function(t,e){e.__esModule=!0,e.default={body:'<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" fill="currentColor"/>',width:1024,height:1024}},2305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.render=v;var i=n(1),a=s(i),c=s(n(15)),u=s(n(2306)),l=n(2155),f=n(2307);function s(t){return t&&t.__esModule?t:{default:t}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function h(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r="link"===t?"href":"content";return Object.keys(e).forEach((function(o){var i=e[o];"string"!==typeof i?Object.keys(i).forEach((function(e){(Array.isArray(i[e])?i[e]:[i[e]]).forEach((function(i){var a;null!==i&&n.push((y(a={tagName:t},o,e),y(a,r,i),a))}))})):n.push(y({tagName:t},o,i))})),n}function b(t){return[].concat(w("meta",t.meta),w("link",t.link))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=0,n=[];function r(t){var n=t.tagName,r=h(t,["tagName"]);return"meta"===n?a.default.createElement("meta",o({},r,{key:e++,"data-rdm":!0})):"link"===n?a.default.createElement("link",o({},r,{key:e++,"data-rdm":!0})):null}return t.title&&n.push(a.default.createElement("title",{key:e++},t.title)),b(t).reduce((function(t,e){return t.push(r(e)),t}),n)}var O=function(t){function e(){return p(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this.props.children,e=a.default.Children.count(t);return 1===e?a.default.Children.only(t):e?a.default.createElement("div",null,this.props.children):null}}]),e}(i.Component);O.propTypes={title:c.default.oneOfType([c.default.string,c.default.func]),description:c.default.oneOfType([c.default.string,c.default.func]),canonical:c.default.oneOfType([c.default.string,c.default.func]),base:c.default.string,meta:c.default.objectOf(c.default.oneOfType([c.default.string,c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))])),link:c.default.objectOf(c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))),auto:c.default.objectOf(c.default.bool)};var m=(0,u.default)((function(t){for(var e={},n={title:void 0,description:void 0,canonical:void 0},r=!0,o=function(){r=t[i].hasOwnProperty("extend");var o=t[i],a=(0,l.clone)(t[i]);["title","description","canonical"].forEach((function(t){o.hasOwnProperty(t)&&("function"===typeof o[t]?n[t]=o[t](n[t]):void 0===n[t]&&(n[t]=o[t]))})),(0,l.defaults)(e,a)},i=t.length-1;r&&i>=0;i--)o();return"string"===typeof n.title&&(e.title=n.title),"string"===typeof n.description&&(0,l.defaults)(e,{meta:{name:{description:n.description}}}),"string"===typeof n.canonical&&(0,l.defaults)(e,{link:{rel:{canonical:n.canonical}}}),e.auto&&e.auto.ograph&&function(t){t.meta||(t.meta={});t.meta.property||(t.meta.property={});var e=t.meta.property;e&&(t.title&&!e["og:title"]&&(e["og:title"]=t.title),t.hasOwnProperty("description")&&!e["og:description"]&&(e["og:description"]=t.description),t.hasOwnProperty("canonical")&&!e["og:url"]&&(e["og:url"]=t.canonical))}(e),e}),(function(t){f.canUseDOM&&("string"===typeof t.title&&(document.title=t.title),(0,f.insertDocumentMeta)(b(t)))}))(O);m.renderAsReact=function(){return v(m.rewind())},e.default=m},2306:function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t.default:t}var o=n(1),i=r(o),a=r(n(2107));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!==typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,f=[];function s(){l=t(f.map((function(t){return t.props}))),p.canUseDOM?e(l):n&&(l=n(l))}var p=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,f=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){f.push(this),s()},c.componentDidUpdate=function(){s()},c.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),s()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},2307:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canUseDOM=void 0,e.removeDocumentMeta=i,e.insertDocumentMeta=function(t){i(),(0,r.forEach)(t,a)};var r=n(2155);e.canUseDOM=!("undefined"===typeof window||!window.document||!window.document.createElement);function o(t){t.parentNode.removeChild(t)}function i(){(0,r.forEach)(document.querySelectorAll("head [data-rdm]"),o)}function a(t){var e=t.tagName,n=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["tagName"]),r=document.createElement(e);for(var o in n)t.hasOwnProperty(o)&&r.setAttribute(o,t[o]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}}}]);
//# sourceMappingURL=13.8ae4c292.chunk.js.map