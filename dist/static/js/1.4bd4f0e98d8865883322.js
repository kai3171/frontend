webpackJsonp([1],{"2KxR":function(t,e){t.exports=function(t,e,r,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(r+": incorrect invocation!");return t}},"3fs2":function(t,e,r){var o=r("RY/4"),n=r("dSzd")("iterator"),s=r("/bQp");t.exports=r("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||s[o(t)]}},"4WTo":function(t,e,r){var o=r("NWt+");t.exports=function(t,e){var r=[];return o(t,!1,r.push,r,e),r}},"5zde":function(t,e,r){r("zQR9"),r("qyJz"),t.exports=r("FeBl").Array.from},"7Doy":function(t,e,r){var o=r("EqjI"),n=r("7UMu"),s=r("dSzd")("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),o(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},"9Bbf":function(t,e,r){"use strict";var o=r("kM2E");t.exports=function(t){o(o.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},"9C8M":function(t,e,r){"use strict";var o=r("evD5").f,n=r("Yobk"),s=r("xH/j"),a=r("+ZMJ"),i=r("2KxR"),l=r("NWt+"),c=r("vIB/"),u=r("EGZi"),d=r("bRrM"),f=r("+E39"),h=r("06OY").fastKey,p=r("LIJb"),v=f?"_s":"size",g=function(t,e){var r,o=h(e);if("F"!==o)return t._i[o];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,c){var u=t(function(t,o){i(t,u,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=o&&l(o,r,t[c],t)});return s(u.prototype,{clear:function(){for(var t=p(this,e),r=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete r[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var r=p(this,e),o=g(r,t);if(o){var n=o.n,s=o.p;delete r._i[o.i],o.r=!0,s&&(s.n=n),n&&(n.p=s),r._f==o&&(r._f=n),r._l==o&&(r._l=s),r[v]--}return!!o},forEach:function(t){p(this,e);for(var r,o=a(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(o(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(p(this,e),t)}}),f&&o(u.prototype,"size",{get:function(){return p(this,e)[v]}}),u},def:function(t,e,r){var o,n,s=g(t,e);return s?s.v=r:(t._l=s={i:n=h(e,!0),k:e,v:r,p:o=t._l,n:void 0,r:!1},t._f||(t._f=s),o&&(o.n=s),t[v]++,"F"!==n&&(t._i[n]=s)),t},getEntry:g,setStrong:function(t,e,r){c(t,e,function(t,r){this._t=p(t,e),this._k=r,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))},r?"entries":"values",!r,!0),d(e)}}},ALrJ:function(t,e,r){var o=r("+ZMJ"),n=r("MU5D"),s=r("sB3e"),a=r("QRG4"),i=r("oeOm");t.exports=function(t,e){var r=1==t,l=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d,h=e||i;return function(e,i,p){for(var v,g,b=s(e),m=n(b),y=o(i,p,3),_=a(m.length),w=0,k=r?h(e,_):l?h(e,0):void 0;_>w;w++)if((f||w in m)&&(g=y(v=m[w],w,b),t))if(r)k[w]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:k.push(v)}else if(u)return!1;return d?-1:c||u?u:k}}},BDhv:function(t,e,r){var o=r("kM2E");o(o.P+o.R,"Set",{toJSON:r("m9gC")("Set")})},Gu7T:function(t,e,r){"use strict";e.__esModule=!0;var o,n=r("c/Tr"),s=(o=n)&&o.__esModule?o:{default:o};e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,s.default)(t)}},HpRW:function(t,e,r){"use strict";var o=r("kM2E"),n=r("lOnJ"),s=r("+ZMJ"),a=r("NWt+");t.exports=function(t){o(o.S,t,{from:function(t){var e,r,o,i,l=arguments[1];return n(this),(e=void 0!==l)&&n(l),void 0==t?new this:(r=[],e?(o=0,i=s(l,arguments[2],2),a(t,!1,function(t){r.push(i(t,o++))})):a(t,!1,r.push,r),new this(r))}})}},LIJb:function(t,e,r){var o=r("EqjI");t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},MC2Q:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("mvHQ"),n=r.n(o),s=r("lHA8"),a=r.n(s),i=r("fZjL"),l=r.n(i),c=r("Gu7T"),u=r.n(c),d=r("gyMJ"),f={name:"Browse",data:function(){return{fields:[{key:"selected",sortable:!1},{key:"datetime",sortable:!0},{key:"taskID",sortable:!0},{key:"Dataset",sortable:!0},{key:"AgeRange",sortable:!1},{key:"SampleNum",sortable:!0},{key:"Status",sortable:!1}],selectMode:"multi",downloading:!1,readingDatabase:!0,readingDisease:!0,readingRace:!0,readingTissue:!0,databaseReading:!0,filter:null,isBusy:!1,currentPage:1,perPage:5,pageOptions:[10,20,{value:100,text:"Show a lot"}],sortBy:"datetime",sortDesc:!0,selectedModel:"datasets",sampleData:[],formDataValue:[],datasetsData:[],diseaseData:[],tissueData:[],raceData:[],selectedClocks:[],allSelectedClocks:!1,indeterminateClocks:!1,clocksNum:0,errorShow:!1,errorselectShow:!1,loading:!1,resultreading:!1,errselected:!1,getingdataback:!1,selectedtaskID:[]}},computed:{selectedRows:function(){return this.sampleData.filter(function(t){return t.selected})},rows:function(){return this.sampleData.length}},methods:{tbodyRowClass:function(t){return t.selected?["b-table-row-selected","table-primary","cursor-pointer"]:["cursor-pointer"]},rowClicked:function(t){t.selected?this.$set(t,"selected",!1):this.$set(t,"selected",!0)},selectAllRows:function(){for(var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage-1,r=t;r<=e;r++)this.$set(this.sampleData[r],"selected",!0)},clearSelected:function(){var t=this;this.selectedRows.forEach(function(e){t.$delete(e,"selected")})},toggleAllClocks:function(t){this.selectedClocks=t?this.clocksList.slice():[],this.clocksNum=this.selectedClocks.length},result:function(){var t=this;if(this.selectedClocks=[],this.errselected=!1,0===this.selectedRows.length)return console.log("shoule cancel"),this.errorShow=!0,this.formDataValue=[],"nothing";if(console.log(this.errselected),this.selectedRows.forEach(function(e){console.log(e.Status),"complete"!==e.Status&&(t.errorselectShow=!0,t.errselected=!0,console.log(e.Status)),t.selectedClocks=[].concat(u()(t.selectedClocks),u()(l()(e.PredAge)))}),console.log(this.errselected),!0===this.errselected)return"false";console.log(this.selectedClocks),console.log([].concat(u()(new a.a(this.selectedClocks))));var e=new FormData;this.selectedtaskID=[],this.selectedRows.forEach(function(e){t.selectedtaskID.push(e.taskID)}),e.append("selected",this.selectedtaskID),this.getingdataback=!0,Object(d.i)(e).then(function(e){console.log(e.data),t.$store.commit("setDatastsState",e.data.data),t.$store.commit("setClockListState",[].concat(u()(new a.a(t.selectedClocks)))),t.$router.push({path:"/result"})})},download:function(){var t=this,e=new FormData;this.selectedtaskID=[],this.selectedRows.forEach(function(e){t.selectedtaskID.push(e.taskID)}),e.append("selected",this.selectedtaskID),this.downloading=!0,Object(d.i)(e).then(function(e){console.log(e.data),t.downloading=!1;var r=n()(e.data.data),o=new Blob([r],{type:"application/json"}),s=URL.createObjectURL(o),a=document.createElement("a");a.href=s,a.download="selectedrows.json",a.click(),URL.revokeObjectURL(s)})}},watch:{selectedGeo:function(t,e){0===t.length?(this.indeterminateGeo=!1,this.allSelectedGeo=!1):t.length===this.selectedGeoData.length?(this.indeterminateGeo=!1,this.allSelectedGeo=!0):(this.indeterminateGeo=!0,this.allSelectedGeo=!1)}},created:function(){var t=this;if(!sessionStorage.loginState)return this.readingDatabase=!1,this.sampleData=[],"false";var e=new FormData;console.log(localStorage.getItem("email")),e.append("email",localStorage.getItem("email")),Object(d.h)(e).then(function(e){t.readingDatabase=!1,t.sampleData=e.data.data,console.log(e.data.data)})}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.readingDatabase?r("div",{staticClass:"browse-box"},[r("b-row",{staticClass:"my-1"},[r("b-col",[r("h3",[t._v("We are reading database,please keep this page opening")])])],1)],1):r("div",{staticClass:"browse-box"},[r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"my-1"},[r("b-col",[r("h3",[t._v("Select Data")])])],1),t._v(" "),r("hr"),t._v(" "),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"2",md:"auto"}},[r("b",[t._v("Select Model:")])]),t._v(" "),r("b-col",[t.getingdataback?r("b-button",{staticStyle:{float:"right"},attrs:{variant:"danger",size:"md"}},[t._v("reading")]):t._e(),t._v(" "),t.getingdataback?t._e():r("b-button",{staticStyle:{float:"right"},attrs:{variant:"outline-danger",size:"md"},on:{click:t.result}},[t._v("Result")]),t._v(" "),t.downloading?t._e():r("b-button",{staticStyle:{float:"right"},attrs:{variant:"outline-danger",size:"md"},on:{click:t.download}},[t._v("Download")]),t._v(" "),t.downloading?r("b-button",{staticStyle:{float:"right"},attrs:{variant:"danger",size:"md"}},[t._v("downloading")]):t._e()],1)],1),t._v(" "),r("b-alert",{attrs:{variant:"danger",show:"",dismissible:""},model:{value:t.errorShow,callback:function(e){t.errorShow=e},expression:"errorShow"}},[t._v("Please Select Datasets and Clocks")]),t._v(" "),r("b-alert",{attrs:{variant:"danger",show:"",dismissible:""},model:{value:t.errorselectShow,callback:function(e){t.errorselectShow=e},expression:"errorselectShow"}},[t._v("uncomplete data are not allowed")]),t._v(" "),r("b-row",{staticClass:"my-1"},[r("b-col",{staticStyle:{"border-right":"1px solid #e9ecef"},attrs:{cols:"9"}},[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{cols:"6"}},[r("p",[r("b-button",{attrs:{size:"sm",disabled:0===t.selectedRows.length},on:{click:t.clearSelected}},[t._v("Clear selected")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"search","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"my-1"},[r("b-overlay",{staticStyle:{width:"100%"},attrs:{show:t.loading,opacity:"1"}},[r("b-table",{ref:"selectableTable",attrs:{"per-page":t.perPage,responsive:"","head-variant":"light","current-page":t.currentPage,items:t.sampleData,fields:t.fields,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-icon-left":"","tbody-tr-class":t.tbodyRowClass,"primary-key":"id",busy:t.isBusy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},"row-clicked":t.rowClicked},scopedSlots:t._u([{key:"cell(selected)",fn:function(e){var o=e.item,n=e.field.key;return[r("b-checkbox",{model:{value:o[n],callback:function(e){t.$set(o,n,e)},expression:"item[key]"}})]}}],null,!1,2613980722)})],1)],1),t._v(" "),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-size":"sm","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right"}},[r("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"8"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.rows,"per-page":t.perPage,align:"left",size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=r("VU/8")(f,h,!1,function(t){r("ojbf")},"data-v-18b6fd96",null);e.default=p.exports},Mhyx:function(t,e,r){var o=r("/bQp"),n=r("dSzd")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[n]===t)}},"NWt+":function(t,e,r){var o=r("+ZMJ"),n=r("msXi"),s=r("Mhyx"),a=r("77Pl"),i=r("QRG4"),l=r("3fs2"),c={},u={};(e=t.exports=function(t,e,r,d,f){var h,p,v,g,b=f?function(){return t}:l(t),m=o(r,d,e?2:1),y=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(s(b)){for(h=i(t.length);h>y;y++)if((g=e?m(a(p=t[y])[0],p[1]):m(t[y]))===c||g===u)return g}else for(v=b.call(t);!(p=v.next()).done;)if((g=n(v,m,p.value,e))===c||g===u)return g}).BREAK=c,e.RETURN=u},"RY/4":function(t,e,r){var o=r("R9M2"),n=r("dSzd")("toStringTag"),s="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),n))?r:s?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},bRrM:function(t,e,r){"use strict";var o=r("7KvD"),n=r("FeBl"),s=r("evD5"),a=r("+E39"),i=r("dSzd")("species");t.exports=function(t){var e="function"==typeof n[t]?n[t]:o[t];a&&e&&!e[i]&&s.f(e,i,{configurable:!0,get:function(){return this}})}},"c/Tr":function(t,e,r){t.exports={default:r("5zde"),__esModule:!0}},dY0y:function(t,e,r){var o=r("dSzd")("iterator"),n=!1;try{var s=[7][o]();s.return=function(){n=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var r=!1;try{var s=[7],a=s[o]();a.next=function(){return{done:r=!0}},s[o]=function(){return a},t(s)}catch(t){}return r}},fBQ2:function(t,e,r){"use strict";var o=r("evD5"),n=r("X8DO");t.exports=function(t,e,r){e in t?o.f(t,e,n(0,r)):t[e]=r}},ioQ5:function(t,e,r){r("HpRW")("Set")},lHA8:function(t,e,r){t.exports={default:r("pPW7"),__esModule:!0}},m9gC:function(t,e,r){var o=r("RY/4"),n=r("4WTo");t.exports=function(t){return function(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");return n(this)}}},msXi:function(t,e,r){var o=r("77Pl");t.exports=function(t,e,r,n){try{return n?e(o(r)[0],r[1]):e(r)}catch(e){var s=t.return;throw void 0!==s&&o(s.call(t)),e}}},oNmr:function(t,e,r){r("9Bbf")("Set")},oeOm:function(t,e,r){var o=r("7Doy");t.exports=function(t,e){return new(o(t))(e)}},ojbf:function(t,e){},pPW7:function(t,e,r){r("M6a0"),r("zQR9"),r("+tPU"),r("ttyz"),r("BDhv"),r("oNmr"),r("ioQ5"),t.exports=r("FeBl").Set},qo66:function(t,e,r){"use strict";var o=r("7KvD"),n=r("kM2E"),s=r("06OY"),a=r("S82l"),i=r("hJx8"),l=r("xH/j"),c=r("NWt+"),u=r("2KxR"),d=r("EqjI"),f=r("e6n0"),h=r("evD5").f,p=r("ALrJ")(0),v=r("+E39");t.exports=function(t,e,r,g,b,m){var y=o[t],_=y,w=b?"set":"add",k=_&&_.prototype,S={};return v&&"function"==typeof _&&(m||k.forEach&&!a(function(){(new _).entries().next()}))?(_=e(function(e,r){u(e,_,t,"_c"),e._c=new y,void 0!=r&&c(r,b,e[w],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in k&&(!m||"clear"!=t)&&i(_.prototype,t,function(r,o){if(u(this,_,t),!e&&m&&!d(r))return"get"==t&&void 0;var n=this._c[t](0===r?0:r,o);return e?this:n})}),m||h(_.prototype,"size",{get:function(){return this._c.size}})):(_=g.getConstructor(e,t,b,w),l(_.prototype,r),s.NEED=!0),f(_,t),S[t]=_,n(n.G+n.W+n.F,S),m||g.setStrong(_,t,b),_}},qyJz:function(t,e,r){"use strict";var o=r("+ZMJ"),n=r("kM2E"),s=r("sB3e"),a=r("msXi"),i=r("Mhyx"),l=r("QRG4"),c=r("fBQ2"),u=r("3fs2");n(n.S+n.F*!r("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,d,f=s(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,b=0,m=u(f);if(g&&(v=o(v,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&i(m))for(r=new h(e=l(f.length));e>b;b++)c(r,b,g?v(f[b],b):f[b]);else for(d=m.call(f),r=new h;!(n=d.next()).done;b++)c(r,b,g?a(d,v,[n.value,b],!0):n.value);return r.length=b,r}})},ttyz:function(t,e,r){"use strict";var o=r("9C8M"),n=r("LIJb");t.exports=r("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return o.def(n(this,"Set"),t=0===t?0:t,t)}},o)},"xH/j":function(t,e,r){var o=r("hJx8");t.exports=function(t,e,r){for(var n in e)r&&t[n]?t[n]=e[n]:o(t,n,e[n]);return t}}});
//# sourceMappingURL=1.4bd4f0e98d8865883322.js.map