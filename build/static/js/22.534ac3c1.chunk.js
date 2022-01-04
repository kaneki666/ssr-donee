(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[22],{2034:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return u}));var n=t(8),i=t(1);function a(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function o(){var e=Object(i.useState)(a()),r=Object(n.a)(e,2),t=r[0],o=r[1];return Object(i.useEffect)((function(){function e(){o(a())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var u=function(e){return new Promise((function(r){return setTimeout(r,e)}))}},2045:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={formId:"createGoalForm",formField:{goalname:{name:"goalname",label:"Goal Name",requiredErrorMsg:"Goal Name is required",minError:"Too Short, 10 character minimum",maxError:"Too long, 25 character max"},file:{name:"file",label:"Image File*",requiredErrorMsg:"File is Required",fileFormatError:"Unsupported Format",fileMaxError:"File too large"},shortGoal:{name:"shortGoal",label:"Short Goal*",requiredErrorMsg:"Short Goal is required",minError:"Too Short, 30 character minimum",maxError:"Too long, 150 character max"},topics:{name:"topic",label:"Choose topic of your goal*",requiredErrorMsg:"Topic is required",minError:"1 Topic is required minimum"},product:{name:"product",label:"What are you buying?",requiredErrorMsg:"Product Name is required"},productlink:{name:"productlink",label:"Where do you get it? Paste a link",requiredErrorMsg:"Product Link is required"},productunitcost:{name:"unitcost",label:"Unit Cost in Dollar",requiredErrorMsg:"Unit cost is required",minError:"Unit cost must be greater than 0"},productunitnumber:{name:"unitnumber",label:"How many units?",requiredErrorMsg:"Unit is required",minError:"Unit must be greater than 0"},productsubtotal:{name:"productsubtotal",label:"Sub Total",requiredErrorMsg:"Sub Total is required"},productpgwfee:{name:"productpgwfee",label:"PGW fee",requiredErrorMsg:"product pgw fee is required"},productngofee:{name:"productngofee",label:"NGO fee",requiredErrorMsg:"product ngo fee is required"},productplatformfee:{name:"productplatformfee",label:"Platform fee",requiredErrorMsg:"product platform fee is required"},productgoaltotal:{name:"productgoaltotal",label:"Total Goal Cost",requiredErrorMsg:"Total Goal is required"},videofile:{name:"videofile",label:"Video",requiredErrorMsg:"Video is Required",fileFormatError:"'Unsupported Format'",fileMaxError:"Video too large,less than 100 MB"},full_description:{name:"full_description",label:"Full Description",requiredErrorMsg:"Full description is required",minError:"100 character minimum"}}}},2048:function(e,r,t){"use strict";t.d(r,"e",(function(){return d})),t.d(r,"d",(function(){return m})),t.d(r,"b",(function(){return b})),t.d(r,"c",(function(){return f})),t.d(r,"a",(function(){return p})),t.d(r,"f",(function(){return T}));var n,i,a,o=t(6),u=t(2064),c=t(2045),l=5e6,s=["image/jpg","image/jpeg","image/gif","image/png","image/PNG","image/webp","image/svg"],d=u.e().shape({email:u.g().email().required("Email is required"),password:u.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:u.g().not([u.f("email")],"Password can not be email")}),confirmPassword:u.g().when("password",{is:function(e){return!!(e&&e.length>0)},then:u.g().oneOf([u.f("password")],"Both password need to be the same")})}),m=u.e().shape({email:u.g().email().required("Email is required"),password:u.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:u.g().not([u.f("email")],"Password can not be email")})}),b=[u.e().shape({username:u.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:u.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("username")],"Full name can not be username")}),country:u.d().required("Country is required"),phone_number:u.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:u.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("username",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("username")],"Bio name can not be username")}),image:u.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))}),u.e().shape({donee_notification:u.b().required("donee_notification is required"),account_activity:u.b().required("account_activity is required"),donee_activity:u.b().required("donee_activity is required"),achieved_goals:u.b().required("achieved_goals is required"),new_followers:u.b().required("new_followers is required"),NGO_role_assign:u.b().required("user_notification is required")})],f=[u.e().shape({username:u.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:u.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("username")],"Full name can not be username")}),email:u.g().email().required("Email is required"),country:u.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:u.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:u.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("email")],"Bio name can not be email")}),image:u.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),sdgs:u.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),u.e().shape({donee_notification:u.b().required("donee_notification is required"),account_activity:u.b().required("account_activity is required"),donee_activity:u.b().required("donee_activity is required"),achieved_goals:u.b().required("achieved_goals is required"),new_followers:u.b().required("new_followers is required"),NGO_role_assign:u.b().required("user_notification is required")}),,u.e().shape({certification_incorporation:u.a(u.c().required("Certification incorporation Images is required").test("fileSize","Maximum Size 5MB",(function(e){return e.map((function(e){return e&&e.size<=l}))})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))).min(1,"1 file is minimum")})],p=[u.e().shape({username:u.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:u.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("username")],"Full name can not be username")}),email:u.g().email().required("Email is required"),country:u.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:u.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:u.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:u.g().not([u.f("email")],"Bio name can not be email")}),image:u.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),sdgs:u.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),u.e().shape({donee_notification:u.b().required("donee_notification is required"),account_activity:u.b().required("account_activity is required"),donee_activity:u.b().required("donee_activity is required"),achieved_goals:u.b().required("achieved_goals is required"),new_followers:u.b().required("new_followers is required"),NGO_role_assign:u.b().required("user_notification is required")}),u.e().shape({id_front:u.c().required("ID front Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),id_back:u.c().required("ID back Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))})],h=c.a.formField,j=h.file,g=h.goalname,O=h.shortGoal,q=h.topics,v=h.product,y=h.productlink,x=h.productunitcost,E=h.productunitnumber,w=h.productsubtotal,_=h.productpgwfee,M=h.productngofee,S=h.productplatformfee,I=h.productgoaltotal,C=h.videofile,P=h.full_description,F=["video/mp4","video/mov"],T=[u.e().shape((n={},Object(o.a)(n,j.name,u.c().required(j.requiredErrorMsg).test("fileSize",j.fileMaxError,(function(e){return e&&e.size<=l})).test("fileFormat",j.fileFormatError,(function(e){return e&&s.includes(e.type)}))),Object(o.a)(n,g.name,u.g().required(g.requiredErrorMsg).min(10,g.minError).max(25,g.maxError)),Object(o.a)(n,O.name,u.g().required(O.requiredErrorMsg)),Object(o.a)(n,q.name,u.a().required(q.requiredErrorMsg).min(1,q.minError)),n)),u.e().shape((i={},Object(o.a)(i,v.name,u.g().required(v.requiredErrorMsg)),Object(o.a)(i,y.name,u.g().matches(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,"Enter correct url!")),Object(o.a)(i,x.name,u.d().min(1,x.minError).required(x.requiredErrorMsg)),Object(o.a)(i,E.name,u.d().min(1,E.minError).required(E.requiredErrorMsg)),Object(o.a)(i,w.name,u.d().required(w.requiredErrorMsg)),Object(o.a)(i,_.name,u.d().required(_.requiredErrorMsg)),Object(o.a)(i,M.name,u.d().required(M.requiredErrorMsg)),Object(o.a)(i,S.name,u.d().required(S.requiredErrorMsg)),Object(o.a)(i,I.name,u.d().required(I.requiredErrorMsg)),i)),u.e().shape((a={},Object(o.a)(a,C.name,u.a(u.c().required(C.requiredErrorMsg).test("fileSize",C.fileMaxError,(function(e){return e&&e.size<=25e7})).test("fileFormat",C.fileFormatError,(function(e){return e&&F.includes(e.type)}))).min(1,"1 video is minimum")),Object(o.a)(a,P.name,u.g().required(P.requiredErrorMsg)),a))]},2062:function(e,r,t){"use strict";var n=t(9),i=(t(1),t(2012)),a=t(0);r.a=function(e){var r=e.field,t=e.form,o=e.label,u=e.type,c=e.placeholder,l=t.touched,s=t.errors;return Object(a.jsx)(i.a,Object(n.a)({id:"outlined-full-width Bio",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},placeholder:c,type:u,helperText:function(){if(l[r.name]&&s[r.name])return s[r.name]}(),error:Boolean(l[r.name]&&s[r.name]),label:o},r))}},2069:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"c",(function(){return i})),t.d(r,"b",(function(){return a}));var n=[{name:"username",label:" Donee Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"Donee  Name",placeholder:"Enter  Name",typeInputType:"text"},{name:"email",label:"E-Mail",placeholder:"Enter Your Email",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}],i=[{name:"username",label:" NGO Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"NGO Commercial Name",placeholder:"Enter Commercial Name",typeInputType:"text"},{name:"email",label:"E-Mail",placeholder:"Enter Your Email",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}],a=[{name:"username",label:"Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"Donor Name",placeholder:"Enter Your Full Name",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}]},2070:function(e,r,t){"use strict";var n=t(9),i=(t(1),t(2012)),a=t(0);r.a=function(e){var r=e.field,t=e.form,o=e.label,u=e.type,c=e.placeholder,l=t.touched,s=t.errors;return Object(a.jsx)(i.a,Object(n.a)({id:"outlined-full-width ".concat(r.name),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",placeholder:c,type:u,helperText:function(){if(l[r.name]&&s[r.name])return s[r.name]}(),error:Boolean(l[r.name]&&s[r.name]),label:o},r))}},2071:function(e,r,t){"use strict";var n=t(9),i=t(2013),a=t(2014),o=t(2011),u=t(2027),c=t(1),l=t(67),s=t(68),d=t(0);r.a=function(e){var r=e.field,t=e.options,m=e.form,b=Object(c.useRef)(null),f=Object(l.a)();return Object(c.useEffect)((function(){f.get("country-code/".concat(r.value)).then((function(e){200===e.status?m.setFieldValue("phone_number","+".concat(e.data.country_code)):function(e){var r;null===(r=b.current)||void 0===r||r.call(b,e)}("Api Status not ok!")}))}),[r.value]),Object(d.jsxs)(i.a,{fullWidth:!0,children:[Object(d.jsx)(s.a,{children:function(e){b.current=e}}),Object(d.jsx)(a.a,{id:"demo-simple-select-label",children:"Where are you from?"}),null!==t&&Object(d.jsx)(o.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-label",label:"Select Your Country",id:"demo-simple-select"},r),{},{fullWidth:!0,children:t.map((function(e){return Object(d.jsx)(u.a,{value:e.id,children:e.name})}))}))]})}},2075:function(e,r,t){"use strict";t.d(r,"b",(function(){return I})),t.d(r,"a",(function(){return C}));var n=t(1),i=t(191),a=t(346),o=t(66),u=t(126),c=t(5),l=t(2),s=(t(15),t(11)),d=t(187),m=t(7),b=t(12),f=t(149),p=t(186);function h(e){return Object(f.a)("MuiFormGroup",e)}Object(p.a)("MuiFormGroup",["root","row"]);var j=t(0),g=["className","row"],O=Object(m.a)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.row&&r.row]}})((function(e){var r=e.ownerState;return Object(l.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),q=n.forwardRef((function(e,r){var t=Object(b.a)({props:e,name:"MuiFormGroup"}),n=t.className,i=t.row,a=void 0!==i&&i,o=Object(c.a)(t,g),u=Object(l.a)({},t,{row:a}),m=function(e){var r=e.classes,t={root:["root",e.row&&"row"]};return Object(d.a)(t,h,r)}(u);return Object(j.jsx)(O,Object(l.a)({className:Object(s.a)(m.root,n),ownerState:u,ref:r},o))})),v=t(1956),y=t(2e3),x=t(2035),E=t(9),w=t(2118),_=t(2010),M=t(2006),S=function(e){var r=e.field,t=(e.form,e.label),n=e.sub,i=I();return Object(j.jsxs)(M.a,{className:i.boxPaddingAlert,children:[Object(j.jsx)(w.a,{control:Object(j.jsx)(_.a,Object(E.a)(Object(E.a)({},r),{},{color:"primary",checked:r.value})),label:t}),Object(j.jsx)(o.a,{className:i.pTagStlAlert,align:"left",gutterBottom:!0,children:n})]})},I=Object(v.a)((function(e){return Object(y.a)({boxPaddingAlert:{paddingTop:8,paddingBottom:8},saveButtonAlert:{borderRadius:20,marginTop:20,paddingTop:10,paddingLeft:25,paddingRight:25,paddingBottom:10},tagTitle:{paddingTop:25,paddingBottom:20},pTagStlAlert:{fontSize:14,color:"grey"}})}));function C(){var e=I();return Object(j.jsx)(i.a,{children:Object(j.jsx)(a.a,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:Object(j.jsxs)(a.a,{item:!0,children:[Object(j.jsx)(o.a,{className:e.tagTitle,variant:"h4",align:"left",gutterBottom:!0,children:"Alert and Notification"}),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(o.a,{variant:"h5",align:"left",gutterBottom:!0,children:"Send me:"}),Object(j.jsxs)(q,{children:[Object(j.jsx)(x.a,{component:S,label:"Donee notifications",name:"account_activity",sub:"Get Donee news, everything about our new goals, donees and NGO's"}),Object(j.jsx)(x.a,{component:S,label:"Account activity",name:"donee_notification",sub:"Get notifications about your activity or activities you\xb4ve missed"}),Object(j.jsx)(x.a,{component:S,label:"Activity of your endorsed Donee\xb4s",name:"donee_activity",sub:" Get notifications about your sponsored Donee\xb4s and everything about their goals progress"}),Object(j.jsx)(x.a,{component:S,label:"Goals achieved that you support",name:"achieved_goals",sub:""}),Object(j.jsx)(x.a,{component:S,label:"Goals achieved that you endorsed",name:"new_followers",sub:""}),Object(j.jsx)(x.a,{component:S,label:"Someone gave you a role in their NGO",name:"NGO_role_assign",sub:""})]})]})]})})})}},2077:function(e,r,t){"use strict";var n=t(8),i=t(1),a=t.n(i),o=t(344),u=t(188),c=t(346),l=t(126),s=t(66),d=t.p+"static/media/imageadd.336df693.svg",m=t(38),b=t(0),f=(r.a=function(e){var r=e.field,t=e.form,o=e.profile_type,p=t.errors,h=Object(m.c)((function(e){return e.AuthReducer.ngo_profile_id})),j=a.a.useState(null),g=Object(n.a)(j,2),O=g[0],q=g[1];return Object(i.useEffect)((function(){r.value&&q(URL.createObjectURL(r.value))}),[r.value]),Object(b.jsxs)(u.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(b.jsxs)(c.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(c.a,{item:!0,xs:6,children:Object(b.jsx)(l.a,{component:"span",m:1,className:"ovalImage",children:null!==O?Object(b.jsx)("img",{className:"ovalImage",src:O,alt:"logoaddimage"}):Object(b.jsx)("img",{className:"addimageicon",src:d,alt:"logoaddimage"})})}),Object(b.jsxs)(c.a,{item:!0,direction:"row",justifyContent:"center",alignItems:"center",xs:6,children:[Object(b.jsx)("input",{id:"file",name:"file",type:"file",onChange:function(e){t.setFieldValue("image",e.currentTarget.files[0]),t.setFieldValue("profile_type",o),null!==h&&t.setFieldValue("ngo_profile_id",h.toString())}}),Object(b.jsx)(s.a,{variant:"subtitle1",className:"filesizelabel",children:"JPG, GIF or PNG."})]})]}),p[r.name]&&Object(b.jsx)(f,{variant:"body1",children:p[r.name]})]})},Object(o.a)(l.a)({backgroundColor:"#CED4DA",width:150,height:150,borderRadius:11,justifyContent:"center",alignItems:"center",display:"flex"}),Object(o.a)(s.a)({color:"red",fontSize:12}));Object(o.a)("img")({height:120,width:80})},2118:function(e,r,t){"use strict";var n=t(6),i=t(5),a=t(2),o=t(1),u=(t(15),t(11)),c=t(187),l=t(58),s=t(66),d=t(14),m=t(7),b=t(12),f=t(149),p=t(186);function h(e){return Object(f.a)("MuiFormControlLabel",e)}var j=Object(p.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),g=t(0),O=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],q=Object(m.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[Object(n.a)({},"& .".concat(j.label),r.label),r.root,r["labelPlacement".concat(Object(d.a)(t.labelPlacement))]]}})((function(e){var r=e.theme,t=e.ownerState;return Object(a.a)(Object(n.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(j.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},Object(n.a)({},"& .".concat(j.label),Object(n.a)({},"&.".concat(j.disabled),{color:r.palette.text.disabled})))})),v=o.forwardRef((function(e,r){var t=Object(b.a)({props:e,name:"MuiFormControlLabel"}),n=t.className,m=t.componentsProps,f=void 0===m?{}:m,p=t.control,j=t.disabled,v=t.disableTypography,y=t.label,x=t.labelPlacement,E=void 0===x?"end":x,w=Object(i.a)(t,O),_=Object(l.a)(),M=j;"undefined"===typeof M&&"undefined"!==typeof p.props.disabled&&(M=p.props.disabled),"undefined"===typeof M&&_&&(M=_.disabled);var S={disabled:M};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof p.props[e]&&"undefined"!==typeof t[e]&&(S[e]=t[e])}));var I=Object(a.a)({},t,{disabled:M,label:y,labelPlacement:E}),C=function(e){var r=e.classes,t=e.disabled,n=e.labelPlacement,i={root:["root",t&&"disabled","labelPlacement".concat(Object(d.a)(n))],label:["label",t&&"disabled"]};return Object(c.a)(i,h,r)}(I);return Object(g.jsxs)(q,Object(a.a)({className:Object(u.a)(C.root,n),ownerState:I,ref:r},w,{children:[o.cloneElement(p,S),y.type===s.a||v?y:Object(g.jsx)(s.a,Object(a.a)({component:"span",className:C.label},f.typography,{children:y}))]}))}));r.a=v},2368:function(e,r,t){"use strict";t.r(r),t.d(r,"renderStepContent",(function(){return Y}));var n=t(10),i=t.n(n),a=t(18),o=t(9),u=t(8),c=t(1),l=t(2359),s=t(2370),d=t(2357),m=t(188),b=t(234),f=t(2007),p=t(344),h=t(25),j=t(38),g=t(2035),O=t(2006),q=t(34),v=t(2048),y=t(81),x=t(236),E=t(235),w=t(238),_=t(128),M=t(2075),S=t(191),I=t(66),C=t(2069),P=t(2062),F=t(2077),T=t(2070),N=t(2071),G=t(67),z=t(127),B=t(351),R=t(92),k=t(0),L=function(e){var r=e.label,t=Object(j.c)((function(e){return e.AuthReducer.userInfo.access})),n=Object(G.a)(),o=Object(q.useQuery)(["getCountries",t],Object(a.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/country-list/");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))),u=o.data,c=o.isLoading,l=o.isError,s=o.error;return Object(k.jsx)(B.a,{children:!1===c?Object(k.jsx)("div",{children:l?Object(k.jsx)(R.a,{error:s||new Error("Network response was not ok.")}):Object(k.jsxs)(S.a,{maxWidth:"sm",children:[Object(k.jsx)(I.a,{variant:"h4",gutterBottom:!0,children:r}),Object(k.jsx)(g.a,{name:"image",component:F.a,type:"input"}),void 0!==u&&C.b.map((function(e){return"Location"===e.label?Object(k.jsx)("div",{style:{margin:5},children:u&&Object(k.jsx)(g.a,{name:e.name,options:u,component:N.a,placeholder:"Select your country",isMulti:!1})}):Object(k.jsx)("div",{style:{margin:5},children:Object(k.jsx)(g.a,{name:e.name,component:T.a,label:e.label,placeholder:e.placeholder,type:e.placeholder})})})),Object(k.jsx)("div",{style:{margin:5},children:Object(k.jsx)(g.a,{name:"bio",component:P.a,label:"Bio",placeholder:"Enter Your Info"})})]})}):Object(k.jsx)(z.a,{})})},D=t(2034),A=t(68),U=t(82),W=t(237),Y=(r.default=function(){var e=Object(c.useRef)(null),r=Object(c.useRef)(null),t=Object(h.g)(),n=Object(j.b)(),p=Object(j.c)((function(e){return e.AuthReducer.userInfo})),M=Object(j.c)((function(e){return e.AuthReducer.ngo_profile_id})),S=Object(q.useMutation)((function(e){return Object(y.h)(e,p.access)})),I=S.isError,C=S.error,P=S.isSuccess,F=S.data,T=["Basic Info","Notifications"],N=Object(c.useState)(0),G=Object(u.a)(N,2),z=G[0],B=G[1],R=Object(c.useState)(!1),L=Object(u.a)(R,2),$=L[0],H=L[1],J=Object(c.useState)(Object(o.a)({},_.c)),K=Object(u.a)(J,2),Q=K[0],X=(K[1],v.b[z]),Z=z===T.length-1,ee=function(){var e=Object(a.a)(i.a.mark((function e(r,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)(200);case 2:S.mutate(r),t.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(P){if(void 0!==F)if("string"===typeof F.full_name){!function(e){var t;null===(t=r.current)||void 0===t||t.call(r,e)}("Profile Create Succesfull");var i={refresh:p.refresh,access:p.access,is_account_created:!0,user_profile:null,user_id:p.user_id};setTimeout((function(){""!==M?(n(Object(w.a)(i)),n(Object(W.a)(!0)),t("../createprofiledonee")):(n(Object(w.a)(i)),n(Object(W.a)(!0)),t("../",{replace:!0}))}),5e3)}else{!function(r){var t;null===(t=e.current)||void 0===t||t.call(e,r)}(F[0])}}else if(I)throw new Error(null===C||void 0===C?void 0:C.message)}),[I,P]),Object(k.jsx)(x.ErrorBoundary,{fallbackRender:function(e){var r=e.error,t=e.resetErrorBoundary;return Object(k.jsx)(E.a,{error:r,resetErrorBoundary:t})},onReset:function(){return H(!1)},resetKeys:[$],children:Object(k.jsxs)(V,{children:[Object(k.jsx)(A.a,{children:function(r){e.current=r}}),Object(k.jsx)(U.a,{children:function(e){r.current=e}}),Object(k.jsx)(l.a,{activeStep:z,children:T.map((function(e,r){return Object(k.jsx)(s.a,{children:Object(k.jsx)(d.a,{children:e})},e)}))}),Object(k.jsx)(g.c,{enableReinitialize:!0,initialValues:Q,validationSchema:X,onSubmit:function(e,r){Z?ee(e,r):(B((function(e){return e+1})),r.setTouched({}),r.setSubmitting(!1))},children:function(e){return Object(k.jsx)(g.b,{children:Object(k.jsxs)(m.a,{spacing:2,children:[Y(z,"Create Profile Donor"),Object(k.jsxs)(O.a,{sx:{display:"flex",justifyContent:"flex-end"},children:[z>0&&Object(k.jsx)(b.a,{onClick:function(){return B((function(e){return e-1}))},children:"Back"}),Object(k.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",disabled:e.isSubmitting,children:Z?"Create Profile":"Next"}),e.isSubmitting&&Object(k.jsx)(f.a,{})]})]})})}})]})})},function(e,r){switch(e){case 0:return Object(k.jsx)(L,{label:r});case 1:return Object(k.jsx)(M.a,{})}}),V=Object(p.a)("div")({padding:10})}}]);
//# sourceMappingURL=22.534ac3c1.chunk.js.map