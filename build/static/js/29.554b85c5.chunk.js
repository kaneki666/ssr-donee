(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[29],{2042:function(e,t,n){"use strict";n(1);var r=n(188),c=n(64),i=n(0);t.a=function(e){var t=e.pages,n=e.activePage,o=e.onClick,a={backgroundColor:"#c3cfe2",height:8,width:8,borderRadius:"50%",margin:2,x:0},s=Object(c.useSpring)({loop:!1,config:{duration:600,friction:20},to:[{backgroundColor:"#f5576c",height:10,width:10,borderRadius:"50%",margin:2},{backgroundColor:"#f5576c",height:11,width:11,borderRadius:"50%",margin:2},{backgroundColor:"#46e891",height:12,width:12,borderRadius:"50%",margin:2}],from:a});return Object(i.jsx)(r.a,{direction:"row",justifyContent:"center",alignItems:"center",pt:2,style:{height:25,minWidth:300},children:t.map((function(e,t){return Object(i.jsx)(c.animated.div,{onClick:function(){return o(t.toString())},style:n===t?s:a},t.toString())}))})}},2043:function(e,t,n){"use strict";n(1);var r=n(2025),c=n.p+"static/media/left-arrow.1b4d7a5b.svg",i=n.p+"static/media/right-arrow.5c878cd0.svg",o=n(0);t.a=function(e){var t=e.type,n=e.onClick,a=e.isEdge,s="PREV"===t?Object(o.jsx)("img",{src:c,alt:"LeftArrowIcon",className:"navIcons"}):Object(o.jsx)("img",{src:i,alt:"RightarrowIcoon",className:"navIcons"});return Object(o.jsx)(r.a,{sx:{},onClick:n,disabled:a,children:s})}},2285:function(e,t,n){},2351:function(e,t,n){"use strict";n.r(t);var r=n(191),c=n(346),i=n(8),o=n(10),a=n.n(o),s=n(18),l=n(1),u=n(188),d=n(66),j=n(2050),b=n(1956),f=Object(b.a)((function(e){return{rootGoals:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",marginTop:15,marginBottom:15},rootCategory:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",marginTop:15,marginBottom:15,alignItems:"center"},title:{color:"#2A9DC1"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},imageList:{width:240},icon:{color:"rgba(255, 255, 255, 0.54)"},leftColumn:{backgroundColor:"white"},headerLeftSub:{color:"#6EEDD6",paddingRight:5,fontSize:40},categoryRow:{flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center",padding:5},categoryImage:{width:97,objectFit:"fill"},scrollList:{minWidth:350,flexDirection:"row",display:"flex",overflow:"hidden",scrollBehavior:"smooth"},label:{fontSize:12,fontWeight:400},label2:{fontSize:12,fontWeight:400,color:"#ffffff"},rowMap:{margin:5,backgroundColor:" rgba(0, 122, 255, 0.2)",borderRadius:5},support:{},endorsedby:{color:"#007AFF",fontSize:14},headerLeftDonation:{color:"#4F89A0",paddingRight:5}}})),g=n(344),h=n(2017),O=n(2024),x=n(33),m=n(2006),p=n(170),v=n.n(p),w=n(0),y=(Object(g.a)("div")((function(e){e.theme;return{borderRadius:10,backgroundColor:"#f9f9f9"}})),Object(g.a)(h.a)((function(e){e.theme;return{"& fieldset":{borderWidth:"1px !important",borderColor:"#ced4da !important"},borderRadius:10,margin:20,height:33}})));function C(e){var t=e.value,n=e.onChange,r=e.startSearch;return Object(w.jsx)(y,{value:t,onChange:n,fullWidth:!0,placeholder:"Search goals, friends, companies, donees or Ngo\xb4s",style:{fontSize:14},endAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(m.a,{onClick:r,component:x.a,icon:v.a,sx:{color:"#99CAFF",height:22,width:22,cursor:"pointer"}})})})}var k=n(2034),I=n(34),S=n(25),R=function(e){var t=e.item,n=Object(S.g)();return Object(w.jsx)(L,{direction:"column",justifyContent:"flex-end",alignItems:"flex-start",style:{backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",borderRadius:10},onClick:function(){return n("../viewgoal/".concat(t.slug))},children:Object(w.jsxs)("div",{className:"image-card-gradient-cnt",children:[Object(w.jsx)(A,{variant:"body1",children:t.title}),Object(w.jsx)(E,{children:"Endorsed by"}),Object(w.jsx)(E,{children:t.profile.ngo_username})]})})},L=Object(g.a)(u.a)((function(){return{width:120,height:200,borderStyle:"solid",borderColor:"#9260cc #47afe4 #2e80b1 #5758c6",borderRadius:10}})),A=Object(g.a)(d.a)((function(){return{color:"#CED4DA",fontSize:14}})),E=Object(g.a)(d.a)((function(){return{color:"#2A9DC1",fontSize:10}})),z=n(38),F=n(7),W=n(6),_=n(126),P=n(2007),B=n(339),D=(n(2285),function(e){var t=e.item,n=Object(k.b)().width,r=f(),i=Object(S.g)();return Object(w.jsxs)(K,{direction:"column",justifyContent:"flex-start",sx:{minWidth:n>1200?.27*n:330,maxWidth:n>1200?.27*n:330},children:[Object(w.jsxs)(u.a,{direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(w.jsxs)(c.a,{item:!0,md:8,sm:12,children:[Object(w.jsx)(T,{children:t.title}),Object(w.jsxs)(d.a,{className:r.endorsedby,children:["Endorsed by ",t.profile.ngo_username]})]}),Object(w.jsx)(c.a,{item:!0,md:4,sm:12,children:Object(w.jsxs)(_.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(w.jsx)(P.a,{thickness:4,size:100,variant:"determinate",sx:Object(W.a)({color:"#4F89A0"},"& .".concat(B.a.circle),{strokeLinecap:"round"}),value:t.percentage}),Object(w.jsx)(_.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(w.jsxs)(Q,{children:[t.percentage,"%"]})})]})})]}),Object(w.jsx)(c.a,{container:!0,direction:"row",className:"support-amount-title",children:Object(w.jsxs)(N,{children:["US$ ",t.paid_amount," ",Object(w.jsxs)(J,{children:[" of US$ ",t.total_amount]})]})}),Object(w.jsx)(G,{onClick:function(){return i("../viewgoal/".concat(t.slug))},children:"See more"})]})}),T=Object(F.a)(d.a)((function(){return{color:"#212529",fontWeight:600,fontSize:20}})),N=Object(F.a)("span")((function(){return{color:"#4F89A0",fontSize:24,fontWeight:"bold"}})),G=Object(F.a)(d.a)((function(){return{color:"#007AFF",fontSize:20,fontWeight:400,textAlign:"center",cursor:"pointer",paddingTop:5}})),Q=Object(F.a)(d.a)((function(){return{color:"#A6CAD2",fontSize:20,fontWeight:600}})),J=Object(F.a)("span")((function(){return{color:"#343A40",fontWeight:300,fontSize:16}})),K=Object(F.a)(u.a)((function(){return{backgroundColor:"#EEF8FF",borderRadius:10,margin:10,padding:10}})),M=n(2043),U=n(2042),$=n(67),V=function(){var e=Object(z.c)((function(e){return e.AuthReducer})),t=Object($.a)(),n=Object(I.useQuery)(["PopularGoalsListData",e.userInfo.access],Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/supported-goals/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))),r=n.data,c=n.isLoading,i=n.isError;n.error;return Object(w.jsx)(w.Fragment,{children:!c&&!i&&r&&(null===r||void 0===r?void 0:r.length)>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(q,{children:"Goals you supported"}),Object(w.jsx)(j.a,{renderPagination:function(e){var t=e.pages,n=e.activePage,r=e.onClick;return Object(w.jsx)(U.a,{pages:t,activePage:n,onClick:r})},isRTL:!1,itemsToShow:1,renderArrow:M.a,children:r.map((function(e,t){return Object(w.jsx)(D,{item:e},t)}))})]})})},q=Object(F.a)(d.a)((function(){return{color:"#212529",fontSize:24,fontWeight:"bold"}})),H=n(235),X=n(236),Y=function(){var e=f(),t=Object(g.a)(u.a)((function(){return{borderRadius:5,maxWidth:100}})),n=Object(k.b)().width,r=Object($.a)(),o=Object(l.useRef)(null),b=function(e){var t;null===(t=o.current)||void 0===t||t.call(o,e)},h=Object(I.useQuery)(["SdgsListData"],Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/sdgs-list/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),O=h.data,x=h.isError,m=Object(I.useQuery)(["PopularGoalsListData"],Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/popular-goals/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),p=m.data,v=m.isError;Object(l.useEffect)((function(){x&&b("API Error"),v&&b("API Error")}),[x,v]);var y=Object(S.g)(),L=Object(l.useState)(""),A=Object(i.a)(L,2),E=A[0],F=A[1],W=Object(l.useState)(!1),_=Object(i.a)(W,2),P=_[0],B=_[1],D=Object(z.c)((function(e){return e.AuthReducer}));return Object(w.jsx)(X.ErrorBoundary,{fallbackRender:function(e){var t=e.error,n=e.resetErrorBoundary;return Object(w.jsx)(H.a,{error:t,resetErrorBoundary:n})},onReset:function(){return B(!1)},resetKeys:[P],children:P?null:Object(w.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"flex-start",spacing:3,sx:{padding:3},children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{style:{fontSize:40,color:"#212529",width:250,height:50},variant:"h5",children:"People"}),Object(w.jsxs)(c.a,{container:!0,direction:"row",children:[Object(w.jsxs)(d.a,{variant:"h5",className:e.headerLeftSub,style:{width:250,height:50},children:["empowering"," "]}),Object(w.jsx)(d.a,{style:{fontSize:40,height:50},variant:"h5",children:"people"})]})]}),Object(w.jsx)(C,{value:E,onChange:function(e){return F(e.target.value)},startSearch:function(){return y("../search",{state:{searchTerm:E}})}}),Object(w.jsx)(q,{children:"Browse Goal by Category"}),Object(w.jsx)(j.a,{isRTL:!1,itemsToShow:n<400?2:3,renderArrow:M.a,renderPagination:function(e){var t=e.pages,n=e.activePage,r=e.onClick;return Object(w.jsx)(U.a,{pages:t,activePage:n,onClick:r})},children:O&&O.map((function(n,r){return Object(w.jsx)(t,{direction:"column",justifyContent:"center",alignItems:"center",onClick:function(){return y("../singlecategory",{state:{item:n}})},style:{cursor:"pointer"},children:Object(w.jsx)("img",{src:null!==n.thumbnail?n.thumbnail:"",alt:"cateImage",className:e.categoryImage})},"".concat(r))}))}),Object(w.jsx)(q,{children:"Popular Goals"}),Object(w.jsx)(j.a,{isRTL:!1,itemsToShow:n<500?2:3,renderArrow:M.a,renderPagination:function(e){var t=e.pages,n=e.activePage,r=e.onClick;return Object(w.jsx)(U.a,{pages:t,activePage:n,onClick:r})},children:void 0!==p&&p.map((function(e){return Object(w.jsx)("div",{style:{margin:10},children:Object(w.jsx)(R,{item:e})},e.slug)}))}),D.isLoggedIn&&Object(w.jsx)(V,{})]})})},Z=n(22),ee=n(127),te=n(81),ne=n(69),re=function(e){var t=Object(k.b)().width;return Object(w.jsx)("div",{children:t>500?Object(w.jsx)(ne.a,{sx:{height:"100vh","& .simplebar-content":{height:"100%",display:"flex",flexDirection:"column"}},children:e.children}):Object(w.jsx)("div",{children:e.children})})},ce=n(233),ie=n(2073),oe=n.n(ie),ae=n(190),se=n(2025),le=n(2056),ue=n(2057),de=n(2058),je=n(2059),be=n(2153),fe=n(2088),ge=n(2089),he=n(2020),Oe=n(234),xe=n(2154),me=n.n(xe),pe=n(68),ve=n(27),we=n(2060),ye=Object(g.a)(he.a)((function(){return{marginLeft:60,marginBottom:10,marginTop:10,borderRadius:7,cursor:"pointer",justifyContent:"center",alignItems:"center",display:"flex"}})),Ce=Object(g.a)(d.a)((function(){return{fontSize:17,textTransform:"capitalize",color:"#007AFF",wordBreak:"break-word",width:150,cursor:"pointer",fontWeight:600}})),ke=Object(g.a)(d.a)((function(){return{color:"#6C757D",fontSize:13,fontWeight:400,wordBreak:"break-word",width:150}})),Ie=Object(g.a)("span")((function(){return{color:"#007AFF",fontSize:13,fontWeight:400,textTransform:"capitalize",wordBreak:"break-word",width:150,cursor:"pointer"}})),Se=Object(g.a)(c.a)((function(){return{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-around"}})),Re=function(e){var t=e.goalItem,n=e.keyy,r=e.handleLike,o=Object(k.b)().width,d=Object(z.c)((function(e){return e.AuthReducer})),j=Object(l.useState)(!1),b=Object(i.a)(j,2),f=b[0],g=b[1],h=Object(l.useRef)(null),O=Object(l.useRef)(null),m=Object(S.g)(),p=function(){return m("../viewgoal/".concat(t.slug))},v=function(e){var t;null===(t=O.current)||void 0===t||t.call(O,e)},y=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.isLoggedIn&&t?Object(te.n)(t,d.userInfo.access).then((function(e){!0===e.is_like||!1===e.is_like?r():v("Something went wrong")})):m("../login");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.isLoggedIn&&t?Object(te.o)(t,d.userInfo.access).then((function(e){!0===e.is_saved||!1===e.is_saved?r():v("Something went wrong")})):m("../login");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.isLoggedIn&&t.profile.id?Object(te.l)("profile-follow",t.profile.id,d.userInfo.access).then((function(e){!0===e.is_followed||!1===e.is_followed?r():v("Something went wrong")})):m("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?g(!0):g(!1)}))}),{rootMargin:"0px",threshold:[.25,.75]});h.current&&e.observe(h.current)}));return Object(w.jsxs)("div",{ref:h,children:[Object(w.jsx)(pe.a,{children:function(e){O.current=e}}),Object(w.jsx)(c.a,{item:!0,sm:6,xs:12,md:4,sx:{marginBottom:2,minWidth:o<500?350:400,borderRadius:7},children:Object(w.jsxs)(ce.a,{sx:{boxShadow:ve.a.z1},children:[Object(w.jsxs)(u.a,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,sx:{padding:1},children:[Object(w.jsx)(ae.a,{src:t.profile.profile_image}),Object(w.jsxs)(u.a,{direction:"column",justifyContent:"flex-start",spacing:0,sx:{padding:1},children:[Object(w.jsxs)(Ce,{onClick:function(){return m("../profiledetailother",{state:{goalID:t.profile.id}})},children:["@",t.profile.profile_username]}),Object(w.jsxs)(ke,{gutterBottom:!0,children:["Endrosed by"," ",Object(w.jsxs)(Ie,{children:["@",t.profile.ngo_username]})]})]}),Object(w.jsx)(Oe.a,{onClick:I,"aria-label":"FollowButton",children:Object(w.jsx)("img",{src:d.isLoggedIn&&t.is_followed?ge.a:fe.a,style:{width:80}})})]}),Object(w.jsxs)(Se,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(w.jsx)(c.a,{item:!0,xs:9,children:Object(w.jsx)(ye,{onClick:p,sx:{height:o<500?350:450},children:Object(w.jsx)(oe.a,{style:{borderRadius:7,borderColor:"rgb(146, 96, 204) rgb(71, 175, 228) rgb(46, 128, 177) rgb(87, 88, 198)",borderStyle:"solid"},height:o<500?340:440,width:o<500?260:300,url:t.goal_media[0].file,loop:!0,playing:f,controls:!0,muted:!0,config:{file:{attributes:{controlsList:"nodownload noplaybackrate",disablePictureInPicture:"true"}}}})})}),Object(w.jsx)(c.a,{item:!0,xs:3,children:Object(w.jsxs)(u.a,{direction:"column",justifyContent:"flex-end",alignItems:"center",spacing:2,children:[Object(w.jsx)("div",{children:Object(w.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(se.a,{"aria-label":"share",onClick:function(){return m("../donate",{state:{slug:t.slug}})},children:Object(w.jsx)("img",{src:be.a,alt:"logo",className:"cardIcons"})}),Object(w.jsx)("p",{})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(se.a,{onClick:function(){return y(t.id)},"aria-label":"like",children:Object(w.jsx)("img",{src:d.isLoggedIn&&t.is_liked?ue.a:le.a,alt:"logo",className:"cardIcons"})}),Object(w.jsx)("p",{children:t.total_like_count})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(se.a,{onClick:p,"aria-label":"share",children:Object(w.jsx)(x.a,{icon:me.a,width:22,height:22,color:"#007AFF"})}),Object(w.jsx)("p",{children:t.total_comment_count})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(se.a,{onClick:function(){return C(t.id)},"aria-label":"add to save",children:Object(w.jsx)("img",{src:d.isLoggedIn&&t.is_saved?je.a:de.a,style:{height:30,width:30},alt:"logo",className:"cardIcons"})}),Object(w.jsx)("p",{})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(we.a,{url:"".concat(te.c,"/viewgoal/").concat(t.slug),image:t.image}),Object(w.jsx)("p",{})]})})]})})]})]})})]},n)},Le=function(){var e=Object(z.c)((function(e){return e.AuthReducer})),t=Object(l.useRef)(),n=Object(l.useState)(!1),r=Object(i.a)(n,2),o=r[0],a=r[1],s=Object(l.useState)(!1),u=Object(i.a)(s,2),d=u[0],j=u[1],b=Object(l.useState)(""),f=Object(i.a)(b,2),g=f[0],h=f[1],O=Object(l.useState)(!1),x=Object(i.a)(O,2),m=x[0],p=x[1],v=Object(I.useQuery)(["getGoalsList",[g,e.isLoggedIn?e.userInfo.access:"",m]],(function(){return Object(te.m)(g,e.isLoggedIn?e.userInfo.access:"")}),{enabled:!0}),y=v.data,C=v.isLoading,k=Object(l.useState)([]),S=Object(i.a)(k,2),R=S[0],L=S[1];Object(l.useEffect)((function(){return R.length>0&&void 0!==(null===y||void 0===y?void 0:y.results)&&""!==g?(L((function(e){return[].concat(Object(Z.a)(e),Object(Z.a)(null===y||void 0===y?void 0:y.results))})),y.results.length>y.count&&h("")):void 0!==(null===y||void 0===y?void 0:y.results)&&L(null===y||void 0===y?void 0:y.results),function(){!0}}),[y,g]),Object(l.useEffect)((function(){y&&j(y.count>R.length)}),[R]);var A=Object(l.useCallback)((function(e){var n;t.current&&(null===(n=t.current)||void 0===n||n.disconnect()),t.current=new IntersectionObserver((function(e){if(e[0].isIntersecting&&d){var t=null===y||void 0===y?void 0:y.next,n=null===t||void 0===t?void 0:t.match(new RegExp("/goal-list/([^/]+)"));if(n){var r=n[1];h(r)}}})),e&&t.current.observe(e)}),[C,d]),E=function(){return p(!m)};return Object(w.jsx)(re,{children:Object(w.jsx)(X.ErrorBoundary,{fallbackRender:function(e){var t=e.error,n=e.resetErrorBoundary;return Object(w.jsx)(H.a,{error:t,resetErrorBoundary:n})},onReset:function(){return a(!1)},resetKeys:[o],children:R===[]?Object(w.jsx)(ee.a,{}):Object(w.jsx)(c.a,{container:!0,direction:"column",style:{padding:20},justifyContent:"center",alignItems:"flex-end",children:void 0!==R?R.map((function(e,t){return(null===R||void 0===R?void 0:R.length)===t+1?Object(w.jsx)("div",{ref:A,children:Object(w.jsx)(Re,{keyy:"".concat(t),goalItem:e,handleLike:E})},"".concat(t)):Object(w.jsx)("div",{children:Object(w.jsx)(Re,{keyy:"".concat(t),goalItem:e,handleLike:E})},"".concat(t))})):Object(w.jsx)("div",{})})})})};t.default=function(){return Object(w.jsx)("div",{style:{backgroundColor:"#f9f9f9",overflow:"overlay",height:"100%",width:"100%",position:"relative"},children:Object(w.jsx)(r.a,{children:Object(w.jsxs)(c.a,{container:!0,children:[Object(w.jsx)(c.a,{item:!0,xs:12,sm:12,md:5,sx:{backgroundColor:"#fff"},children:Object(w.jsx)(Y,{})}),Object(w.jsx)(c.a,{item:!0,xs:12,sm:12,md:7,sx:{backgroundColor:"#f9f9f9"},children:Object(w.jsx)(Le,{})})]})})})}}}]);
//# sourceMappingURL=29.554b85c5.chunk.js.map