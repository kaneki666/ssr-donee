(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[27],{2041:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(9),r=n(70),a=n(6),o=n(2019),i=n(7),s=n(41),l=n(0),u=["children","sx"],j=Object(i.a)("span")((function(e){var t=e.theme;return Object(a.a)({},t.breakpoints.up("sm"),{top:-7,zIndex:1,width:12,right:20,height:12,content:"''",position:"absolute",borderRadius:"0 0 4px 0",transform:"rotate(-135deg)",background:t.palette.background.paper,borderRight:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12)),borderBottom:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12))})}));function b(e){var t=e.children,n=e.sx,a=Object(r.a)(e,u);return Object(l.jsxs)(o.a,Object(c.a)(Object(c.a)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:Object(c.a)({mt:1.5,ml:.5,overflow:"inherit",boxShadow:function(e){return e.customShadows.z20},border:function(e){return"solid 1px ".concat(e.palette.grey[5008])},width:200},n)}},a),{},{children:[Object(l.jsx)(j,{className:"arrow"}),t]}))}},2055:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(83),r=function(e){return function(t){t({type:c.b,payload:e})}}},2064:function(e,t,n){"use strict";t.a=n.p+"static/media/doneelogo.c9e2e609.svg"},2113:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var c=n(9),r=n(8),a=n(10),o=n.n(a),i=n(18),s=n(1),l=n(60),u=n(33),j=n(2159),b=n.n(j),d=n(2160),O=n.n(d),h=n(2161),f=n.n(h),x=n(2162),p=n.n(x),A=n(41),g=n(2374),v=n(2375),m=n(190),C=n(2006),w=n(66),y=n(126),k=n(2026),I=n(2363),R=n(2002),E=n(2027),B=n(2376),S=n(234),N=n(69),U=n(2041),G=n(81),Y=n(38),W=n(67),z=n(25),D=n(1958),L=n(0);function Q(e){var t=e.notification,n=e.handleRefetch,c=e.handleClose,r=t.id,a=t.text,s=t.type,l=t.identifier,j=t.from_user,b=(t.to_user,t.created_at),d=t.is_read,h=Object(W.a)(),x=Object(z.g)(),A=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.put("/live-notification-read-update/".concat(r,"/"),{is_read:!0}).then((function(e){switch(c(),s){case"PROFILE_FOLLOW":x("../profiledonorother",{state:{goalID:l}});break;case"DONEE_INVITATION_ACCEPT":x("../profiledetailother",{state:{goalID:parseInt(l)}});break;case"GOAL_LIKE":case"DONATION":x("../viewgoal/".concat(l))}200===e.status&&n()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(g.a,{onClick:A,disableGutters:!0,sx:{py:1.5,px:2.5,mt:"1px",backgroundColor:!1===d?"#fcfcfc":"white"},children:[Object(L.jsx)(v.a,{children:Object(L.jsx)(m.a,{sx:{bgcolor:"background.neutral"},src:j.image})}),Object(L.jsx)(C.a,{primary:a,secondary:Object(L.jsxs)(w.a,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.disabled"},children:[Object(L.jsx)(y.a,{component:u.a,icon:O.a,sx:{mr:.5,width:16,height:16}}),Object(D.a)(new Date(b))]})}),Object(L.jsx)(u.a,{icon:d?f.a:p.a})]},"".concat(r))}function K(e){var t=e.iconColor,n=Object(W.a)(),a=Object(s.useRef)(null),j=Object(s.useRef)(null),d=Object(s.useState)(!1),O=Object(r.a)(d,2),h=O[0],f=O[1],x=Object(s.useState)(!0),p=Object(r.a)(x,2),g=p[0],v=p[1],m=Object(s.useState)(0),C=Object(r.a)(m,2),z=(C[0],C[1],Object(s.useState)()),D=Object(r.a)(z,2),K=D[0],F=D[1],M=Object(Y.c)((function(e){return e.AuthReducer.userInfo.user_id})),V=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/live-notification-list");case 2:t=e.sent,F(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){V()}),[g]);var J=function(){return v(!g)};Object(s.useEffect)((function(){j.current=new WebSocket(G.q),j.current.onopen=function(){},j.current.onclose=function(){},j.current.onmessage=function(e){JSON.parse(e.data).to_user===M&&J()};var e=j.current;return function(){e.close()}}),[g]);var P=function(){f(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(k.a,{ref:a,size:"large",color:h?"primary":"default",onClick:function(){f(!0)},sx:Object(c.a)({color:t},h&&{bgcolor:function(e){return Object(A.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(L.jsx)(I.a,{badgeContent:K?K.unread_count:0,color:"error",children:Object(L.jsx)(u.a,{icon:b.a,width:20,height:20})})}),Object(L.jsxs)(U.a,{open:h,onClose:P,anchorEl:a.current,sx:{width:360},children:[Object(L.jsx)(y.a,{sx:{display:"flex",alignItems:"center",py:2,px:2.5},children:Object(L.jsx)(y.a,{sx:{flexGrow:1},children:Object(L.jsx)(w.a,{variant:"subtitle1",children:"Notifications"})})}),Object(L.jsx)(R.a,{}),Object(L.jsx)(N.a,{sx:{maxHeight:{xs:340,sm:"auto"}},children:Object(L.jsx)(E.a,{disablePadding:!0,subheader:Object(L.jsx)(B.a,{disableSticky:!0,sx:{py:1,px:2.5,typography:"overline"},children:"New"}),children:K&&K.list.length>20?K.list.slice(0,21).map((function(e){return Object(L.jsx)(Q,{notification:e,handleRefetch:J,handleClose:P},e.id)})):K&&K.list.map((function(e){return Object(L.jsx)(Q,{notification:e,handleRefetch:J,handleClose:P},e.id)}))})}),Object(L.jsx)(R.a,{}),Object(L.jsx)(y.a,{sx:{p:1},children:Object(L.jsx)(S.a,{fullWidth:!0,disableRipple:!0,component:l.b,to:"#",children:"View All"})})]})]})}},2158:function(e,t){t.__esModule=!0,t.default={body:'<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" fill="currentColor"/>',width:1024,height:1024}},2354:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var c=n(38),r=n(25),a=n(8),o=n(1),i=n.n(o),s=n(2324),l=n(2024),u=n(2026),j=n(2028),b=n(33),d=n(2158),O=n.n(d),h=n(234),f=n(6),x=n(1957),p=Object(x.a)((function(e){return{grow:{flexGrow:1},appbarColor:{background:"linear-gradient(90deg, #0077b6 23%, #32b2ed 100%)"},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(f.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(f.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),A=n(2064),g=n(2041),v=n(0);function m(){var e=p(),t=Object(r.g)(),n=i.a.useState(null),c=Object(a.a)(n,2),o=c[0],d=c[1],f=Boolean(o),x="mobile-menu",m=Object(v.jsxs)(g.a,{id:x,open:f,onClose:function(){d(null)},anchorEl:o,sx:{width:220},children:[Object(v.jsx)(j.a,{onClick:function(){return t("../login")},children:Object(v.jsx)("p",{children:"Login"})}),Object(v.jsx)(j.a,{onClick:function(){return t("../faq")},children:Object(v.jsx)("p",{children:"FAQ"})})]});return Object(v.jsxs)("div",{className:"".concat(e.grow),children:[Object(v.jsx)(s.a,{position:"static",className:e.appbarColor,children:Object(v.jsxs)(l.a,{className:"navbarStyleCustomize",children:[Object(v.jsx)("img",{style:{cursor:"pointer"},src:A.a,alt:"logo",className:"navIcons",onClick:function(){return t("../")}}),Object(v.jsx)("div",{className:e.grow}),Object(v.jsx)("div",{className:e.sectionDesktop,children:Object(v.jsx)(h.a,{color:"inherit",onClick:function(){return t("../login")},children:"Login"})}),Object(v.jsx)("div",{className:e.sectionDesktop,children:Object(v.jsx)(h.a,{color:"inherit",onClick:function(){return t("../faq")},children:"FAQ"})}),Object(v.jsx)("div",{className:e.sectionMobile,children:Object(v.jsx)(u.a,{"aria-label":"show more","aria-controls":x,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(v.jsx)(b.a,{icon:O.a})})})]})}),m]})}var C=n(10),w=n.n(C),y=n(18),k=n(34),I=n(9),R=n(41),E=n(2374),B=n(2375),S=n(2006),N=n(66),U=n(190),G=n(2027),Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIqSURBVHgBtVVLctNAEH09/gQoFjmCsiAURaiyYMUq5gZwAscniDlBlBMQ30A5AUeIWbHBkYs4BXaoYriBN0DZkqbToySWP5rYXuRVuSz3qJ9a3a+fCQ5EUbRtKo8PFNG+/Kwxk2fjRKzBpA1wOonTzlv/hS7KpyJCVJ8eMqMF8DZWgIgC/+Wz43uJo+iHx9XSGRgeNgFBjyfpu9nq1ZqkHUbaNIY/wPDp0qnkbEnuV+HIn3WL88vh7yJSZj5+8+p5MBvrXgwCacERCiqnyV9fMMoqji6vjoorZb1IanEToxEKKjflJy17qbIWMAcoBGk4QOBeYZzo0ApAmUqpDjecqmCQ6+xGptKLBtyoffs+eL8Y7PaHB0JdcyXJ4OoUydB4hbwY5mMK1UnjyuhRNWms1Lgd4nl/yHgAKDwQxAqgHWcj6VVoF2Mcpzuv93bJfpIYvnNR7mBbEV1cfWbiuQFJT9sq/h9YoeMeZFItqUDKWxRAh7r9ny2C+pQ/DKG/t9vEBpA5nclXPS8sbSoVb4WzW2SY/2BDEGhuWSYxOsr3d0bMpj29STwg6g8a65JG/V8NBrem1Yq3WJfLVKGS6on1hekhKMz8YxWp3CPzCPNI7i1Td8sGUVHSK/KQv6O2b2O41EuSsrahcjnxygr7y0vCehybqScvG/0i+VqYJ10ivoPTb5ch8+G2Sv6dLEqTXBm2elMRM0GpAWIPt3+mcq3ZqB4o/SJaD11avwZrOB3ofW9LRgAAAABJRU5ErkJggg==",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZRNTsMwEEa/CTZCyqZHSBdQIYWKtLDPEcoNwg24EeUE5QZkXyojWoQgmxyhbFvIMOFHrUJNwOlbxIk9ebY8YxMEY0xrqf2AmFrYwOnRfooaVPngXd8oRgBiWxyhTjSeZjGYA9HlBErhiFpNSWkUHpzDEQ9bwkl0e/80aCyazLILz6PRZPZ82UjkLdVQmjtJY7IuU7YfzEM2AorjnyOLj1pgJnzJ0JckWUX8Vrxgxza4KlySj19X1Ot2kk395Slg7d/Iq6yWr3rhZ9y/96jQe4OqxEnUDw+HRcFn6xInUclJt3Nd7dtaZSt+5Tl0mQjEplJk3/zlDCoNnTMWuZgCuUQSS1y9KIrac2nb4+ljjAa8A+QXWn8r5StkAAAAAElFTkSuQmCC",z=n(69),D=n(237),L=n(128),Q=n(238),K=n(2055);function F(e){var t=e.label,n=e.icon,a=e.navigateRoute,o=e.handleClose,i=Object(r.g)(),s=Object(c.b)();return Object(v.jsxs)(E.a,{disableGutters:!0,sx:{py:1,px:4,mt:"1px"},onClick:function(){var e=L.f;void 0!==o&&("Logout"===t?(o(),s(Object(D.a)(!1)),s(Object(Q.a)(e)),s(Object(K.a)("")),i(a)):(o(),i(a)))},children:[Object(v.jsx)(B.a,{children:Object(v.jsx)("img",{style:{height:15,width:15,objectFit:"contain"},src:n})}),Object(v.jsx)(S.a,{primary:Object(v.jsx)(N.a,{variant:"caption",sx:{display:"flex",alignItems:"center",color:"text.disabled"},children:t})})]})}function M(e){var t,n=e.avatarProfile,r=Object(o.useRef)(null),i=Object(c.c)((function(e){return e.AuthReducer})),s=Object(o.useState)(!1),l=Object(a.a)(s,2),j=l[0],b=l[1],d=[{label:"NGO"===(null===(t=i.userInfo.user_profile)||void 0===t?void 0:t.profile_type)?"NGO Profile":"Donee Profile",icon:Y,navigateRoute:"../profiledetail"},{label:"Create Goal",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHgB3ZVbTsJAFIbP0I4x4cEuoTx4gUBCg5D4BjuQHeAOcAXiCnAH4gpkB/BmQgIlscYID3YJ82K89HKcATRtnV5IePJ/gZz/zDdtT+cvgRhNzEWVUrhFgCoBGH843sW+MKgiak0gYLv41W6Uy3PZeiIrmuazjnvKCBD0QKe9+g3WABhx3gqGYbAoIycD+1RpRgBrYLQGoPk0fy5jSMGAqENWxfRKwTlCbMjKVbx5ZjA4dMiX2JCOtU9LpWFmsGEU+FD8Fp8Yg3ixz1WPXLk4wzCKtoduO8730Guf8Z6twUL1SnGM4F9G64h4LbyktYlgoVr55EaAgtBa5bgHu9L0cXk/s14G8G9F4owH81VXVVeP8+uVw7GsPrEWVc/x2B+wCKDfBEuQbIjm0/KK13v8cudqaDcelUjJiC/TIE0k3GNayz6Hdje7aurUWnREkPB8OEAgnTho8JXjUJZz3gfrOzQ12MsLaGfjMtchbTKzFgjpYi5Ay3No6IiLGSgE+/xvdbO9LaAN4yj8KBKk8UZTpU5CC9oiO36OeerJy6h5ELor8Jh/nlrRQFLXuUt02F6MB9Qdz5KuzPwGoC7Ix5ZsezIAAAAASUVORK5CYII=",navigateRoute:"../creategoal"}],O=[{label:"Create Donor Profile",icon:Y,navigateRoute:"../createprofiledonor"},{label:"Logout",icon:W,navigateRoute:"../../"}],h=[{label:"Donor profile",icon:Y,navigateRoute:"../profile"},{label:"Logout",icon:W,navigateRoute:"../../"}],f=Object(o.useState)(O),x=Object(a.a)(f,2),p=x[0],A=x[1];Object(o.useEffect)((function(){i.userInfo.is_account_created&&A(h)}),[i.userInfo.is_account_created]),Object(o.useEffect)((function(){null!==i.userInfo.user_profile&&A([].concat(d,h))}),[i.userInfo.user_profile]);var m=function(){b(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{ref:r,size:"large",color:j?"primary":"default",onClick:function(){b(!0)},sx:Object(I.a)({},j&&{bgcolor:function(e){return Object(R.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(v.jsx)(U.a,{sx:{height:30,width:30},src:n})}),Object(v.jsx)(g.a,{open:j,onClose:m,anchorEl:r.current,sx:{width:360},children:Object(v.jsx)(z.a,{sx:{height:{xs:340,sm:"auto"}},children:Object(v.jsx)(G.a,{children:p.map((function(e){return Object(v.jsx)(F,{label:e.label,icon:e.icon,navigateRoute:e.navigateRoute,handleClose:m},e.label)}))})})})]})}var V=[{label:"Create NGO Profile",icon:Y,navigateRoute:"../createprofilengo"},{label:"Create Donee Profile",icon:Y,navigateRoute:"../doneeinvitationcode"}];function J(e){var t=e.label,n=e.icon,c=e.navigateRoute,a=e.handleClose,o=Object(r.g)();return Object(v.jsxs)(E.a,{disableGutters:!0,sx:{py:1,px:4,mt:"1px"},onClick:function(){void 0!==a&&a(),o(c)},children:[Object(v.jsx)(B.a,{children:Object(v.jsx)("img",{style:{height:15,width:15,objectFit:"contain"},src:n})}),Object(v.jsx)(S.a,{primary:Object(v.jsx)(N.a,{variant:"caption",sx:{display:"flex",alignItems:"center",color:"text.disabled"},children:t})})]})}function P(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],s=Object(c.c)((function(e){return e.AuthReducer.userInfo.is_account_created})),l=function(){i(!1)};return Object(v.jsxs)(v.Fragment,{children:[s&&Object(v.jsx)(h.a,{ref:e,color:"inherit",onClick:function(){i(!0)},children:"Start Fund Raising"}),Object(v.jsx)(g.a,{open:r,onClose:l,anchorEl:e.current,sx:{width:360},children:Object(v.jsx)(z.a,{sx:{height:{xs:340,sm:"auto"}},children:Object(v.jsx)(G.a,{children:V.slice(0,2).map((function(e){return Object(v.jsx)(J,{label:e.label,icon:e.icon,navigateRoute:e.navigateRoute,handleClose:l},e.label)}))})})})]})}var q=n(2113),T=n(351),_=n(92),X=n(67);function H(){var e,t=Object(c.c)((function(e){return e.AuthReducer})),n=Object(X.a)(),o=Object(k.useQuery)(["userInfo",t.userInfo.access],Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/user-detail/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),d=o.data,f=o.isLoading,x=o.isError,m=o.error,C=o.isSuccess,I=p(),R=Object(r.g)(),E=Object(c.b)(),B=i.a.useState(null),S=Object(a.a)(B,2),N=S[0],U=S[1],G=Boolean(N),Y=function(){U(null)},W="mobile-menu-logged-in",z=Object(v.jsxs)(g.a,{id:W,open:G,onClose:Y,anchorEl:N,sx:{width:220},children:[Object(v.jsx)(j.a,{onClick:function(){Y(),R("../profile")},children:Object(v.jsx)("p",{children:"User"})}),Object(v.jsx)(j.a,{onClick:function(){Y(),R("../faq")},children:Object(v.jsx)("p",{children:"FAQ"})}),null!==t.userInfo.user_profile&&Object(v.jsx)(j.a,{onClick:function(){Y(),R("../profiledetail")},children:Object(v.jsx)("p",{children:"Profile Detail"})}),"NGO"===(null===(e=t.userInfo.user_profile)||void 0===e?void 0:e.profile_type)&&Object(v.jsx)(j.a,{onClick:function(){Y(),R("../dashboard")},children:Object(v.jsx)("p",{children:"Dashboard"})}),Object(v.jsx)(j.a,{onClick:function(){Y(),R("../creategoal")},children:Object(v.jsx)("p",{children:"Create Goal"})}),Object(v.jsx)(j.a,{onClick:function(){var e=L.f;E(Object(D.a)(!1)),E(Object(Q.a)(e)),R("../")},children:Object(v.jsx)("p",{children:"Logout"})})]});return Object(v.jsx)(T.a,{children:!1===f?Object(v.jsx)("div",{children:x?Object(v.jsx)(_.a,{error:m||new Error("Network response was not ok.")}):Object(v.jsxs)("div",{className:"".concat(I.grow),children:[Object(v.jsx)(s.a,{position:"static",className:I.appbarColor,children:Object(v.jsxs)(l.a,{className:"navbarStyleCustomize",children:[Object(v.jsx)("img",{src:A.a,alt:"logo",className:"navIcons",style:{cursor:"pointer"},onClick:function(){return R("../")}}),Object(v.jsx)("div",{className:I.grow}),Object(v.jsx)("div",{className:I.sectionDesktop,children:void 0!==d&&C?Object(v.jsxs)("div",{children:[null===d.user_profile?Object(v.jsx)(P,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{onClick:function(){return R("../invitedonee")},color:"inherit",children:"Invite Donee"}),Object(v.jsx)(h.a,{onClick:function(){return R("../faq")},color:"inherit",children:"FAQ"}),"NGO"===d.user_profile.profile_type&&Object(v.jsx)(h.a,{onClick:function(){return R("../dashboard")},color:"inherit",children:"Dashboard"})]}),Object(v.jsx)(M,{avatarProfile:null===d||void 0===d?void 0:d.image}),Object(v.jsx)(q.a,{iconColor:"white"})]}):Object(v.jsx)("div",{})}),Object(v.jsxs)("div",{className:I.sectionMobile,children:[Object(v.jsx)(q.a,{iconColor:"white"}),Object(v.jsx)(u.a,{"aria-label":"show more","aria-controls":W,"aria-haspopup":"true",onClick:function(e){U(e.currentTarget)},color:"inherit",children:Object(v.jsx)(b.a,{icon:O.a})})]})]})}),z]})}):Object(v.jsx)("div",{})})}function Z(){var e=Object(c.c)((function(e){return e.AuthReducer}));return Object(v.jsxs)("div",{children:[e.isLoggedIn?Object(v.jsx)(H,{}):Object(v.jsx)(m,{}),Object(v.jsx)(r.b,{})]})}}}]);
//# sourceMappingURL=27.36efc992.chunk.js.map