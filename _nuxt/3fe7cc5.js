(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{275:function(t,e,n){t.exports=n.p+"img/logo.702b3dc.png"},334:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("19125d1f",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(334)},380:function(t,e,n){var o=n(67)(!1);o.push([t.i,'.v-application .primary{background-color:#069c54!important;border-color:#069c54!important}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#069c54!important;color:#fff!important}.v-application{font-family:"Prompt",sans-serif}.v-toolbar__title{text-align:center;width:100%;font-weight:700}.w-100{width:100%}.display-none{display:none}.otp-input{width:40px;height:40px;padding:3px;margin:0 5px;font-size:20px;border-radius:4px;border:1px solid rgba(0,0,0,.3);text-align:center}.otp-input.error{border:1px solid red!important}.otp-input::-webkit-inner-spin-button,.otp-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}',""]),t.exports=o},398:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{dialog:!1,dialogMsg:"",otp:""}},methods:{validate:function(){var t=!0;return 6!==this.otp.length&&(t=!1,this.dialog=!0,this.dialogMsg="กรุณากรอก OTP ให้ครบถ้วน"),t},otpValOnClick:function(){var t=this;if(this.validate()){var e=this.$store.getters.getOtpresponse.otpresponse,n=this.$store.getters.getOtpresponse.tel,o=new FormData;o.append("code",this.otp),o.append("otpresponse",e),o.append("tel",n),this.$axios.post("https://line.cpcrop.com/api/otpVal.php",o).then((function(e){t.$axios.patch("https://cropliff-default-rtdb.firebaseio.com/members/".concat(t.$store.getters.getLine.userId,"/profile.json"),t.$store.getters.getEmpData).then((function(e){t.$router.push("/register/done")})).catch((function(t){return console.log(t)}))})).catch((function(e){console.log("error otpSend ==> ",e),t.dialog=!0,t.dialogMsg="ผิดพลาด OTP ไม่ถูกต้อง"}))}},handleOnComplete:function(t){this.otp=t,console.log("OTP completed: ",t)},handleOnChange:function(t){console.log("OTP changed: ",t)},handleClearInput:function(){this.$refs.otpInput.clearInput()}}},r=(n(379),n(60)),l=n(84),c=n.n(l),d=n(400),f=n(401),v=n(316),h=n(272),m=n(390),x=n(405),_=n(393),C=n(391),w=n(392),k=n(279),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{attrs:{flat:""}},[o("v-toolbar-title",[t._v("Login")])],1),t._v(" "),o("v-container",[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[o("div",{staticClass:"text-center my-5"},[o("img",{attrs:{src:n(275),alt:"",width:"200px"}})])])],1),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[o("h2",{staticClass:"text-center py-3 mb-8"},[o("b",[t._v("ยืนยันตัวตนด้วย OTP")])]),t._v(" "),o("form",{attrs:{autocomplete:"off"}},[o("v-otp-input",{ref:"otpInput",staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{"input-classes":"otp-input",separator:"-","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0},on:{"on-change":t.handleOnChange,"on-complete":t.handleOnComplete},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}}),t._v(" "),o("div",{staticClass:"d-grid gap-2 col-8 mx-auto mt-4"},[o("v-btn",{staticClass:"w-100 mt-8 mb-5",attrs:{rounded:"",color:"primary",large:"",dark:""},on:{click:function(e){return t.otpValOnClick()}}},[t._v("\n              ยืนยัน OTP\n            ")]),t._v(" "),o("div",{staticClass:"d-flex justify-center"},[o("v-btn",{staticClass:"mr-3",attrs:{small:"",depressed:"",rounded:""},on:{click:function(e){return t.handleClearInput()}}},[t._v("Clear Input\n              ")]),t._v(" "),o("v-btn",{attrs:{small:"",depressed:"",rounded:""},on:{click:function(e){return t.otpOnClick()}}},[t._v("\n                ขอ OTP อีกครั้ง\n              ")])],1)],1)],1)])],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title"),t._v(" "),o("v-card-text",{domProps:{innerHTML:t._s(t.dialogMsg)}}),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Ok\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:m.a,VContainer:x.a,VDialog:_.a,VRow:C.a,VSpacer:w.a,VToolbarTitle:k.a})}}]);