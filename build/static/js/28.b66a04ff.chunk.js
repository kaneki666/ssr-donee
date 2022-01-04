(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[28],{2035:function(e,r,i){"use strict";i.d(r,"b",(function(){return o})),i.d(r,"a",(function(){return c}));var t=i(8),n=i(1);function a(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function o(){var e=Object(n.useState)(a()),r=Object(t.a)(e,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){function e(){o(a())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}var c=function(e){return new Promise((function(r){return setTimeout(r,e)}))}},2046:function(e,r,i){"use strict";i.d(r,"a",(function(){return t}));var t={formId:"createGoalForm",formField:{goalname:{name:"goalname",label:"Goal Name",requiredErrorMsg:"Goal Name is required",minError:"Too Short, 10 character minimum",maxError:"Too long, 25 character max"},file:{name:"file",label:"Image File*",requiredErrorMsg:"File is Required",fileFormatError:"Unsupported Format",fileMaxError:"File too large"},shortGoal:{name:"shortGoal",label:"Short Goal*",requiredErrorMsg:"Short Goal is required",minError:"Too Short, 30 character minimum",maxError:"Too long, 150 character max"},topics:{name:"topic",label:"Choose topic of your goal*",requiredErrorMsg:"Topic is required",minError:"1 Topic is required minimum"},product:{name:"product",label:"What are you buying?",requiredErrorMsg:"Product Name is required"},productlink:{name:"productlink",label:"Where do you get it? Paste a link",requiredErrorMsg:"Product Link is required"},productunitcost:{name:"unitcost",label:"Unit Cost in Dollar",requiredErrorMsg:"Unit cost is required",minError:"Unit cost must be greater than 0"},productunitnumber:{name:"unitnumber",label:"How many units?",requiredErrorMsg:"Unit is required",minError:"Unit must be greater than 0"},productsubtotal:{name:"productsubtotal",label:"Sub Total",requiredErrorMsg:"Sub Total is required"},productpgwfee:{name:"productpgwfee",label:"PGW fee",requiredErrorMsg:"product pgw fee is required"},productngofee:{name:"productngofee",label:"NGO fee",requiredErrorMsg:"product ngo fee is required"},productplatformfee:{name:"productplatformfee",label:"Platform fee",requiredErrorMsg:"product platform fee is required"},productgoaltotal:{name:"productgoaltotal",label:"Total Goal Cost",requiredErrorMsg:"Total Goal is required"},videofile:{name:"videofile",label:"Video",requiredErrorMsg:"Video is Required",fileFormatError:"'Unsupported Format'",fileMaxError:"Video too large,less than 100 MB"},full_description:{name:"full_description",label:"Full Description",requiredErrorMsg:"Full description is required",minError:"100 character minimum"}}}},2049:function(e,r,i){"use strict";i.d(r,"e",(function(){return l})),i.d(r,"d",(function(){return m})),i.d(r,"b",(function(){return b})),i.d(r,"c",(function(){return f})),i.d(r,"a",(function(){return h})),i.d(r,"f",(function(){return z}));var t,n,a,o=i(6),c=i(2065),u=i(2046),s=5e6,d=["image/jpg","image/jpeg","image/gif","image/png","image/PNG","image/webp","image/svg"],l=c.e().shape({email:c.g().email().required("Email is required"),password:c.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:c.g().not([c.f("email")],"Password can not be email")}),confirmPassword:c.g().when("password",{is:function(e){return!!(e&&e.length>0)},then:c.g().oneOf([c.f("password")],"Both password need to be the same")})}),m=c.e().shape({email:c.g().email().required("Email is required"),password:c.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:c.g().not([c.f("email")],"Password can not be email")})}),b=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),country:c.d().required("Country is required"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Bio name can not be username")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=s})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)}))}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")})],f=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),email:c.g().email().required("Email is required"),country:c.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("email")],"Bio name can not be email")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=s})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)})),sdgs:c.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")}),,c.e().shape({certification_incorporation:c.a(c.c().required("Certification incorporation Images is required").test("fileSize","Maximum Size 5MB",(function(e){return e.map((function(e){return e&&e.size<=s}))})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)}))).min(1,"1 file is minimum")})],h=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),email:c.g().email().required("Email is required"),country:c.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("email")],"Bio name can not be email")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=s})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)})),sdgs:c.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")}),c.e().shape({id_front:c.c().required("ID front Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=s})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)})),id_back:c.c().required("ID back Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=s})).test("fileFormat","Invalid Image",(function(e){return e&&d.includes(e.type)}))})],g=u.a.formField,j=g.file,p=g.goalname,O=g.shortGoal,q=g.topics,x=g.product,v=g.productlink,w=g.productunitcost,y=g.productunitnumber,E=g.productsubtotal,M=g.productpgwfee,_=g.productngofee,S=g.productplatformfee,C=g.productgoaltotal,F=g.videofile,k=g.full_description,P=["video/mp4","video/mov"],z=[c.e().shape((t={},Object(o.a)(t,j.name,c.c().required(j.requiredErrorMsg).test("fileSize",j.fileMaxError,(function(e){return e&&e.size<=s})).test("fileFormat",j.fileFormatError,(function(e){return e&&d.includes(e.type)}))),Object(o.a)(t,p.name,c.g().required(p.requiredErrorMsg).min(10,p.minError).max(25,p.maxError)),Object(o.a)(t,O.name,c.g().required(O.requiredErrorMsg)),Object(o.a)(t,q.name,c.a().required(q.requiredErrorMsg).min(1,q.minError)),t)),c.e().shape((n={},Object(o.a)(n,x.name,c.g().required(x.requiredErrorMsg)),Object(o.a)(n,v.name,c.g().matches(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,"Enter correct url!")),Object(o.a)(n,w.name,c.d().min(1,w.minError).required(w.requiredErrorMsg)),Object(o.a)(n,y.name,c.d().min(1,y.minError).required(y.requiredErrorMsg)),Object(o.a)(n,E.name,c.d().required(E.requiredErrorMsg)),Object(o.a)(n,M.name,c.d().required(M.requiredErrorMsg)),Object(o.a)(n,_.name,c.d().required(_.requiredErrorMsg)),Object(o.a)(n,S.name,c.d().required(S.requiredErrorMsg)),Object(o.a)(n,C.name,c.d().required(C.requiredErrorMsg)),n)),c.e().shape((a={},Object(o.a)(a,F.name,c.a(c.c().required(F.requiredErrorMsg).test("fileSize",F.fileMaxError,(function(e){return e&&e.size<=25e7})).test("fileFormat",F.fileFormatError,(function(e){return e&&P.includes(e.type)}))).min(1,"1 video is minimum")),Object(o.a)(a,k.name,c.g().required(k.requiredErrorMsg)),a))]},2053:function(e,r,i){"use strict";i.d(r,"a",(function(){return n}));var t=i(344),n=Object(t.a)("div")({display:"flex",minHeight:"100%",overflow:"hidden",backgroundColor:"white"})},2064:function(e,r,i){"use strict";r.a=i.p+"static/media/doneelogo.c9e2e609.svg"},2351:function(e,r,i){"use strict";i.r(r);var t=i(10),n=i.n(t),a=i(18),o=i(8),c=i(2009),u=i(346),s=i(2008),d=i(66),l=i(2007),m=i(1),b=i.n(m),f=i(236),h=i(25),g=i(68),j=i(82),p=i(2053),O=i(67),q=i(235),x=i(344),v=i(2064),w=i(1957),y=i.p+"static/media/login_bg.eba3572f.jpeg",E=Object(w.a)((function(e){return{root:{minHeight:"100vh"},image:{backgroundImage:"url(".concat(y,")"),backgroundRepeat:"no-repeat",backgroundColor:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),maxWidth:300},TextField:{backgroundColor:"white",borderRadius:10},input:{color:"black","&::placeholder":{color:"grey"}}}})),M=i(2035),_=i(0),S=Object(x.a)(d.a)((function(){return{fontWeight:700,fontSize:30,color:"white"}})),C=function(){var e=E(),r=Object(M.b)().width;return Object(_.jsx)(u.a,{item:!0,xs:!1,sm:!1,md:6,className:e.image,children:r>900&&Object(_.jsxs)(u.a,{sx:{padding:3},children:[Object(_.jsx)("img",{src:v.a,alt:"donelogo",style:{width:180}}),Object(_.jsxs)(u.a,{sx:{paddingTop:4},children:[Object(_.jsx)(S,{children:"Welcome to the"}),Object(_.jsx)(S,{children:"first trully social"}),Object(_.jsx)(S,{children:"network"})]})]})})},F=i(9),k=i(234),P=i(2323),z=i(1960),I=i(126),T=i(2148),R=i.n(T),N=i(2149),B=i.n(N),G=i(2036),W=i(188),U=i(2356),L=i(2373),D=i(2002),V=i(70),$=["children","value","index"],H=function(e){var r=e.children,i=e.value,t=e.index,n=Object(V.a)(e,$);return Object(_.jsx)("div",Object(F.a)(Object(F.a)({role:"tabpanel",hidden:i!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},n),{},{children:i===t&&Object(_.jsx)(I.a,{p:3,children:Object(_.jsx)(d.a,{children:r})})}))},A=i(33),J=i(2013),K=function(e){var r=e.field,i=e.form,t=e.label,n=e.type,a=e.icon,o=i.touched,c=i.errors,u=E();return Object(_.jsx)(J.a,Object(F.a)(Object(F.a)({variant:"filled",margin:"normal",required:!0,className:u.TextField,fullWidth:!0,type:n,helperText:function(){if(o[r.name]&&c[r.name])return c[r.name]}(),error:Boolean(o[r.name]&&c[r.name]),label:t},r),{},{InputProps:{classes:{input:u.input},disableUnderline:!0,endAdornment:Object(_.jsx)(A.a,{icon:a,color:"#007AFF"})}}))},Y=i.p+"static/media/fbbutton.b21a0c3a.png",Q=i.p+"static/media/gobutton.2889aa8f.png",X=i(81),Z=i(34),ee=i(2049),re=i(2286),ie=i(38),te=i(237),ne=i(238),ae=function(e){Object(re.a)(e);var r=Object(m.useRef)(null),i=Object(m.useRef)(null),t=E(),c=Object(h.g)(),u=Object(ie.b)(),s=Object(Z.useMutation)((function(e){return Object(X.p)(e)})),d=Object(m.useState)(""),l=Object(o.a)(d,2),b=l[0],f=l[1],p=function(e){var r;null===(r=i.current)||void 0===r||r.call(i,e)},O=s.isError,q=s.error,x=s.isSuccess,v=s.data;return Object(m.useEffect)((function(){if(x)"No active account found with the given credentials"===(null===v||void 0===v?void 0:v.detail)?function(e){var i;null===(i=r.current)||void 0===i||i.call(r,e)}("Wrong Credentials"):!1===(null===v||void 0===v?void 0:v.is_account_created)?(p("Login Successful"),u(Object(te.a)(!0)),u(Object(ne.a)(v)),setTimeout((function(){c("../createprofiledonor",{state:{password:b}})}),1e3)):!0===(null===v||void 0===v?void 0:v.is_account_created)&&(p("Login Successful"),u(Object(te.a)(!0)),u(Object(ne.a)(v)),setTimeout((function(){c("../")}),1e3));else if(O)throw new Error(null===q||void 0===q?void 0:q.message)}),[O,x]),Object(_.jsxs)("div",{children:[Object(_.jsx)(g.a,{children:function(e){r.current=e}}),Object(_.jsx)(j.a,{children:function(e){i.current=e}}),Object(_.jsx)(G.c,{initialValues:{email:"",password:""},validationSchema:ee.d,onSubmit:function(){var e=Object(a.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(r.password),e.next=3,s.mutateAsync(r);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:Object(_.jsxs)(G.b,{className:t.form,children:[Object(_.jsx)(G.a,{name:"email",icon:R.a,component:K,label:"Email"}),Object(_.jsx)(G.a,{name:"password",icon:B.a,component:K,label:"Password",type:"password"}),Object(_.jsx)(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Login"})]})})]})};function oe(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var ce=function(){var e=new P.b,r=Object(P.c)(),i=new P.a,t=Object(P.c)(),c=Object(m.useRef)(null),s=Object(m.useRef)(null),l=E(),f=b.a.useState(0),p=Object(o.a)(f,2),O=p[0],q=p[1],x=Object(ie.b)(),v=Object(h.g)(),w=function(e){var r;null===(r=c.current)||void 0===r||r.call(c,e)},y=function(e){var r;null===(r=s.current)||void 0===r||r.call(s,e)},M=Object(Z.useMutation)((function(e){return Object(X.s)(e)})),S=M.isLoading,C=M.isError,T=M.error,N=M.isSuccess,V=M.data;return Object(m.useEffect)((function(){if(N)"This field must be unique."===(null===V||void 0===V?void 0:V.email[0])?w("This email already exist"):(y("Sign Up is Completed Successfully.\n Please Check your Email for E-Mail Validation."),q(1));else if(C)throw new Error(null===T||void 0===T?void 0:T.message)}),[S,C]),Object(_.jsxs)(u.a,{sx:{background:"linear-gradient(179.85deg, #324562 1.59%, #0077B6 49.76%, #48CAE4 99.87%)"},item:!0,xs:12,sm:12,md:6,component:z.a,elevation:6,square:!0,children:[Object(_.jsx)(g.a,{children:function(e){c.current=e}}),Object(_.jsx)(j.a,{children:function(e){s.current=e}}),Object(_.jsxs)(I.a,{sx:{width:"100%"},children:[Object(_.jsx)(I.a,{children:Object(_.jsx)(W.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:Object(_.jsxs)(U.a,{value:O,onChange:function(e,r){q(r)},"aria-label":"Register",children:[Object(_.jsx)(L.a,Object(F.a)({style:{color:0===O?"white":"grey"},label:"Sign Up"},oe(0))),Object(_.jsx)(L.a,Object(F.a)({style:{color:1===O?"white":"grey"},label:"Login"},oe(1)))]})})}),Object(_.jsx)(H,{value:O,index:0,children:Object(_.jsxs)("div",{className:l.paper,children:[Object(_.jsx)(G.c,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:ee.e,onSubmit:function(){var e=Object(a.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.mutateAsync(r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:Object(_.jsxs)(G.b,{className:l.form,children:[Object(_.jsx)(G.a,{name:"email",icon:R.a,component:K,label:"Email"}),Object(_.jsx)(G.a,{name:"password",icon:B.a,component:K,label:"Password",type:"password"}),Object(_.jsx)(G.a,{name:"confirmPassword",icon:B.a,component:K,label:"Confirm Password",type:"password"}),Object(_.jsx)(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,children:"Sign Up"})]})}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsx)(u.a,{container:!0,children:Object(_.jsx)(u.a,{item:!0,xs:!0,children:Object(_.jsx)(D.a,{variant:"middle",sx:{backgroundColor:"white"}})})}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsxs)(u.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(_.jsx)("img",{onClick:function(){Object(P.d)(r,e).then((function(e){var r=P.b.credentialFromResult(e),i={email:e.user.email,social_status:null===r||void 0===r?void 0:r.providerId};Object(X.t)(i).then((function(e){"Email already used"===e||"Network error"===e?w(e):y("Sign Up is Completed Successfully.")}))})).catch((function(e){e.code,e.message,e.email,P.b.credentialFromError(e)}))},src:Q,alt:"fbbutton",style:{maxWidth:300}}),Object(_.jsx)(I.a,{sx:{height:10}}),Object(_.jsx)("img",{onClick:function(){Object(P.d)(t,i).then((function(e){console.log(e.providerId);e.user,P.a.credentialFromResult(e)})).catch((function(e){e.code,e.message,e.email,P.a.credentialFromError(e)}))},src:Y,alt:"fbbutton",style:{maxWidth:300}}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsx)(d.a,{variant:"body2",color:"white",align:"center",children:"Terms of Service and Privacy Policy"}),Object(_.jsx)(I.a,{sx:{height:5}}),Object(_.jsx)(d.a,{variant:"body2",color:"white",align:"center",children:"Have an acount? Login"})]})]})}),Object(_.jsx)(H,{value:O,index:1,children:Object(_.jsxs)("div",{className:l.paper,children:[Object(_.jsx)(ae,{}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsx)(u.a,{container:!0,children:Object(_.jsx)(u.a,{item:!0,xs:!0,children:Object(_.jsx)(D.a,{variant:"middle",sx:{backgroundColor:"white"}})})}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsxs)(u.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(_.jsx)("img",{onClick:function(){Object(P.d)(r,e).then((function(e){var r={email:e.user.email,password:e.user.email};Object(X.p)(r).then((function(e){"No active account found with the given credentials"===(null===e||void 0===e?void 0:e.detail)?w("Wrong Credentials"):!1===e.is_account_created?(y("Login Successful"),x(Object(te.a)(!0)),x(Object(ne.a)(e)),setTimeout((function(){v("../createprofiledonor")}),1e3)):!0===(null===e||void 0===e?void 0:e.is_account_created)&&(y("Login Successful"),x(Object(te.a)(!0)),x(Object(ne.a)(e)),setTimeout((function(){v("../")}),1e3))}))}))},src:Q,alt:"fbbutton",style:{maxWidth:300}}),Object(_.jsx)(I.a,{sx:{height:10}}),Object(_.jsx)("img",{src:Y,alt:"fbbutton",style:{maxWidth:300}}),Object(_.jsx)(I.a,{sx:{height:20}}),Object(_.jsx)(d.a,{variant:"body2",color:"white",align:"center",children:"Terms of Service and Privacy Policy"}),Object(_.jsx)(I.a,{sx:{height:5}}),Object(_.jsx)(d.a,{variant:"body2",color:"white",align:"center",children:"Dont have an acount? Sign Up"})]})]})})]})]})};function ue(){var e=E();return Object(_.jsxs)(u.a,{container:!0,component:"main",className:e.root,children:[Object(_.jsx)(C,{}),Object(_.jsx)(ce,{})]})}var se={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:140,height:140,bgcolor:"background.paper",border:"none",boxShadow:24,outline:"none",borderRadius:2};r.default=function(){var e=Object(m.useState)(!1),r=Object(o.a)(e,2),i=r[0],t=r[1],b=Object(m.useRef)(null),x=Object(m.useRef)(null),v=Object(h.f)(),w=Object(O.a)(),y=Object(m.useState)(!1),E=Object(o.a)(y,2),M=E[0],S=E[1],C=function(){return S(!1)},F=function(e){var r;null===(r=b.current)||void 0===r||r.call(b,e)},k=function(e){var r;null===(r=x.current)||void 0===r||r.call(x,e)},P=function(){var e=Object(a.a)(n.a.mark((function e(r){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("verify-user/".concat(r));case 2:return i=e.sent,C(),"id is active now"===i.data.message?k("Your account is now activated. Please login now."):F("Something went wrong. Please try again."),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){var e=v.pathname,r=null===e||void 0===e?void 0:e.match(new RegExp("/verifyuser/id=([^/]+)"));if(r){S(!0);var i=r[1];P(i)}}),[v.pathname]),Object(_.jsx)(f.ErrorBoundary,{fallbackRender:function(e){var r=e.error,i=e.resetErrorBoundary;return Object(_.jsx)(q.a,{error:r,resetErrorBoundary:i})},onReset:function(){return t(!1)},resetKeys:[i],children:Object(_.jsxs)(p.a,{children:[Object(_.jsx)(g.a,{children:function(e){b.current=e}}),Object(_.jsx)(j.a,{children:function(e){x.current=e}}),Object(_.jsx)(c.a,{open:M,onClose:C,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(_.jsx)(l.a,{sx:se,children:Object(_.jsxs)(u.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:140},children:[Object(_.jsx)(s.a,{color:"info"}),Object(_.jsx)(d.a,{pt:2,variant:"body1",children:"Verifying user"})]})})}),Object(_.jsx)(ue,{})]})})}}}]);
//# sourceMappingURL=28.b66a04ff.chunk.js.map