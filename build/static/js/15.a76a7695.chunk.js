(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[15],{2034:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(8),i=n(1);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function r(){var e=Object(i.useState)(o()),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){function e(){r(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var c=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},2042:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(9),i=n(70),o=n(6),r=n(2018),c=n(7),s=n(41),l=n(0),d=["children","sx"],u=Object(c.a)("span")((function(e){var t=e.theme;return Object(o.a)({},t.breakpoints.up("sm"),{top:-7,zIndex:1,width:12,right:20,height:12,content:"''",position:"absolute",borderRadius:"0 0 4px 0",transform:"rotate(-135deg)",background:t.palette.background.paper,borderRight:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12)),borderBottom:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12))})}));function j(e){var t=e.children,n=e.sx,o=Object(i.a)(e,d);return Object(l.jsxs)(r.a,Object(a.a)(Object(a.a)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:Object(a.a)({mt:1.5,ml:.5,overflow:"inherit",boxShadow:function(e){return e.customShadows.z20},border:function(e){return"solid 1px ".concat(e.palette.grey[5008])},width:200},n)}},o),{},{children:[Object(l.jsx)(u,{className:"arrow"}),t]}))}},2049:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1956),i=Object(a.a)((function(e){return{commenterDate:{color:"#6C757D",fontSize:14,fontWeight:300},commenterComment:{color:"#6C757D",fontSize:14,fontWeight:300},commentername:{color:"#343A40",fontSize:16,fontWeight:600},donateButton:{color:"linear-gradient(90deg, #0077B6 23.6%, #32B2ED 100%)"},imageContainer:{padding:e.spacing(3,2),minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#343A40"},infoContainer:{padding:e.spacing(3,2),minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},buttonIcon:{margin:e.spacing(0),maxWidth:100},infoTitle:{color:"#343A40",fontWeight:500,fontSize:16},moneyGot:{color:"#4F89A0",fontWeight:800,fontSize:24},moneyGotSub:{color:"#48CAE4",fontWeight:400,fontSize:16},doneLogo:{position:"absolute",left:10,top:10,height:35,width:130},title:{color:"#007AFF",fontSize:20,fontWeight:600,textTransform:"capitalize"},titleEndorse:{color:"#6C757D",fontSize:13,fontWeight:400,textTransform:"capitalize"},titleEndorseBy:{color:"#007AFF",fontSize:13,fontWeight:400,textTransform:"capitalize"},submit:{"&.MuiButton-outlinedSecondary":{border:"2px solid",borderImageSlice:1,borderImageSource:"linear-gradient(to left, #007AFF, #6EEDD6)",borderRadius:4},color:"#007AFF"},closeLogo:{position:"absolute",right:10,top:10,height:25,width:25},media:{height:550,borderRadius:7,borderWidth:3,borderColor:"#A317E4",borderStyle:"solid"},avatar:{height:60,width:60,borderRadius:30},avatarSmall:{height:25,width:25},avatarSmallForComment:{height:25,width:25,marginTop:-12}}}))},2058:function(e,t,n){"use strict";t.a=n.p+"static/media/heart.933870ca.svg"},2059:function(e,t,n){"use strict";t.a=n.p+"static/media/heartfilled.26030ede.svg"},2060:function(e,t,n){"use strict";t.a=n.p+"static/media/pin_outline.81a857b6.svg"},2061:function(e,t,n){"use strict";t.a=n.p+"static/media/pin.a3c66b70.svg"},2062:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(9),i=n(10),o=n.n(i),r=n(18),c=n(8),s=n(1),l=n(41),d=n(2025),u=n(2026),j=n(188),b=n(66),m=n(2105),h=n(2106),g=n(2107),f=n(2108),O=n(2109),p=n(2110),x=n.p+"static/media/share_blue.53116634.svg",v=n(2042),_=n(69),y=n(0);function w(e){var t=e.url,n=e.image,i=Object(s.useRef)(null),w=Object(s.useState)(!1),S=Object(c.a)(w,2),C=S[0],I=S[1],k=function(){var e=Object(r.a)(o.a.mark((function e(){var a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="url=".concat(t," image=").concat(n),e.next=3,fetch("http://localhost:5000/post?".concat(a));case 3:i=e.sent,console.log(i.status),I(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(t),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.a,{ref:i,size:"large",color:C?"primary":"default",onClick:k,sx:Object(a.a)({},C&&{bgcolor:function(e){return Object(l.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(y.jsx)("img",{src:x})}),Object(y.jsx)(v.a,{open:C,onClose:function(){I(!1)},anchorEl:i.current,sx:{width:360},children:Object(y.jsx)(_.a,{sx:{height:{xs:340,sm:"auto"}},children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(m.a,{url:t,children:Object(y.jsxs)(j.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(y.jsx)(h.a,{size:25,round:!0}),Object(y.jsx)(b.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Twitter"})]})}),Object(y.jsx)(g.a,{url:t,children:Object(y.jsxs)(j.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(y.jsx)(f.a,{size:25,round:!0}),Object(y.jsx)(b.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Facebook"})]})}),Object(y.jsx)(O.a,{url:t,children:Object(y.jsxs)(j.a,{direction:"row",justifyContent:"center",alignItems:"center",pl:2,pt:1,children:[Object(y.jsx)(p.a,{size:25,round:!0}),Object(y.jsx)(b.a,{sx:{fontSize:16,paddingLeft:5,color:"black",fontWeight:"500"},children:"Share To Whatsapp"})]})})]})})})]})}},2074:function(e,t,n){"use strict";n(1);var a=n(346),i=n(66),o=n(2049),r=n(25),c=n(0);t.a=function(e){var t=e.userName,n=e.image,s=e.endorser,l=e.profileID,d=Object(o.a)(),u=Object(r.g)();return Object(c.jsx)("div",{children:Object(c.jsxs)(a.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:d.avatar,src:n,alt:"Paella dish"})}),Object(c.jsx)("div",{style:{width:20}}),Object(c.jsxs)(a.a,{children:[Object(c.jsx)("div",{onClick:function(){return u("../../profiledetailother",{state:{goalID:l}})},children:Object(c.jsxs)(i.a,{style:{cursor:"pointer"},variant:"body1",gutterBottom:!0,className:d.title,children:["@",t]})}),Object(c.jsxs)(i.a,{variant:"body1",gutterBottom:!0,className:d.titleEndorse,children:["Endorsed By"," ",Object(c.jsxs)("span",{style:{cursor:"pointer"},className:d.titleEndorseBy,children:["@",s]})]})]})]})})}},2076:function(e,t,n){"use strict";var a=n(10),i=n.n(a),o=n(18),r=n(346),c=n(66),s=n(190),l=n(234),d=n(1),u=n.p+"static/media/comment.024c9246.svg",j=n(2058),b=n(2059),m=n(2060),h=n(2061),g=n(1956),f=n(2030),O=n(0),p=Object(g.a)({root:{height:10,borderRadius:5},bar:{borderRadius:5,background:"linear-gradient(90deg, #006EFF 0%, #4CC9F0 50.73%, #6EEDD6  100%)"}});function x(e){var t=e.percentage,n=p();return Object(O.jsx)("div",{className:n.root,children:Object(O.jsx)(f.a,{classes:{root:n.root,bar:n.bar},variant:"determinate",value:t})})}var v=n(2049),_=n(38),y=n(81),w=n(25),S=n(68),C=n(2062);t.a=function(e){var t=e.goalID,n=e.isLiked,a=e.isSaved,g=e.title,f=e.total_amount,p=e.paid_amount,I=e.supporters,k=e.total_donor,D=(e.goal_likes,e.comments,e.handleNewComment),N=e.total_like_count,z=e.total_comment_count,E=e.slug,R=Object(_.c)((function(e){return e.AuthReducer})),L=Object(w.g)(),F=Object(v.a)(),W=100*parseInt(p||"0")/parseInt(f||"0"),A=Object(d.useRef)(null),B=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.isLoggedIn&&t?Object(y.n)(t,R.userInfo.access).then((function(e){!0===e.is_like||!1===e.is_like?D():V("Something went wrong")})):L("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.isLoggedIn&&t?Object(y.o)(t,R.userInfo.access).then((function(e){!0===e.is_saved||!1===e.is_saved?D():V("Something went wrong")})):L("../login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t;null===(t=A.current)||void 0===t||t.call(A,e)},G=function(e){null!==e&&L("../profiledonorother",{state:{goalID:e}})};return Object(O.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"flex-start",style:{padding:40},children:[Object(O.jsx)(S.a,{children:function(e){A.current=e}}),Object(O.jsx)(c.a,{variant:"body1",gutterBottom:!0,className:F.infoTitle,children:g}),Object(O.jsxs)(c.a,{variant:"body1",gutterBottom:!0,className:F.moneyGot,align:"left",children:["US $",Number(p).toLocaleString()," ",Object(O.jsxs)("span",{className:F.moneyGotSub,children:[" ","of US $",Number(f).toLocaleString()]})]}),Object(O.jsx)(x,{percentage:W}),Object(O.jsx)("div",{style:{height:20}}),Object(O.jsx)(r.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:void 0!==I&&(null===I||void 0===I?void 0:I.length)>=1&&(null===I||void 0===I?void 0:I.length)>=5?null===I||void 0===I?void 0:I.slice(0,6).map((function(e){return Object(O.jsx)(s.a,{onClick:function(){return G(e.user.id)},src:e.user.image,sx:{height:50,width:50,marginRight:1,cursor:"pointer"}})})):null===I||void 0===I?void 0:I.map((function(e){return Object(O.jsx)(s.a,{onClick:function(){return G(e.user.id)},src:e.user.image,sx:{height:50,width:50,marginRight:1,cursor:"pointer"}})}))}),void 0!==I&&(null===I||void 0===I?void 0:I.length)>=1&&k&&Object(O.jsxs)(c.a,{variant:"body1",pt:1,pb:1,style:{cursor:"pointer"},className:F.titleEndorseBy,onClick:function(){return G(I[0].user.id)},children:["@",I[0].user.username," ",Object(O.jsxs)("span",{style:{color:"#000000",cursor:"default"},children:[" ","0"!==k?"and ".concat(k," more people"):""," donate to this goal"," "]})]}),Object(O.jsxs)(r.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(O.jsx)(l.a,{onClick:B,className:F.buttonIcon,startIcon:Object(O.jsx)("img",{src:R.isLoggedIn&&n?b.a:j.a,alt:"logo",className:"cardIcons"}),children:N}),Object(O.jsx)(l.a,{className:F.buttonIcon,startIcon:Object(O.jsx)("img",{src:u,alt:"logo",className:"cardIcons"}),children:z}),Object(O.jsx)(l.a,{onClick:T,className:F.buttonIcon,startIcon:Object(O.jsx)("img",{src:R.isLoggedIn&&a?h.a:m.a,style:{height:30,width:30},alt:"logo",className:"cardIcons"})}),Object(O.jsx)(C.a,{url:"".concat(y.c,"/viewgoal/").concat(E),image:"https://donee.s3.amazonaws.com/media/images/goal_images/photo-1488521787991-ed7bbaae773c_e4nGOZ5.jpeg"})]})]})}},2154:function(e,t,n){},2349:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n.n(a),o=n(18),r=n(8),c=n(191),s=n(346),l=n(1),d=n(25),u=n(188),j=n(344),b=n(240),m=n(2076),h=n(2074),g=n(2034),f=n(0),O=function(e){var t=e.data,n=e.cngRefreshState,a=Object(g.b)().height;return Object(f.jsx)(s.a,{item:!0,xs:12,sm:4,md:4,children:Object(f.jsx)(b.a,{style:{maxHeight:a-60},forceVisible:"y",autoHide:!1,children:Object(f.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,sx:{padding:2},children:[Object(f.jsx)(h.a,{profileID:t.profile,image:t.profile_image,userName:t.profile_username,endorser:t.ngo_username}),Object(f.jsx)(p,{src:t.image,alt:"GoalImg"}),Object(f.jsx)(m.a,{slug:t.slug,goalID:t.id,isLiked:null===t||void 0===t?void 0:t.is_liked,isSaved:null===t||void 0===t?void 0:t.is_saved,title:t.title,total_amount:t.total_amount,paid_amount:t.paid_amount,supporters:t.goal_payment,total_donor:t.donor_count,goal_likes:t.goal_likes,comments:t.goal_comment,total_like_count:t.total_like_count,total_comment_count:t.total_comment_count,handleNewComment:n})]})})})},p=Object(j.a)("img")((function(){return{height:150,width:150,borderRadius:10}})),x=n(9),v=n(2013),_=n(2012),y=n(234),w=(n.p,n.p,n(126)),S=n(2356),C=n(2119),I=n(2010);n(2154);function k(e){return"".concat(e," $")}function D(e){var t=e.handleChangeAmount,n=e.handleDonationButton,a=e.handleRadioChangeSlider,i=e.amount,o=e.value,r=e.maxValueOfSlider;return Object(f.jsx)(c.a,{maxWidth:"md",children:Object(f.jsxs)(w.a,{className:"donation_amount",children:[Object(f.jsx)("h2",{children:"Donation amount"}),Object(f.jsxs)("h3",{children:["$",i]}),Object(f.jsx)(S.a,{value:i,min:1,step:.1,max:r,getAriaValueText:k,valueLabelFormat:k,onChange:t,valueLabelDisplay:"auto","aria-labelledby":"non-linear-slider"}),Object(f.jsxs)(s.a,{className:"random-donation-div",container:!0,spacing:2,children:[[10,30,50,100,150].map((function(e){return Object(f.jsx)(s.a,{item:!0,xs:2,children:Object(f.jsx)(y.a,{onClick:function(){return n(e)},className:"random-donation",children:e.toLocaleString()})})})),Object(f.jsx)(s.a,{item:!0,xs:2,children:Object(f.jsx)(y.a,{onClick:function(){return n(r)},className:"random-donation",children:"Fulfill"})})]}),Object(f.jsxs)(s.a,{className:"set-donation-amount",container:!0,spacing:2,children:[Object(f.jsx)(s.a,{item:!0,xs:3,children:Object(f.jsx)(w.a,{sx:{paddingTop:"10px"},children:Object(f.jsx)("span",{children:"Donation amount"})})}),Object(f.jsx)(s.a,{item:!0,xs:3,children:Object(f.jsx)(v.a,{children:Object(f.jsx)(_.a,{label:"$",value:i.toLocaleString(),type:"number",onChange:function(e){return n(e.target.value)}})})})]}),Object(f.jsx)(C.a,{label:"Dedicate my donation",control:Object(f.jsx)(I.a,{checked:o,onChange:a})})]})})}var N=n(128),z=n(260),E=n(81),R=n(38),L=n(68),F=n(82),W=function(e){var t=e.goalID,n=e.maxValueOfSlider,a=Object(l.useRef)(null),d=Object(l.useRef)(null),j=Object(g.b)().height,m=Object(R.c)((function(e){return e.AuthReducer.userInfo})),h=Object(l.useState)(Object(x.a)(Object(x.a)({},N.e),{},{goal:t})),O=Object(r.a)(h,2),p=O[0],w=O[1],S=Object(l.useState)(!1),C=Object(r.a)(S,2),I=C[0],k=C[1],W=Object(l.useState)(""),B=Object(r.a)(W,2),T=(B[0],B[1]),V=Object(l.useState)(!1),G=Object(r.a)(V,2),H=G[0],P=G[1],$=function(e){var t;null===(t=a.current)||void 0===t||t.call(a,e)},M=function(e){var t;null===(t=d.current)||void 0===t||t.call(d,e)};return Object(f.jsxs)(s.a,{item:!0,xs:12,sm:6,md:8,children:[Object(f.jsx)(L.a,{children:function(e){a.current=e}}),Object(f.jsx)(F.a,{children:function(e){d.current=e}}),Object(f.jsx)(b.a,{style:{maxHeight:j-60},forceVisible:"y",autoHide:!1,children:Object(f.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,sx:{padding:2},children:[Object(f.jsx)(D,{handleChangeAmount:function(e,t){"number"===typeof t&&w(Object(x.a)(Object(x.a)({},p),{},{amount:t}))},amount:p.amount,handleRadioChangeSlider:function(e){P(e.target.checked),e.target.checked?(T(e.target.value),w(Object(x.a)(Object(x.a)({},p),{},{is_dedicated:!0}))):(T(""),w(Object(x.a)(Object(x.a)({},p),{},{is_dedicated:!1})))},value:H,maxValueOfSlider:n,handleDonationButton:function(e){0!==e&&w(Object(x.a)(Object(x.a)({},p),{},{amount:e}))}}),H&&Object(f.jsx)(c.a,{maxWidth:"md",children:Object(f.jsxs)(A,{className:"donation_amount",children:[Object(f.jsx)("h2",{children:"Dedicatory information"}),Object(f.jsxs)(v.a,{fullWidth:!0,component:"fieldset",variant:"standard",children:[Object(f.jsx)(_.a,{style:{paddingTop:"14px",paddingBottom:"12px"},name:"name",label:"Name",defaultValue:"",value:p.dedicated_name,onChange:function(e){return w(Object(x.a)(Object(x.a)({},p),{},{dedicated_name:e.target.value}))}}),Object(f.jsx)(_.a,{style:{paddingTop:"14px",paddingBottom:"12px"},name:"email",label:"Email",defaultValue:"",value:p.dedicated_email,onChange:function(e){return w(Object(x.a)(Object(x.a)({},p),{},{dedicated_email:e.target.value}))}}),Object(f.jsx)(_.a,{name:"message",label:"Message",multiline:!0,rows:4,defaultValue:"",value:p.dedicated_message,onChange:function(e){return w(Object(x.a)(Object(x.a)({},p),{},{dedicated_message:e.target.value}))}})]})]})}),!I&&Object(f.jsx)(y.a,{sx:{margin:2},variant:"contained",onClick:function(){p.amount>0?!0===p.is_dedicated&&""===p.dedicated_name?$("Dedication name can't be empty"):!0===p.is_dedicated&&""===p.dedicated_email?$("Dedication email can't be empty"):!0===p.is_dedicated&&!1===/(.+)@(.+){2,}\.(.+){2,}/.test(p.dedicated_email)?$("Dedication email should be valid"):!0===p.is_dedicated&&""===p.dedicated_message?$("Dedication message can't be empty"):!0===p.is_gift_dedicated&&""===p.dedicated_gift_message?$("Gift message can't be empty"):k(!0):$("Donation Can't be 0")},children:"Donate"}),I&&Object(f.jsx)(z.a,{style:{layout:"horizontal"},createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:p.amount.toString()}}]})},onApprove:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.g)(p,m.access);case 2:return a=e.sent,console.log(a),e.abrupt("return",n.order.capture().then((function(e){var t={order_id:e.id,payment:a.id};"COMPLETED"===e.status&&Object(E.j)(t,m.access).then((function(e){"error"===e?$("Donation failed"):M("Donation is Completed")}))})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onCancel:function(e,t){return k(!1),t.redirect()}})]})})]})},A=Object(j.a)("div")((function(){return{minHeight:150,borderRadius:24,border:"1px solid #48CAE4",boxSizing:"-moz-initial",padding:20}})),B=(Object(j.a)("img")((function(){return{height:70,width:70,borderRadius:10}})),n(34)),T=n(351),V=n(92),G=n(127),H=n(67);t.default=function(){var e=Object(d.g)(),t=Object(R.c)((function(e){return e.AuthReducer})),n=Object(l.useState)(0),a=Object(r.a)(n,2),u=a[0],j=a[1],b=Object(d.f)(),m=b.state?b.state:{slug:""},h=Object(l.useState)(!0),g=Object(r.a)(h,2),p=g[0],x=g[1],v=Object(H.a)(),_=Object(B.useQuery)(["getSingleGoal",[null===m||void 0===m?void 0:m.slug,t.isLoggedIn?t.userInfo.access:"",!1,p]],Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/retrieve-goal/".concat(m.slug));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),y=_.data,w=_.isLoading,S=_.isError,C=_.error;return Object(l.useEffect)((function(){if(t.userInfo.is_account_created||e("../createprofiledonor"),null!==y&&y){var n=parseFloat(y.total_amount?y.total_amount:"0")-parseFloat(y.paid_amount?y.paid_amount:"0");j(n)}}),[t.userInfo.is_account_created,y]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(c.a,{children:Object(f.jsx)(T.a,{children:!1===w?Object(f.jsx)("div",{children:S?Object(f.jsx)(V.a,{error:C||new Error("Network response was not ok.")}):null!==y&&void 0!==y?Object(f.jsxs)(s.a,{container:!0,component:"main",children:[Object(f.jsx)(O,{data:y,cngRefreshState:function(){x(!p)}}),Object(f.jsx)(W,{goalID:y.id,maxValueOfSlider:u})]}):Object(f.jsx)("div",{children:Object(f.jsx)(G.a,{})})}):Object(f.jsx)(G.a,{})})})})}}}]);
//# sourceMappingURL=15.a76a7695.chunk.js.map