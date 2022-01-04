/*! For license information please see 12.7c456e97.chunk.js.LICENSE.txt */
(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[12],{2034:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(8),o=n(1);function i(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function a(){var e=Object(o.useState)(i()),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){a(i())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var c=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},2037:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return r(t,e),t}(Error);function i(e,t){if(!e)throw new o(t)}},2038:function(e,t,n){"use strict";function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n.d(t,"a",(function(){return r}))},2039:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),o=n.n(r),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,c=t.iconFillColor,s=t.round,l=t.size,u=a(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",i({viewBox:"0 0 64 64",width:l,height:l},u),s?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:c}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}},2040:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(2048),a=n.n(i),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},h=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},p=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function b(e,t,n){var r=t.height,o=t.width,i=d(t,["height","width"]),a=s({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,u=void 0===l?550:l;b(e,s({height:i,width:u},"windowCenter"===c?h(u,i):p(u,i)),r)},t.handleClick=function(e){return l(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,s,l,d;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,s=t.opts,l=o(a,s),r?[2]:(e.preventDefault(),n?(d=n(),f(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return c&&this.openShareDialog(l),i&&i(e,l),[2]}}))}))},t}return c(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,c=e.forwardedRef,l=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),f=e.style,h=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=a()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),b=s(s(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},f),r&&i);return o.a.createElement("button",s({},h,{"aria-label":h["aria-label"]||l,className:p,onClick:this.handleClick,ref:c,style:b}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),m=j,g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)};t.a=function(e,t,n,i){function a(r,a){var c=n(r),s=g({},r);return Object.keys(c).forEach((function(e){delete s[e]})),o.a.createElement(m,g({},i,s,{forwardedRef:a,networkName:e,networkLink:t,opts:n(r)}))}return a.displayName="ShareButton-"+e,Object(r.forwardRef)(a)}},2042:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(9),o=n(70),i=n(6),a=n(2018),c=n(7),s=n(41),l=n(0),u=["children","sx"],d=Object(c.a)("span")((function(e){var t=e.theme;return Object(i.a)({},t.breakpoints.up("sm"),{top:-7,zIndex:1,width:12,right:20,height:12,content:"''",position:"absolute",borderRadius:"0 0 4px 0",transform:"rotate(-135deg)",background:t.palette.background.paper,borderRight:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12)),borderBottom:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12))})}));function f(e){var t=e.children,n=e.sx,i=Object(o.a)(e,u);return Object(l.jsxs)(a.a,Object(r.a)(Object(r.a)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:Object(r.a)({mt:1.5,ml:.5,overflow:"inherit",boxShadow:function(e){return e.customShadows.z20},border:function(e){return"solid 1px ".concat(e.palette.grey[5008])},width:200},n)}},i),{},{children:[Object(l.jsx)(d,{className:"arrow"}),t]}))}},2048:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},2049:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1956),o=Object(r.a)((function(e){return{commenterDate:{color:"#6C757D",fontSize:14,fontWeight:300},commenterComment:{color:"#6C757D",fontSize:14,fontWeight:300},commentername:{color:"#343A40",fontSize:16,fontWeight:600},donateButton:{color:"linear-gradient(90deg, #0077B6 23.6%, #32B2ED 100%)"},imageContainer:{padding:e.spacing(3,2),minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#343A40"},infoContainer:{padding:e.spacing(3,2),minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},buttonIcon:{margin:e.spacing(0),maxWidth:100},infoTitle:{color:"#343A40",fontWeight:500,fontSize:16},moneyGot:{color:"#4F89A0",fontWeight:800,fontSize:24},moneyGotSub:{color:"#48CAE4",fontWeight:400,fontSize:16},doneLogo:{position:"absolute",left:10,top:10,height:35,width:130},title:{color:"#007AFF",fontSize:20,fontWeight:600,textTransform:"capitalize"},titleEndorse:{color:"#6C757D",fontSize:13,fontWeight:400,textTransform:"capitalize"},titleEndorseBy:{color:"#007AFF",fontSize:13,fontWeight:400,textTransform:"capitalize"},submit:{"&.MuiButton-outlinedSecondary":{border:"2px solid",borderImageSlice:1,borderImageSource:"linear-gradient(to left, #007AFF, #6EEDD6)",borderRadius:4},color:"#007AFF"},closeLogo:{position:"absolute",right:10,top:10,height:25,width:25},media:{height:550,borderRadius:7,borderWidth:3,borderColor:"#A317E4",borderStyle:"solid"},avatar:{height:60,width:60,borderRadius:30},avatarSmall:{height:25,width:25},avatarSmallForComment:{height:25,width:25,marginTop:-12}}}))},2058:function(e,t,n){"use strict";t.a=n.p+"static/media/heart.933870ca.svg"},2059:function(e,t,n){"use strict";t.a=n.p+"static/media/heartfilled.26030ede.svg"},2060:function(e,t,n){"use strict";t.a=n.p+"static/media/pin_outline.81a857b6.svg"},2061:function(e,t,n){"use strict";t.a=n.p+"static/media/pin.a3c66b70.svg"},2062:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(9),o=n(10),i=n.n(o),a=n(18),c=n(8),s=n(1),l=n(41),u=n(2025),d=n(2026),f=n(188),h=n(66),p=n(2105),b=n(2106),j=n(2107),m=n(2108),g=n(2109),O=n(2110),v=n.p+"static/media/share_blue.53116634.svg",w=n(2042),y=n(69),x=n(0);function _(e){var t=e.url,n=e.image,o=Object(s.useRef)(null),_=Object(s.useState)(!1),S=Object(c.a)(_,2),k=S[0],C=S[1],I=function(){var e=Object(a.a)(i.a.mark((function e(){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="url=".concat(t,"&image=").concat(n),e.next=3,fetch("https://doneeapp.herokuapp.com/post?".concat(r));case 3:o=e.sent,console.log(o.status),C(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(t),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{ref:o,size:"large",color:k?"primary":"default",onClick:I,sx:Object(r.a)({},k&&{bgcolor:function(e){return Object(l.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(x.jsx)("img",{src:v})}),Object(x.jsx)(w.a,{open:k,onClose:function(){C(!1)},anchorEl:o.current,sx:{width:360},children:Object(x.jsx)(y.a,{sx:{height:{xs:340,sm:"auto"}},children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(p.a,{url:t,children:Object(x.jsxs)(f.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(x.jsx)(b.a,{size:25,round:!0}),Object(x.jsx)(h.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Twitter"})]})}),Object(x.jsx)(j.a,{url:t,children:Object(x.jsxs)(f.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(x.jsx)(m.a,{size:25,round:!0}),Object(x.jsx)(h.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Facebook"})]})}),Object(x.jsx)(g.a,{url:t,children:Object(x.jsxs)(f.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(x.jsx)(O.a,{size:25,round:!0}),Object(x.jsx)(h.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Whatsapp"})]})})]})})})]})}},2074:function(e,t,n){"use strict";n(1);var r=n(346),o=n(66),i=n(2049),a=n(25),c=n(0);t.a=function(e){var t=e.userName,n=e.image,s=e.endorser,l=e.profileID,u=Object(i.a)(),d=Object(a.g)();return Object(c.jsx)("div",{children:Object(c.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:u.avatar,src:n,alt:"Paella dish"})}),Object(c.jsx)("div",{style:{width:20}}),Object(c.jsxs)(r.a,{children:[Object(c.jsx)("div",{onClick:function(){return d("../../profiledetailother",{state:{goalID:l}})},children:Object(c.jsxs)(o.a,{style:{cursor:"pointer"},variant:"body1",gutterBottom:!0,className:u.title,children:["@",t]})}),Object(c.jsxs)(o.a,{variant:"body1",gutterBottom:!0,className:u.titleEndorse,children:["Endorsed By"," ",Object(c.jsxs)("span",{style:{cursor:"pointer"},className:u.titleEndorseBy,children:["@",s]})]})]})]})})}},2076:function(e,t,n){"use strict";var r=n(10),o=n.n(r),i=n(18),a=n(346),c=n(66),s=n(190),l=n(234),u=n(1),d=n.p+"static/media/comment.024c9246.svg",f=n(2058),h=n(2059),p=n(2060),b=n(2061),j=n(1956),m=n(2030),g=n(0),O=Object(j.a)({root:{height:10,borderRadius:5},bar:{borderRadius:5,background:"linear-gradient(90deg, #006EFF 0%, #4CC9F0 50.73%, #6EEDD6  100%)"}});function v(e){var t=e.percentage,n=O();return Object(g.jsx)("div",{className:n.root,children:Object(g.jsx)(m.a,{classes:{root:n.root,bar:n.bar},variant:"determinate",value:t})})}var w=n(2049),y=n(38),x=n(81),_=n(25),S=n(68),k=n(2062);t.a=function(e){var t=e.goalID,n=e.isLiked,r=e.isSaved,j=e.title,m=e.total_amount,O=e.paid_amount,C=e.supporters,I=e.total_donor,z=(e.goal_likes,e.comments,e.handleNewComment),E=e.total_like_count,R=e.total_comment_count,D=e.slug,N=Object(y.c)((function(e){return e.AuthReducer})),F=Object(_.g)(),P=Object(w.a)(),W=100*parseInt(O||"0")/parseInt(m||"0"),L=Object(u.useRef)(null),A=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.isLoggedIn&&t?Object(x.n)(t,N.userInfo.access).then((function(e){!0===e.is_like||!1===e.is_like?z():T("Something went wrong")})):F("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.isLoggedIn&&t?Object(x.o)(t,N.userInfo.access).then((function(e){!0===e.is_saved||!1===e.is_saved?z():T("Something went wrong")})):F("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t;null===(t=L.current)||void 0===t||t.call(L,e)},H=function(e){null!==e&&F("../profiledonorother",{state:{goalID:e}})};return Object(g.jsxs)(a.a,{container:!0,direction:"column",justifyContent:"flex-start",style:{padding:40},children:[Object(g.jsx)(S.a,{children:function(e){L.current=e}}),Object(g.jsx)(c.a,{variant:"body1",gutterBottom:!0,className:P.infoTitle,children:j}),Object(g.jsxs)(c.a,{variant:"body1",gutterBottom:!0,className:P.moneyGot,align:"left",children:["US $",Number(O).toLocaleString()," ",Object(g.jsxs)("span",{className:P.moneyGotSub,children:[" ","of US $",Number(m).toLocaleString()]})]}),Object(g.jsx)(v,{percentage:W}),Object(g.jsx)("div",{style:{height:20}}),Object(g.jsx)(a.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:void 0!==C&&(null===C||void 0===C?void 0:C.length)>=1&&(null===C||void 0===C?void 0:C.length)>=5?null===C||void 0===C?void 0:C.slice(0,6).map((function(e){return Object(g.jsx)(s.a,{onClick:function(){return H(e.user.id)},src:e.user.image,sx:{height:50,width:50,marginRight:1,cursor:"pointer"}})})):null===C||void 0===C?void 0:C.map((function(e){return Object(g.jsx)(s.a,{onClick:function(){return H(e.user.id)},src:e.user.image,sx:{height:50,width:50,marginRight:1,cursor:"pointer"}})}))}),void 0!==C&&(null===C||void 0===C?void 0:C.length)>=1&&I&&Object(g.jsxs)(c.a,{variant:"body1",pt:1,pb:1,style:{cursor:"pointer"},className:P.titleEndorseBy,onClick:function(){return H(C[0].user.id)},children:["@",C[0].user.username," ",Object(g.jsxs)("span",{style:{color:"#000000",cursor:"default"},children:[" ","0"!==I?"and ".concat(I," more people"):""," donate to this goal"," "]})]}),Object(g.jsxs)(a.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(g.jsx)(l.a,{onClick:A,className:P.buttonIcon,startIcon:Object(g.jsx)("img",{src:N.isLoggedIn&&n?h.a:f.a,alt:"logo",className:"cardIcons"}),children:E}),Object(g.jsx)(l.a,{className:P.buttonIcon,startIcon:Object(g.jsx)("img",{src:d,alt:"logo",className:"cardIcons"}),children:R}),Object(g.jsx)(l.a,{onClick:B,className:P.buttonIcon,startIcon:Object(g.jsx)("img",{src:N.isLoggedIn&&r?b.a:p.a,style:{height:30,width:30},alt:"logo",className:"cardIcons"})}),Object(g.jsx)(k.a,{url:"".concat(x.c,"/viewgoal/").concat(D),image:"https://donee.s3.amazonaws.com/media/images/goal_images/photo-1488521787991-ed7bbaae773c_e4nGOZ5.jpeg"})]})]})}},2105:function(e,t,n){"use strict";var r=n(2037),o=n(2038),i=n(2040);var a=Object(i.a)("twitter",(function(e,t){var n=t.title,i=t.via,a=t.hashtags,c=void 0===a?[]:a,s=t.related,l=void 0===s?[]:s;return Object(r.a)(e,"twitter.url"),Object(r.a)(Array.isArray(c),"twitter.hashtags is not an array"),Object(r.a)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+Object(o.a)({url:e,text:n,via:i,hashtags:c.length>0?c.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});t.a=a},2106:function(e,t,n){"use strict";var r=n(2039),o=Object(r.a)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});t.a=o},2107:function(e,t,n){"use strict";var r=n(2037),o=n(2038),i=n(2040);var a=Object(i.a)("facebook",(function(e,t){var n=t.quote,i=t.hashtag;return Object(r.a)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Object(o.a)({u:e,quote:n,hashtag:i})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});t.a=a},2108:function(e,t,n){"use strict";var r=n(2039),o=Object(r.a)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});t.a=o},2109:function(e,t,n){"use strict";var r=n(2037),o=n(2038),i=n(2040);var a=Object(i.a)("whatsapp",(function(e,t){var n=t.title,i=t.separator;return Object(r.a)(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+Object(o.a)({text:n?n+i+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});t.a=a},2110:function(e,t,n){"use strict";var r=n(2039),o=Object(r.a)({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});t.a=o},2111:function(e,t){t.__esModule=!0,t.default={body:'<path d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" fill="currentColor"/><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7c-23.5-24.2-36-56.8-34.9-90.6c.9-26.4 9.9-51.2 26.2-72.1c16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9l13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9c15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5l37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" fill="currentColor"/>',width:1024,height:1024}},2352:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(8),i=n(10),a=n.n(i),c=n(18),s=n(346),l=n(191),u=n(188),d=n(234),f=n(2012),h=n(1),p=n(2035),b=n(34),j=n(81),m=n(38),g=n(25),O=n(127),v=n(68),w=n(82),y=n(67),x=n(344),_=n(240),S=n(2034),k=n(2074),C=n(2076),I=n(0),z=function(e){var t=e.data,n=e.cngRefreshState,r=Object(S.b)().height;return Object(I.jsx)(s.a,{item:!0,xs:!1,sm:!1,md:4,children:Object(I.jsx)(_.a,{style:{maxHeight:r-60},forceVisible:"y",autoHide:!1,children:Object(I.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,sx:{padding:2},children:[Object(I.jsx)(k.a,{profileID:t.profile,image:t.profile_image,userName:t.profile_username,endorser:t.ngo_username}),Object(I.jsx)(E,{src:t.image,alt:"GoalImg"}),Object(I.jsx)(C.a,{slug:t.slug,goalID:t.id,isLiked:null===t||void 0===t?void 0:t.is_liked,isSaved:null===t||void 0===t?void 0:t.is_saved,title:t.title,total_amount:t.total_amount,paid_amount:t.paid_amount,supporters:t.goal_payment,total_donor:t.donor_count,goal_likes:t.goal_likes,comments:t.goal_comment,total_like_count:t.total_like_count,total_comment_count:t.total_comment_count,handleNewComment:n})]})})})},E=Object(x.a)("img")((function(){return{height:150,width:150,borderRadius:10}})),R=n(2065),D=n(126),N=n(66),F=n(27),P=function(){var e=Object(R.a)({maxFiles:1}),t=e.acceptedFiles,n=e.getRootProps,i=e.getInputProps,a=Object(h.useState)(""),c=Object(o.a)(a,2),s=c[0],l=c[1];return Object(h.useEffect)((function(){t.length>0&&l(URL.createObjectURL(t[0]))}),[t]),Object(I.jsxs)("div",Object(r.a)(Object(r.a)({},n({className:"dropzone"})),{},{children:[Object(I.jsx)("input",Object(r.a)({},i())),Object(I.jsx)(W,{children:""===s?Object(I.jsx)(L,{children:"Drag or Browse image"}):Object(I.jsx)(A,{src:s,alt:"prodform"})})]}))},W=Object(x.a)(D.a)({backgroundColor:"white",width:160,height:160,borderRadius:11,justifyContent:"center",alignItems:"center",display:"flex",boxShadow:F.a.z12}),L=Object(x.a)(N.a)({color:"#3366FF",fontSize:12,fontWeight:"bold"}),A=Object(x.a)("img")({height:160,borderRadius:11}),B=n(2064),T=["video/mp4","video/mov"],H=B.e().shape({title:B.g().min(10,"Too Short, 10 character minimum").max(25,'"Too long, 25 character max"'),short_description:B.g().min(10,"too Short, 30 character minimum").max(100,"oo long, 150 character max"),buying_item:B.g().min(10,"Too short 10 character minimum"),online_source_url:B.g().matches(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,"Enter correct url!"),media:B.a(B.c().test("fileSize","Video too large,less than 100 MB",(function(e){return e&&e.size<=1e8})).test("fileFormat","Unsupported Format. mp4 and mov supported",(function(e){return e&&T.includes(e.type)}))).nullable(),full_description:B.g()}),G=[{value:"image",label:"Image"},{value:"title",label:"Title"},{value:"short_description",label:"Short Description"},{value:"full_description",label:"Full Description"},{value:"buying_item",label:"Buying Item"},{value:"online_source_url",label:"Online Source Url"},{value:"media",label:"Goal Media"}],M={image:null,title:"",short_description:"",full_description:"",buying_item:"",online_source_url:"",media:null},V=n(33),U=n(2111),q=n.n(U),J=n(84),$=Object(x.a)(D.a)({backgroundColor:"#CED4DA",width:300,minHeight:150,borderRadius:11,justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}),Q=Object(x.a)(N.a)({color:"red",fontSize:12}),X=Object(x.a)("span")({color:"#007AFF",textAlign:"center"}),Y=function(e){var t=e.field,n=e.form,i=Object(R.a)({maxFiles:5}),s=i.acceptedFiles,l=i.getRootProps,d=i.getInputProps,f=n.errors,b=(n.isValid,Object(h.useState)(null)),j=Object(o.a)(b,2),m=j[0],g=j[1],O=Object(p.e)().setFieldValue,v=function(e){return new Promise((function(t,n){try{var r=document.createElement("video");r.preload="metadata",r.onloadedmetadata=function(){t(this)},r.onerror=function(){n("Invalid video. Please select a video file.")},r.src=window.URL.createObjectURL(e)}catch(o){n(o)}}))},w=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s.map(function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:e.sent.duration>=20?g("Video duration must be less than 20 or equal 20 seconds"):(g(null),O("videofile",s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(t){}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){w()}),[s]),Object(I.jsx)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:Object(I.jsxs)("div",Object(r.a)(Object(r.a)({},l({className:"dropzone"})),{},{children:[Object(I.jsx)("input",Object(r.a)({},d())),Object(I.jsxs)($,{children:[Object(I.jsx)(V.a,{icon:q.a,fontSize:50,color:"#007AFF"}),Object(I.jsxs)(N.a,{variant:"subtitle1",align:"center",children:["Drag and Drop"," ",Object(I.jsx)(X,{children:"Browse a unique 20 sec video of your goal to make it viral!"})]}),Object(I.jsx)(N.a,{variant:"caption",color:J.a.grey[600],children:"Max Duration 20 seconds and Size 100 MB"}),t.value&&t.value.length>0&&null===m&&t.value.map((function(e){return Object(I.jsx)(N.a,{align:"center",variant:"caption",color:J.a.warning.dark,children:e.name})})),null!==m&&Object(I.jsx)(Q,{children:m}),f.videofile&&Object(I.jsx)(Q,{children:f.videofile})]})]}))})},Z=(t.default=function(){var e=Object(g.f)().state,t=Object(h.useRef)(null),n=Object(h.useRef)(null),i=Object(g.g)(),f=(Object(m.c)((function(e){return e.AuthReducer.userInfo.access})),Object(y.a)()),x=Object(b.useQuery)(["getSingleGoal",e],Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/retrieve-goal/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))),_=x.data,S=(x.isError,x.isLoading,Object(b.useMutation)(["EditGoalTypeMutation"],function(){var t=Object(c.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new FormData,null!==n.image&&r.append("image",n.image?n.image:""),r.append("title","".concat(n.title)),r.append("short_description","".concat(n.short_description)),r.append("full_description","".concat(n.full_description)),r.append("buying_item","".concat(n.buying_item)),r.append("online_source_url","".concat(n.online_source_url)),null!==n.media&&n.media.map((function(e){return r.append("media",e||"")})),t.next=10,f.patch("".concat(j.b,"/update-goal/").concat(e,"/"),r);case 10:return o=t.sent,t.abrupt("return",o.data);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),k=Object(h.useState)(M),C=Object(o.a)(k,2),E=C[0],R=C[1],D=S.isLoading,N=S.isError,F=S.isSuccess,W=S.data;console.log(W,N,F);return Object(h.useEffect)((function(){return F&&void 0!==W&&("string"===typeof W.title?(!function(e){var t;null===(t=n.current)||void 0===t||t.call(n,e)}("Goal Edit Successful"),setTimeout((function(){i("../")}),3e3)):function(e){var n;null===(n=t.current)||void 0===n||n.call(t,e)}("Goal Edit Failed")),function(){!0}}),[N,F]),Object(h.useEffect)((function(){void 0!==_&&R(Object(r.a)(Object(r.a)({},E),{},{title:_.title,short_description:_.short_description,full_description:_.full_description,buying_item:_.buying_item,online_source_url:_.online_source_url}))}),[_]),D?Object(I.jsx)(O.a,{}):Object(I.jsxs)("div",{children:[Object(I.jsx)(v.a,{children:function(e){t.current=e}}),Object(I.jsx)(w.a,{children:function(e){n.current=e}}),Object(I.jsxs)(s.a,{container:!0,component:"main",children:[void 0!==_&&Object(I.jsx)(z,{data:_,cngRefreshState:function(){}}),Object(I.jsx)(s.a,{item:!0,xs:12,sm:12,md:8,children:Object(I.jsx)(p.c,{initialValues:E,validationSchema:H,onSubmit:function(e,t){alert(JSON.stringify(e,null,2)),S.mutate(e),t.setSubmitting(!1)},enableReinitialize:!0,children:Object(I.jsx)(p.b,{children:Object(I.jsx)(l.a,{component:"main",maxWidth:"sm",children:Object(I.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:2,p:5,children:[G.map((function(e){return"image"===e.value?Object(I.jsx)(p.a,{name:e.value,component:P,label:e.label,type:"input"}):"media"===e.value?Object(I.jsx)(p.a,{name:e.value,component:Y,label:e.label,type:"input"}):Object(I.jsx)(p.a,{name:e.value,component:Z,label:e.label,type:"input"})})),Object(I.jsx)(d.a,{type:"submit",variant:"outlined",color:"secondary",children:"EDIT GOAL"})]})})})})})]})]})},function(e){var t=e.field,n=e.form,o=e.label;e.type;return Object(I.jsx)(f.a,Object(r.a)(Object(r.a)({fullWidth:!0,variant:"outlined"},t),{},{label:o,placeholder:o,multiline:"full_description"===t.name,rows:"full_description"===t.name?4:1,error:Boolean(n.touched[t.name]&&n.errors[t.name]),helperText:function(){if(n.touched[t.name]&&n.errors[t.name])return n.errors[t.name]}()}))})}}]);
//# sourceMappingURL=12.7c456e97.chunk.js.map