webpackJsonp([18],{Yz9R:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("gyMJ"),o={data:function(){return{email:"",timeNeed:"",name:"",id:"",dataName:"",createTime:"",checkEmail:!1,showNoEmail:!1,showPsw:!1,showPswLen:!1,newPassword:"",newPasswordConf:"",analysis:!0,uncomplete:!0,usermassage:[],clockafter:[]}},created:function(){var e=this;console.log("wait"),console.log(sessionStorage.dataName),this.id=sessionStorage.id,this.timeNeed=this.$route.params.timeNeed,this.name=localStorage.getItem("name"),this.email=localStorage.getItem("email"),this.dataName=sessionStorage.dataName,this.createTime=new Date(1e3*sessionStorage.id).toLocaleString().replace(/:\d{1,2}$/," ");var a=this.$route.params.form,t=this.$route.params.con;Object(s.q)(a,t).then(function(a){console.log(a.data),e.usermassage=a.data,e.analysis=!1;var t=new FormData;t.set("taskID",sessionStorage.id),t.set("files",sessionStorage.dataName),Object(s.f)(t).then(function(a){if(console.log("reading"),console.log(a.data),"memoryout"===a.data)return console.log("memoryout"),e.$router.push({name:"MemoryOut"}),!1;if("myunknownerror"===a.data)return console.log("unknown error"),e.$router.push({name:"notFound"}),!1;e.uncomplete=!1;var t=[];t.push(a.data),console.log("this.$route.params.clocks:"),console.log(e.$route.params.clocks);var s=[];s.push(e.$route.params.clocks),console.log(s[0]),console.log(s[0].indexOf("Horvath Clock")),console.log(-1!==s[0].indexOf("Horvath Clock")),-1!==s[0].indexOf("Horvath Clock")&&e.clockafter.push("HorvathAge"),-1!==s[0].indexOf("OriginalMethod")&&e.clockafter.push("OriginalMethod"),-1!==s[0].indexOf("Skin&Blood Clock")&&e.clockafter.push("Skin&BloodClock"),-1!==s[0].indexOf("Zhang Clock")&&e.clockafter.push("ZhangBlupredAge"),-1!==s[0].indexOf("Hannum Clock")&&e.clockafter.push("HannumAge"),-1!==s[0].indexOf("Weidner Clock")&&e.clockafter.push("WeidnerAge"),-1!==s[0].indexOf("Lin Clock")&&e.clockafter.push("LinAge"),-1!==s[0].indexOf("FeSTwo")&&e.clockafter.push("FeSTwo"),-1!==s[0].indexOf("MEAT")&&e.clockafter.push("MEAT"),-1!==s[0].indexOf("AltumAge")&&e.clockafter.push("AltumAge"),-1!==s[0].indexOf("PhenoAge")&&e.clockafter.push("PhenoAge"),-1!==s[0].indexOf("BNN")&&e.clockafter.push("BNN"),-1!==s[0].indexOf("EPM")&&e.clockafter.push("EPM"),-1!==s[0].indexOf("Cortical Clock")&&e.clockafter.push("CorticalClock"),-1!==s[0].indexOf("VidalBralo Clock")&&e.clockafter.push("VidalBraloAge"),-1!==s[0].indexOf("PedBE")&&e.clockafter.push("PedBE"),console.log(e.clockafter),e.$store.commit("setDatastsState",t),e.$store.commit("setClockListState",e.clockafter),e.analysis=!1,"success"===a.data&&(e.analysis=!1)})})}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"waittBox"},[t("b-container",{attrs:{fluid:""}},[t("b-row",{staticClass:"my-1"},[e.uncomplete?e._e():t("b-col",[t("h1",[e._v("Your data have been analyzed,you can check the result bellow or in predicted page")])]),e._v(" "),e.uncomplete&&e.analysis?t("b-col",[t("h1",[e._v("We are creating task and allocate resources for your data.Please keep in this page")])]):e._e(),e._v(" "),e.uncomplete&&!e.analysis?t("b-col",[t("h1",[e._v("Your data is being analyze,about "+e._s(e.timeNeed)+" min are needed,you can close this page,we will send you E-mail after completed")])]):e._e()],1),e._v(" "),t("hr"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.analysis&&e.uncomplete,expression:"analysis&&uncomplete"}],staticClass:"text-center"},[t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check"}})],1),e._v(" "),t("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"primary",label:"Spinning"}}),e._v(" "),t("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"success",label:"Spinning"}})],1),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.analysis&&e.uncomplete,expression:"!analysis&&uncomplete"}],staticClass:"text-center"},[t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check"}})],1),e._v(" "),t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square",variant:"primary"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check",variant:"primary"}})],1),e._v(" "),t("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"success",label:"Spinning"}})],1),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.uncomplete,expression:"!uncomplete"}],staticClass:"text-center"},[t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check"}})],1),e._v(" "),t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square",variant:"primary"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check",variant:"primary"}})],1),e._v(" "),t("b-iconstack",{attrs:{"font-scale":"5"}},[t("b-icon",{attrs:{stacked:"",icon:"square",variant:"success"}}),e._v(" "),t("b-icon",{attrs:{stacked:"",icon:"check",variant:"success"}})],1)],1),t("br"),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Task ID: ")])]),e._v(" "),t("b-col",{attrs:{sm:"3"}},[t("label",{staticClass:"labelFont"},[e._v(e._s(e.id))])])],1),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Your name: ")])]),e._v(" "),t("b-col",{attrs:{sm:"3"}},[t("label",{staticClass:"labelFont"},[e._v(e._s(e.name))])])],1),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Your email: ")])]),e._v(" "),t("b-col",{attrs:{sm:"3"}},[t("label",{staticClass:"labelFont"},[e._v(e._s(e.email))])])],1),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Your Data: ")])]),e._v(" "),t("b-col",{attrs:{sm:"9"}},[t("label",{staticClass:"labelFont"},[t("b",[e._v(e._s(e.dataName))])])])],1),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Created Time: ")])]),e._v(" "),t("b-col",{attrs:{sm:"9"}},[t("label",{staticClass:"labelFont"},[e._v(e._s(e.createTime))])])],1),e._v(" "),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Task  Status: ")])]),e._v(" "),t("b-col",{directives:[{name:"show",rawName:"v-show",value:e.analysis&&e.uncomplete,expression:"analysis&&uncomplete"}],attrs:{sm:"3"}},[t("label",{staticStyle:{"font-size":"20px",color:"red"}},[e._v("creating task")]),e._v(" "),t("b-spinner",{attrs:{small:"",label:"Small Spinner"}})],1),e._v(" "),t("b-col",{directives:[{name:"show",rawName:"v-show",value:!e.analysis&&e.uncomplete,expression:"!analysis&&uncomplete"}],attrs:{sm:"3"}},[t("label",{staticStyle:{"font-size":"20px",color:"red"}},[e._v("In analysis")]),e._v(" "),t("b-spinner",{attrs:{small:"",label:"Small Spinner"}})],1),e._v(" "),t("b-col",{directives:[{name:"show",rawName:"v-show",value:!e.uncomplete,expression:"!uncomplete"}],attrs:{sm:"3"}},[t("label",{staticStyle:{"font-size":"20px",color:"green"}},[e._v("Completed")])])],1),e._v(" "),t("b-row",{directives:[{name:"show",rawName:"v-show",value:!e.uncomplete,expression:"!uncomplete"}],staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{staticClass:"labelFont"},[e._v("Result: ")])]),e._v(" "),t("b-col",{attrs:{sm:"5"}},[t("label",{staticClass:"labelFont"},[e._v("Results are avaible "),t("router-link",{attrs:{to:"/result"}},[e._v("here")])],1)])],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(o,l,!1,function(e){t("e7cs")},"data-v-24881f57",null);a.default=c.exports},e7cs:function(e,a){}});
//# sourceMappingURL=18.a52e88efdab2ef49f84e.js.map