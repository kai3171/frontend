webpackJsonp([14],{BERp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.items.length},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._v("\n  Amount of items selected: "+e._s(e.selectedRows.length)+"\n  "),r("b-table",{attrs:{items:e.items,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage,"tbody-tr-class":e.tbodyRowClass,"primary-key":"id"},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"cell(selected)",fn:function(t){var n=t.item,s=t.field.key;return[r("b-checkbox",{model:{value:n[s],callback:function(t){e.$set(n,s,t)},expression:"item[key]"}})]}}])})],1)],1)},staticRenderFns:[]};var s=r("VU/8")({computed:{selectedRows:function(){return this.items.filter(function(e){return e.selected})}},data:function(){return{fields:[{key:"selected"},{key:"id",sortable:!0}],items:[],perPage:50,currentPage:1}},methods:{tbodyRowClass:function(e){return e.selected?["b-table-row-selected","table-primary","cursor-pointer"]:["cursor-pointer"]},rowClicked:function(e){e.selected?this.$set(e,"selected",!1):this.$set(e,"selected",!0)}},created:function(){for(var e=1;e<5e3;e++)this.items.push({id:e})}},n,!1,function(e){r("t6cQ")},"data-v-359b2cc0",null);t.default=s.exports},t6cQ:function(e,t){}});
//# sourceMappingURL=14.fbc5169aab53bcbbbbd7.js.map