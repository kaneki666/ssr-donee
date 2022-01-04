/*! For license information please see 23.9d1dc08e.chunk.js.LICENSE.txt */
(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[23],{2034:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(8),i=n(1);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function a(){var e=Object(i.useState)(o()),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){function e(){a(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var c=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},2042:function(e,t,n){"use strict";n(1);var r=n(188),i=n(64),o=n(0);t.a=function(e){var t=e.pages,n=e.activePage,a=e.onClick,c={backgroundColor:"#c3cfe2",height:8,width:8,borderRadius:"50%",margin:2,x:0},s=Object(i.useSpring)({loop:!1,config:{duration:600,friction:20},to:[{backgroundColor:"#f5576c",height:10,width:10,borderRadius:"50%",margin:2},{backgroundColor:"#f5576c",height:11,width:11,borderRadius:"50%",margin:2},{backgroundColor:"#46e891",height:12,width:12,borderRadius:"50%",margin:2}],from:c});return Object(o.jsx)(r.a,{direction:"row",justifyContent:"center",alignItems:"center",pt:2,style:{height:25,minWidth:300},children:t.map((function(e,t){return Object(o.jsx)(i.animated.div,{onClick:function(){return a(t.toString())},style:n===t?s:c},t.toString())}))})}},2043:function(e,t,n){"use strict";n(1);var r=n(2025),i=n.p+"static/media/left-arrow.1b4d7a5b.svg",o=n.p+"static/media/right-arrow.5c878cd0.svg",a=n(0);t.a=function(e){var t=e.type,n=e.onClick,c=e.isEdge,s="PREV"===t?Object(a.jsx)("img",{src:i,alt:"LeftArrowIcon",className:"navIcons"}):Object(a.jsx)("img",{src:o,alt:"RightarrowIcoon",className:"navIcons"});return Object(a.jsx)(r.a,{sx:{},onClick:n,disabled:c,children:s})}},2046:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},2052:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(344),i=Object(r.a)("div")({display:"flex",minHeight:"100%",overflow:"hidden",backgroundColor:"white"})},2053:function(e,t,n){"use strict";var r=n(188),i=n(66),o=n(344),a=(n(1),n(25)),c=n(0);t.a=function(e){var t=e.image,n=e.title,i=e.id,o=e.slug,d=Object(a.g)();return Object(c.jsx)("div",{style:{width:150,minHeight:150,cursor:"pointer"},onClick:function(){return d("../viewgoal/".concat(o))},children:Object(c.jsxs)(r.a,{direction:"column",alignItems:"center",justifyContent:"flex-start",spacing:1,children:[Object(c.jsx)(s,{src:t,alt:n}),Object(c.jsx)(l,{children:n})]},i)})};var s=Object(o.a)("img")({width:110,height:110,border:"solid",borderColor:"#007AFF #48CAE4 #6EEDD6",borderRadius:20,borderWidth:2}),l=Object(o.a)(i.a)({color:"#000",fontSize:12,fontWeight:200,textAlign:"center",width:150})},2114:function(e,t,n){"use strict";var r=n(346),i=n(188),o=n(66),a=n(190),c=n(1),s=n(344),l=n(0),d=function(e){var t=e.label,n=e.number;return Object(l.jsx)(r.a,{item:!0,md:6,children:Object(l.jsxs)(i.a,{direction:"column",justifyContent:"center",alignItems:"center",sx:{backgroundColor:"#F9F9F9",minWidth:160,margin:2,height:70,borderRadius:1,boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.15)"},children:[Object(l.jsx)(j,{children:t}),Object(l.jsx)(o.a,{variant:"h4",children:n})]})})},j=Object(s.a)(o.a)({color:"#6C757D",fontSize:14,fontWeight:600,paddingLeft:10}),u=n(10),b=n.n(u),h=n(18),g=n(234),f=Object(s.a)(a.a)({height:170,width:170,margin:15}),O=n(81),x=n(25),m=n(38),p=function(e){var t=e.userInfo,n=e.handleRefresh,r=Object(c.useRef)(null),o=Object(x.g)(),a=Object(m.c)((function(e){return e.AuthReducer})),s=function(e){var t;null===(t=r.current)||void 0===t||t.call(r,e)},d=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.isLoggedIn?Object(O.l)("user-follow",t.id,a.userInfo.access).then((function(e){console.log("BasicInfo: ",e),!0===e.is_followed?(console.log("true"),n()):!1===e.is_followed?(console.log("false"),n()):s("Something went wrong")})):o("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"center",sx:{paddingTop:5},children:[Object(l.jsxs)(A,{children:[t.full_name,"-",t.id]}),Object(l.jsxs)(v,{children:["@",t.username]}),Object(l.jsx)(f,{alt:"ProfileAvatar",src:t.image}),Object(l.jsxs)(i.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(l.jsxs)(w,{children:[t.total_follow_count," Followers"]}),Object(l.jsxs)(w,{children:[t.total_following_count," Following"]})]}),Object(l.jsx)(S,{onClick:d,children:"Follow"})]})},A=Object(s.a)(o.a)({fontWeight:700,fontSize:32,wordWrap:"break-word",width:350,textAlign:"center"}),v=Object(s.a)(o.a)({color:"#007AFF",fontSize:16}),w=(Object(s.a)(o.a)({color:"#48CAE4",fontSize:24,fontWeight:600}),Object(s.a)(o.a)({color:"#48CAE4",fontSize:16,fontWeight:400,lineHeight:.4}),Object(s.a)(o.a)({color:"#000000",fontSize:16,fontWeight:500,padding:10})),S=Object(s.a)(g.a)({margin:10,border:"2px solid",borderImageSlice:1,borderImageSource:"linear-gradient(to left, #007AFF, #48CAE4, #6EEDD6)",minWidth:220}),C=function(){return Object(l.jsxs)(I,{direction:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(l.jsxs)(y,{children:["Some goals need ",Object(l.jsx)(k,{children:"a team "})," to come true!"]}),Object(l.jsx)(E,{children:"Create Team Donation"})]})},I=Object(s.a)(i.a)({backgroundColor:"#EEF8FF",borderRadius:10,boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.15)",maxWidth:380,height:150,marginBottom:10}),y=Object(s.a)(o.a)({color:"#6C757D",fontSize:20,fontWeight:600,textAlign:"center",padding:20}),k=Object(s.a)("span")({color:"#6EEDD6",fontSize:20,fontWeight:600,textAlign:"center"}),E=Object(s.a)(g.a)({backgroundColor:"#6EEDD6",minWidth:200,borderRadius:20,color:"#fff"}),W=n(2020),z=n(126),F=n(2030),B=n.p+"static/media/team1.50958c79.png",D=n(245),R=function(){return Object(l.jsxs)(q,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:1,children:[Object(l.jsx)(r.a,{item:!0,md:3,children:Object(l.jsx)(W.a,{component:"img",height:"200",image:B,alt:"green iguana",sx:{borderRadius:1}})}),Object(l.jsx)(r.a,{item:!0,md:1}),Object(l.jsx)(r.a,{item:!0,md:8,children:Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(l.jsx)(o.a,{variant:"subtitle1",children:"Rebuild our home"}),Object(l.jsxs)(o.a,{variant:"body1",sx:{fontSize:12},children:["Endorsed by",Object(l.jsx)(Q,{children:" Makeawish.co"})]}),Object(l.jsx)(G,{children:"June 15 by me"}),Object(l.jsxs)(N,{children:["US$ 113,56 ",Object(l.jsx)(L,{children:" Split in 8"})]}),Object(l.jsx)(o.a,{variant:"body1",sx:{fontSize:12,fontWeight:600},children:"Team"}),Object(l.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(l.jsx)(a.a,{src:D.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:D.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:D.a,sx:{width:20,height:20},alt:"avatr"}),Object(l.jsx)(a.a,{src:D.a,sx:{width:20,height:20},alt:"avatr"})]}),Object(l.jsx)(z.a,{sx:{width:"80%",marginTop:1},children:Object(l.jsx)(F.a,{variant:"determinate",value:70})}),Object(l.jsx)(Q,{children:"See More"})]})})]})},q=Object(s.a)(r.a)({backgroundColor:"#F8F9FA",borderRadius:10,maxWidth:380,height:230,marginBottom:10}),Q=Object(s.a)("span")({color:"#007AFF",fontSize:12,marginTop:10}),G=Object(s.a)(o.a)({color:"#6C757D",fontSize:10}),N=Object(s.a)(o.a)({color:"#4F89A0",fontSize:14,fontWeight:500}),L=Object(s.a)("span")({color:"#A6CAD2",fontSize:12,fontWeight:300}),P=function(){return Object(l.jsxs)(T,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(l.jsx)(U,{children:"What a better gift than a donation"}),Object(l.jsx)(V,{children:"What a better gift than a donation"}),Object(l.jsx)(Y,{children:"Give a Donation"})]})},T=Object(s.a)(i.a)({backgroundImage:"linear-gradient(180deg, #4CC9F0 0%, #43627D 100%)",borderRadius:10,boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.15)",minWidth:350,height:120,marginBottom:10}),U=Object(s.a)(o.a)({color:"#fff",fontSize:14,fontWeight:600,textAlign:"center"}),V=Object(s.a)(o.a)({color:"#fff",fontSize:12,fontWeight:400,textAlign:"center"}),Y=Object(s.a)(g.a)({backgroundColor:"#6EEDD6",minWidth:200,borderRadius:20,color:"#fff"}),H=(t.a=function(e){var t=e.userInfo,n=e.handleRefresh;return Object(l.jsxs)(r.a,{item:!0,xs:12,sm:12,md:4,children:[Object(l.jsx)(p,{userInfo:t,handleRefresh:n}),Object(l.jsxs)(i.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",sx:{padding:3},spacing:1,children:[Object(l.jsx)(o.a,{variant:"subtitle1",children:"About me"}),Object(l.jsxs)(i.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(a.a,{alt:"ProfileAvatar",src:"data:image/png;base64,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",sx:{width:40,height:40}}),Object(l.jsx)(H,{children:"Works at Domino`s Pizza"})]}),Object(l.jsx)(o.a,{variant:"body2",children:t.bio}),Object(l.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(l.jsx)(d,{label:"Goals Supported",number:t.total_supported_goals}),Object(l.jsx)(d,{label:"Total donations",number:t.total_donated_amount}),Object(l.jsx)(d,{label:"Total Supported Goals",number:t.total_supported_goals})]})]}),Object(l.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(C,{}),Object(l.jsx)("div",{style:{marginTop:10}}),Object(l.jsx)(R,{}),Object(l.jsx)("div",{style:{marginTop:10}}),Object(l.jsx)(P,{})]})]})},Object(s.a)(o.a)({color:"#6C757D",fontSize:16,fontWeight:400,paddingLeft:10}))},2369:function(e,t,n){"use strict";n.r(t);var r=n(10),i=n.n(r),o=n(18),a=n(8),c=n(191),s=n(346),l=n(1),d=n(236),j=n(34),u=n(25),b=n(127),h=n(2052),g=n(235),f=n(2114),O=n(188),x=n(66),m=n(344),p=n(2050),A=n(2053),v=n(2034),w=n(2043),S=n(2042),C=n(0),I=function(e){var t=e.supportedGoals,n=Object(v.b)().width;return Object(C.jsx)(s.a,{item:!0,xs:12,sm:12,md:8,sx:{backgroundColor:"#F9F9F9"},children:Object(C.jsx)(O.a,{direction:"column",justifyContent:"center",alignItems:"flex-start",spacing:1,sx:{padding:1},children:t&&(null===t||void 0===t?void 0:t.length)>0&&Object(C.jsxs)(c.a,{children:[Object(C.jsx)(y,{children:"Sponsored Goals"}),Object(C.jsx)(p.a,{isRTL:!1,itemsToShow:n<500?2:5,renderArrow:w.a,renderPagination:function(e){var t=e.pages,n=e.activePage,r=e.onClick;return Object(C.jsx)(S.a,{pages:t,activePage:n,onClick:r})},children:t&&t.map((function(e){return Object(C.jsx)(A.a,{slug:e.goal.slug,image:e.goal.image,id:e.goal.id,title:e.goal.title})}))})]})})})},y=(Object(m.a)(x.a)({color:"#6EEDD6",fontSize:22,fontWeight:600}),Object(m.a)("span")({color:"#000",fontSize:22,fontWeight:600})),k=(Object(m.a)("div")({flexDirection:"row",display:"flex",overflow:"hidden",scrollBehavior:"smooth"}),n(67)),E=n(351),W=n(92);t.default=function(){var e=Object(u.f)().state,t=e?e.goalID:null,n=Object(l.useState)(!1),r=Object(a.a)(n,2),O=r[0],x=r[1],m=Object(k.a)(),p=Object(j.useQuery)(["userInfoOther",t,O],Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/donor-profile/".concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))),A=p.data,v=p.isLoading,w=p.isError,S=p.error,y=Object(l.useState)(!1),z=Object(a.a)(y,2),F=z[0],B=z[1];return Object(C.jsx)(c.a,{children:Object(C.jsx)(E.a,{children:!1===v?Object(C.jsx)("div",{children:w?Object(C.jsx)(W.a,{error:S||new Error("Network response was not ok.")}):Object(C.jsx)(d.ErrorBoundary,{fallbackRender:function(e){var t=e.error,n=e.resetErrorBoundary;return Object(C.jsx)(g.a,{error:t,resetErrorBoundary:n})},onReset:function(){return B(!1)},resetKeys:[F],children:Object(C.jsx)(h.a,{children:Object(C.jsxs)(s.a,{container:!0,component:"main",sx:{minHeight:"100vh"},children:[A&&Object(C.jsx)(f.a,{userInfo:A,handleRefresh:function(){x(!O)}}),(null===A||void 0===A?void 0:A.user_payment)&&Object(C.jsx)(I,{supportedGoals:null===A||void 0===A?void 0:A.user_payment})]})})})}):Object(C.jsx)(b.a,{})})})}}}]);
//# sourceMappingURL=23.9d1dc08e.chunk.js.map