/*! For license information please see 24.d7c6fc51.chunk.js.LICENSE.txt */
(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[24],{2035:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(8),i=n(1);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function a(){var e=Object(i.useState)(o()),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){function e(){a(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var c=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},2043:function(e,t,n){"use strict";n(1);var r=n(188),i=n(64),o=n(0);t.a=function(e){var t=e.pages,n=e.activePage,a=e.onClick,c={backgroundColor:"#c3cfe2",height:8,width:8,borderRadius:"50%",margin:2,x:0},s=Object(i.useSpring)({loop:!1,config:{duration:600,friction:20},to:[{backgroundColor:"#f5576c",height:10,width:10,borderRadius:"50%",margin:2},{backgroundColor:"#f5576c",height:11,width:11,borderRadius:"50%",margin:2},{backgroundColor:"#46e891",height:12,width:12,borderRadius:"50%",margin:2}],from:c});return Object(o.jsx)(r.a,{direction:"row",justifyContent:"center",alignItems:"center",pt:2,style:{height:25,minWidth:300},children:t.map((function(e,t){return Object(o.jsx)(i.animated.div,{onClick:function(){return a(t.toString())},style:n===t?s:c},t.toString())}))})}},2044:function(e,t,n){"use strict";n(1);var r=n(2026),i=n.p+"static/media/left-arrow.1b4d7a5b.svg",o=n.p+"static/media/right-arrow.5c878cd0.svg",a=n(0);t.a=function(e){var t=e.type,n=e.onClick,c=e.isEdge,s="PREV"===t?Object(a.jsx)("img",{src:i,alt:"LeftArrowIcon",className:"navIcons"}):Object(a.jsx)("img",{src:o,alt:"RightarrowIcoon",className:"navIcons"});return Object(a.jsx)(r.a,{sx:{},onClick:n,disabled:c,children:s})}},2047:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},2053:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(344),i=Object(r.a)("div")({display:"flex",minHeight:"100%",overflow:"hidden",backgroundColor:"white"})},2054:function(e,t,n){"use strict";var r=n(188),i=n(66),o=n(344),a=(n(1),n(25)),c=n(0);t.a=function(e){var t=e.image,n=e.title,i=e.id,o=e.slug,d=Object(a.g)();return Object(c.jsx)("div",{style:{width:150,minHeight:150,cursor:"pointer"},onClick:function(){return d("../viewgoal/".concat(o))},children:Object(c.jsxs)(r.a,{direction:"column",alignItems:"center",justifyContent:"flex-start",spacing:1,children:[Object(c.jsx)(s,{src:t,alt:n}),Object(c.jsx)(l,{children:n})]},i)})};var s=Object(o.a)("img")({width:110,height:110,border:"solid",borderColor:"#007AFF #48CAE4 #6EEDD6",borderRadius:20,borderWidth:2}),l=Object(o.a)(i.a)({color:"#000",fontSize:12,fontWeight:200,textAlign:"center",width:150})},2114:function(e,t,n){"use strict";var r=n(346),i=n(188),o=n(66),a=n(190),c=n(1),s=n(344),l=n(0),d=function(e){var t=e.label,n=e.number;return Object(l.jsx)(r.a,{item:!0,md:6,children:Object(l.jsxs)(i.a,{direction:"column",justifyContent:"center",alignItems:"center",sx:{backgroundColor:"#F9F9F9",minWidth:160,margin:2,height:70,borderRadius:1,boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.15)"},children:[Object(l.jsx)(u,{children:t}),Object(l.jsx)(o.a,{variant:"h4",children:n})]})})},u=Object(s.a)(o.a)({color:"#6C757D",fontSize:14,fontWeight:600,paddingLeft:10}),j=n(10),b=n.n(j),g=n(18),h=n(234),f=Object(s.a)(a.a)({height:170,width:170,margin:15}),O=n(81),x=n(25),m=n(38),p=function(e){var t=e.userInfo,n=e.handleRefresh,r=Object(c.useRef)(null),o=Object(x.g)(),a=Object(m.c)((function(e){return e.AuthReducer})),s=function(e){var t;null===(t=r.current)||void 0===t||t.call(r,e)},d=function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.isLoggedIn?Object(O.l)("user-follow",t.id,a.userInfo.access).then((function(e){console.log("BasicInfo: ",e),!0===e.is_followed?(console.log("true"),n()):!1===e.is_followed?(console.log("false"),n()):s("Something went wrong")})):o("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"center",sx:{paddingTop:5},children:[Object(l.jsxs)(v,{children:[t.full_name,"-",t.id]}),Object(l.jsxs)(A,{children:["@",t.username]}),Object(l.jsx)(f,{alt:"ProfileAvatar",src:t.image}),Object(l.jsxs)(i.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(l.jsxs)(w,{children:[t.total_follow_count," Followers"]}),Object(l.jsxs)(w,{children:[t.total_following_count," Following"]})]}),Object(l.jsx)(C,{onClick:d,children:"Follow"})]})},v=Object(s.a)(o.a)({fontWeight:700,fontSize:32,wordWrap:"break-word",width:350,textAlign:"center"}),A=Object(s.a)(o.a)({color:"#007AFF",fontSize:16}),w=(Object(s.a)(o.a)({color:"#48CAE4",fontSize:24,fontWeight:600}),Object(s.a)(o.a)({color:"#48CAE4",fontSize:16,fontWeight:400,lineHeight:.4}),Object(s.a)(o.a)({color:"#000000",fontSize:16,fontWeight:500,padding:10})),C=Object(s.a)(h.a)({margin:10,border:"2px solid",borderImageSlice:1,borderImageSource:"linear-gradient(to left, #007AFF, #48CAE4, #6EEDD6)",minWidth:220}),S=function(){return Object(l.jsxs)(I,{direction:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(l.jsxs)(y,{children:["Some goals need ",Object(l.jsx)(k,{children:"a team "})," to come true!"]}),Object(l.jsx)(E,{children:"Create Team Donation"})]})},I=Object(s.a)(i.a)({backgroundColor:"#EEF8FF",borderRadius:10,boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.15)",maxWidth:380,height:150,marginBottom:10}),y=Object(s.a)(o.a)({color:"#6C757D",fontSize:20,fontWeight:600,textAlign:"center",padding:20}),k=Object(s.a)("span")({color:"#6EEDD6",fontSize:20,fontWeight:600,textAlign:"center"}),E=Object(s.a)(h.a)({backgroundColor:"#6EEDD6",minWidth:200,borderRadius:20,color:"#fff"}),W=n(2021),z=n(126),F=n(2031),R=n.p+"static/media/team1.50958c79.png",B=n(245),D=function(){return Object(l.jsxs)(q,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:1,children:[Object(l.jsx)(r.a,{item:!0,md:3,children:Object(l.jsx)(W.a,{component:"img",height:"200",image:R,alt:"green iguana",sx:{borderRadius:1}})}),Object(l.jsx)(r.a,{item:!0,md:1}),Object(l.jsx)(r.a,{item:!0,md:8,children:Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(l.jsx)(o.a,{variant:"subtitle1",children:"Rebuild our home"}),Object(l.jsxs)(o.a,{variant:"body1",sx:{fontSize:12},children:["Endorsed by",Object(l.jsx)(G,{children:" Makeawish.co"})]}),Object(l.jsx)(N,{children:"June 15 by me"}),Object(l.jsxs)(P,{children:["US$ 113,56 ",Object(l.jsx)(Q,{children:" Split in 8"})]}),Object(l.jsx)(o.a,{variant:"body1",sx:{fontSize:12,fontWeight:600},children:"Team"}),Object(l.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(l.jsx)(a.a,{src:B.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:B.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:B.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:B.a,sx:{width:20,height:20},alt:"avatr"})]}),Object(l.jsx)(z.a,{sx:{width:"80%",marginTop:1},children:Object(l.jsx)(F.a,{variant:"determinate",value:70})}),Object(l.jsx)(G,{children:"See More"})]})})]})},q=Object(s.a)(r.a)({backgroundColor:"#F8F9FA",borderRadius:10,maxWidth:380,height:230,marginBottom:10}),G=Object(s.a)("span")({color:"#007AFF",fontSize:12,marginTop:10}),N=Object(s.a)(o.a)({color:"#6C757D",fontSize:10}),P=Object(s.a)(o.a)({color:"#4F89A0",fontSize:14,fontWeight:500}),Q=Object(s.a)("span")({color:"#A6CAD2",fontSize:12,fontWeight:300}),L=function(){return Object(l.jsxs)(V,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(l.jsx)(T,{children:"What a better gift than a donation"}),Object(l.jsx)(U,{children:"What a better gift than a donation"}),Object(l.jsx)(Y,{children:"Give a Donation"})]})},V=Object(s.a)(i.a)({backgroundImage:"linear-gradient(180deg, #4CC9F0 0%, #43627D 100%)",borderRadius:10,boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.15)",minWidth:350,height:120,marginBottom:10}),T=Object(s.a)(o.a)({color:"#fff",fontSize:14,fontWeight:600,textAlign:"center"}),U=Object(s.a)(o.a)({color:"#fff",fontSize:12,fontWeight:400,textAlign:"center"}),Y=Object(s.a)(h.a)({backgroundColor:"#6EEDD6",minWidth:200,borderRadius:20,color:"#fff"}),H=(t.a=function(e){var t=e.userInfo,n=e.handleRefresh;return Object(l.jsxs)(r.a,{item:!0,xs:12,sm:12,md:4,children:[Object(l.jsx)(p,{userInfo:t,handleRefresh:n}),Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",sx:{padding:3},spacing:1,children:[Object(l.jsx)(o.a,{variant:"subtitle1",children:"About me"}),Object(l.jsxs)(i.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(a.a,{alt:"ProfileAvatar",src:"data:image/png;base64,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",sx:{width:40,height:40}}),Object(l.jsx)(H,{children:"Works at Domino`s Pizza"})]}),Object(l.jsx)(o.a,{variant:"body2",children:t.bio}),Object(l.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(l.jsx)(d,{label:"Goals Supported",number:t.total_supported_goals}),Object(l.jsx)(d,{label:"Total donations",number:t.total_donated_amount}),Object(l.jsx)(d,{label:"Total Supported Goals",number:t.total_supported_goals})]})]}),Object(l.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(S,{}),Object(l.jsx)("div",{style:{marginTop:10}}),Object(l.jsx)(D,{}),Object(l.jsx)("div",{style:{marginTop:10}}),Object(l.jsx)(L,{})]})]})},Object(s.a)(o.a)({color:"#6C757D",fontSize:16,fontWeight:400,paddingLeft:10}))},2366:function(e,t,n){"use strict";n.r(t);var r=n(10),i=n.n(r),o=n(18),a=n(8),c=n(191),s=n(346),l=n(1),d=n(236),u=n(34),j=n(38),b=n(25),g=n(2053),h=n(235),f=n(2114),O=n(188),x=n(66),m=n(344),p=n(2051),v=n(1957),A=n(0),w=function(e){var t=e.image,n=e.slug,r=C(),i=Object(b.g)();return Object(A.jsx)(s.a,{container:!0,style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},className:r.rootVideoItem,onClick:function(){return i("../viewgoal/".concat(n))}},t)},C=Object(v.a)((function(){return{rootVideoItem:{height:487,width:262,margin:5,marginRight:0,borderRadius:6,justifyContent:"center",alignItems:"center",alignSelf:"center",borderWidth:3,borderColor:"rgb(146, 96, 204) rgb(71, 175, 228) rgb(46, 128, 177) rgb(87, 88, 198)",borderStyle:"solid"}}})),S=n(2054),I=n(2035),y=n(2044),k=n(2043),E=function(e){var t=e.supportedGoals,n=e.savedGoals,r=Object(I.b)().width;return Object(A.jsx)(s.a,{item:!0,xs:12,sm:12,md:8,sx:{backgroundColor:"#F9F9F9"},children:Object(A.jsxs)(O.a,{direction:"column",justifyContent:"center",alignItems:"flex-start",spacing:1,sx:{padding:1},children:[t&&(null===t||void 0===t?void 0:t.length)>0&&Object(A.jsxs)(c.a,{children:[Object(A.jsx)(z,{children:"Sponsored Goals"}),Object(A.jsx)(p.a,{isRTL:!1,itemsToShow:r<500?2:5,renderArrow:y.a,renderPagination:function(e){var t=e.pages,n=e.activePage,r=e.onClick;return Object(A.jsx)(k.a,{pages:t,activePage:n,onClick:r})},children:t&&t.map((function(e){return Object(A.jsx)(S.a,{slug:e.goal.slug,image:e.goal.image,id:e.goal.id,title:e.goal.title})}))})]}),n&&(null===n||void 0===n?void 0:n.length)>0&&Object(A.jsxs)(c.a,{children:[Object(A.jsx)(W,{children:Object(A.jsx)(z,{children:"Pinned Goals"})}),Object(A.jsx)(s.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:n.map((function(e){return Object(A.jsx)(w,{image:e.goal.image,slug:e.goal.slug})}))})]})]})})},W=Object(m.a)(x.a)({color:"#6EEDD6",fontSize:22,fontWeight:600}),z=Object(m.a)("span")({color:"#000",fontSize:22,fontWeight:600}),F=(Object(m.a)("div")({flexDirection:"row",display:"flex",overflow:"hidden",scrollBehavior:"smooth"}),n(351)),R=n(92),B=n(127),D=n(67);t.default=function(){var e=Object(b.g)(),t=Object(j.c)((function(e){return e.AuthReducer})),n=Object(l.useState)(!1),r=Object(a.a)(n,2),O=r[0],x=r[1];Object(l.useEffect)((function(){t.userInfo.is_account_created||e("../createprofiledonor")}),[t.userInfo.is_account_created]);var m=Object(D.a)(),p=Object(u.useQuery)(["userInfo",t.userInfo.access,O],Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/user-detail/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),v=p.data,w=p.isLoading,C=p.isError,S=p.error,I=Object(l.useState)(!1),y=Object(a.a)(I,2),k=y[0],W=y[1];return Object(A.jsx)(c.a,{children:Object(A.jsx)(F.a,{children:!1===w?Object(A.jsx)("div",{children:C?Object(A.jsx)(R.a,{error:S||new Error("Network response was not ok.")}):Object(A.jsx)(d.ErrorBoundary,{fallbackRender:function(e){var t=e.error,n=e.resetErrorBoundary;return Object(A.jsx)(h.a,{error:t,resetErrorBoundary:n})},onReset:function(){return W(!1)},resetKeys:[k],children:Object(A.jsx)(g.a,{children:Object(A.jsxs)(s.a,{container:!0,component:"main",sx:{minHeight:"100vh"},children:[v&&Object(A.jsx)(f.a,{userInfo:v,handleRefresh:function(){x(!O)}}),(null===v||void 0===v?void 0:v.user_payment)&&(null===v||void 0===v?void 0:v.goalsave_user)&&Object(A.jsx)(E,{supportedGoals:null===v||void 0===v?void 0:v.user_payment,savedGoals:null===v||void 0===v?void 0:v.goalsave_user})]})})})}):Object(A.jsx)(B.a,{})})})}}}]);
//# sourceMappingURL=24.d7c6fc51.chunk.js.map