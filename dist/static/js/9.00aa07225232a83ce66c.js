webpackJsonp([9],{BERp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("mvHQ"),a=s.n(l),o=s("gyMJ"),c=s("mtWM"),r=s.n(c),i={name:"Browse",data:function(){return{fields:[{key:"id",thClass:"d-none",tdClass:"d-none"},{key:"selected",sortable:!1},{key:"Dataset",sortable:!0},{key:"AgeRange",sortable:!1},{key:"Age_unit",sortable:!1},{key:"SampleNum",sortable:!0}],selectMode:"multi",readingDatabase:!0,filter:null,cancelsource:null,isBusy:!1,currentPage:1,perPage:5,pageOptions:[10,20,{value:100,text:"Show a lot"}],sortBy:"Dataset",sortDesc:!1,optionsModel:[{item:"datasets",name:"Datasets"},{item:"tissue",name:"Tissue"},{item:"disease",name:"Disease"},{item:"race",name:"Race"}],selectedModel:"datasets",sampleData:[],selectedrows:[{name:"test"},{name:"nothing"}],datasetsData:[],diseaseData:[],tissueData:[],raceData:[],clocksList:["HorvathAge","Skin&BloodClock","ZhangBlupredAge","HannumAge","WeidnerAge","LinAge","PedBE","FeSTwo","MEAT","AltumAge","PhenoAge","BNN","EPM","CorticalClock","VidalBraloAge"],genderList:["Female","Male","Unknown"],selectedGender:["Female","Male","Unknown"],selectedClocks:[],allSelectedClocks:!1,indeterminateClocks:!1,clocksNum:0,errorShow:!1,loading:!1}},computed:{selectedRows:function(){return this.sampleData.filter(function(e){return e.selected})},rows:function(){return this.sampleData.length}},mounted:function(){window.addEventListener("beforeunload",this.handleBeforeUnload)},methods:{cancelb:function(){console.log("destory"),console.log(1234);var e=new FormData;e.append("user_pid",1234),Object(o.j)(e)},tbodyRowClass:function(e){return e.selected?["b-table-row-selected","table-primary","cursor-pointer"]:["cursor-pointer"]},rowClicked:function(e){e.selected?this.$set(e,"selected",!1):this.$set(e,"selected",!0)},selectAllRows:function(){for(var e=(this.currentPage-1)*this.perPage,t=this.currentPage*this.perPage-1,s=e;s<=t;s++)this.$set(this.sampleData[s],"selected",!0)},clearSelected:function(){var e=this;this.selectedRows.forEach(function(t){e.$delete(t,"selected")})},toggleAllClocks:function(e){this.selectedClocks=e?this.clocksList.slice():[],this.clocksNum=this.selectedClocks.length},changeModel:function(e){return this.$store.commit("setModelState",e),"datasets"===e?(this.clearSelected(),this.fields=[{key:"selected",sortable:!1},{key:"Dataset",sortable:!0},{key:"AgeRange",sortable:!1},{key:"Age_unit",sortable:!1},{key:"SampleNum",sortable:!0}],this.sampleData=this.datasetsData,!0):"tissue"===e?(this.clearSelected(),this.fields=[{key:"selected",sortable:!1},{key:"Tissues",sortable:!0},{key:"SampleNum",sortable:!0}],this.sampleData=this.tissueData,!0):"disease"===e?(this.fields=[{key:"selected",sortable:!1},{key:"Diseases",sortable:!0},{key:"SampleNum",sortable:!0}],this.sampleData=this.diseaseData,!0):"race"===e?(this.clearSelected(),this.fields=[{key:"selected",sortable:!1},{key:"Races",sortable:!0},{key:"SampleNum",sortable:!0}],this.sampleData=this.raceData,!0):void 0},result:function(){this.selectedClocks,this.$store.commit("setDatastsState",this.selectedRows),this.$store.commit("setClockListState",this.selectedClocks),0!==this.selectedClocks.length?this.$router.push({path:"/result"}):this.errorShow=!0}},watch:{selectedClocks:function(e,t){0===e.length?(this.indeterminateClocks=!1,this.allSelectedClocks=!1):e.length===this.clocksList.length?(this.indeterminateClocks=!1,this.allSelectedClocks=!0):(this.indeterminateClocks=!0,this.allSelectedClocks=!1)},selectedGeo:function(e,t){0===e.length?(this.indeterminateGeo=!1,this.allSelectedGeo=!1):e.length===this.selectedGeoData.length?(this.indeterminateGeo=!1,this.allSelectedGeo=!0):(this.indeterminateGeo=!0,this.allSelectedGeo=!1)}},beforeDestroy:function(){console.log("destory");var e=new FormData;e.append("user_pid",12345),Object(o.j)(e)},handleBeforeUnload:function(e){console.log("destory");var t=new FormData;t.append("user_pid",12345),Object(o.j)(t)},created:function(){var e=a()(this.selectedrows),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),l=document.createElement("a");l.href=s,l.download="selectedrows.json",l.click(),URL.revokeObjectURL(s),console.log("created");var o=r.a.CancelToken;this.cancelsource=o.source()}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.readingDatabase?s("div",{staticClass:"browse-box"},[s("b-button",{staticStyle:{float:"right"},attrs:{size:"md"},on:{click:function(t){return e.cancelb()}}},[e._v("cancel")]),s("b-row",{staticClass:"my-1"},[s("b-col",[s("h3",[e._v("We are reading database,please keep this page opening")])])],1)],1):s("div",{staticClass:"browse-box"},[s("b-container",{attrs:{fluid:""}},[e.readingDatabase?s("b-row",{staticClass:"my-1"},[s("b-col",[s("h3",[e._v("We are reading database,please keep waiting")])])],1):e._e(),e._v(" "),e.readingDatabase?e._e():s("b-row",{staticClass:"my-1"},[s("b-col",[s("h3",[e._v("Select Data")])])],1),e._v(" "),s("hr"),e._v(" "),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"2",md:"auto"}},[s("b",[e._v("Select Model:")])]),e._v(" "),s("b-col",{attrs:{cols:"4"}},[s("b-form-radio-group",{staticClass:"mb-3",attrs:{options:e.optionsModel,"value-field":"item","text-field":"name"},on:{change:e.changeModel},model:{value:e.selectedModel,callback:function(t){e.selectedModel=t},expression:"selectedModel"}})],1),e._v(" "),s("b-col",[s("b-button",{staticStyle:{float:"right"},attrs:{size:"md"},on:{click:e.result}},[e._v("Result")])],1)],1),e._v(" "),s("b-alert",{attrs:{variant:"danger",show:"",dismissible:""},model:{value:e.errorShow,callback:function(t){e.errorShow=t},expression:"errorShow"}},[e._v("Please Select Datasets and Clocks")]),e._v(" "),s("b-row",{staticClass:"my-1"},[s("b-col",{staticStyle:{"border-right":"1px solid #e9ecef"},attrs:{cols:"9"}},[s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{cols:"6"}},[s("p",[s("b-button",{attrs:{size:"sm"},on:{click:e.selectAllRows}},[e._v("Select all")]),e._v(" "),s("b-button",{attrs:{size:"sm",disabled:0===e.selectedRows.length},on:{click:e.clearSelected}},[e._v("Clear selected")])],1)]),e._v(" "),s("b-col",{attrs:{cols:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"search","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e._v(" "),s("b-input-group-append",[s("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1)],1),e._v(" "),s("b-row",{staticClass:"my-1"},[s("b-overlay",{staticStyle:{width:"100%"},attrs:{show:e.loading,opacity:"1"}},[s("b-table",{ref:"selectableTable",attrs:{"per-page":e.perPage,responsive:"","head-variant":"light","current-page":e.currentPage,items:e.sampleData,fields:e.fields,filter:e.filter,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-icon-left":"","tbody-tr-class":e.tbodyRowClass,"primary-key":"id",busy:e.isBusy},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"cell(selected)",fn:function(t){var l=t.item,a=t.field.key;return[s("b-checkbox",{model:{value:l[a],callback:function(t){e.$set(l,a,t)},expression:"item[key]"}})]}}],null,!1,2613980722)})],1)],1),e._v(" "),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{cols:"4"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-size":"sm","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right"}},[s("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),s("b-col",{attrs:{cols:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.rows,"per-page":e.perPage,align:"left",size:"md"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1),e._v(" "),s("b-col",{attrs:{cols:"3"}},[s("b",[e._v("select Gender: ")]),e._v(" "),s("b-form-checkbox-group",{staticClass:"mb-3",attrs:{options:e.genderList,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.selectedGender,callback:function(t){e.selectedGender=t},expression:"selectedGender"}}),e._v(" "),s("b",[e._v("Select Clocks: ")]),e._v("  \n        "),s("b-badge",{attrs:{to:"/clocks",variant:"danger"}},[e._v("Clocks Info")]),e._v(" "),s("b-form-group",{scopedSlots:e._u([{key:"label",fn:function(){return[s("b-form-checkbox",{staticStyle:{color:"blue"},attrs:{indeterminate:e.indeterminateClocks,"aria-describedby":"clocksList","aria-controls":"clocksList",size:"lg"},on:{change:e.toggleAllClocks},model:{value:e.allSelectedClocks,callback:function(t){e.allSelectedClocks=t},expression:"allSelectedClocks"}},[e._v("\n              "+e._s(e.allSelectedClocks?"Un-select All":"Select All")+"\n            ")])]},proxy:!0}],null,!1,843595091)},[e._v(" "),s("b-container",{staticClass:"bv-example-row bv-example-row-flex-cols"},[s("b-row",[s("b-form-group",{scopedSlots:e._u([{key:"default",fn:function(t){var l=t.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{options:e.clocksList,"aria-describedby":l,name:"flavour-2a",stacked:""},model:{value:e.selectedClocks,callback:function(t){e.selectedClocks=t},expression:"selectedClocks"}})]}}],null,!1,3406398518)})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=s("VU/8")(i,n,!1,function(e){s("rOG8")},"data-v-8ae82f5c",null);t.default=d.exports},rOG8:function(e,t){}});
//# sourceMappingURL=9.00aa07225232a83ce66c.js.map