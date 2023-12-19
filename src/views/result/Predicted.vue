<template>
  <div class="browse-box" v-if="!readingDatabase">
    <b-container fluid>
      <b-row class="my-1"><b-col><h3>Select Data</h3></b-col></b-row>
      <hr />
      <b-row class="my-1">
        <!--跳转结果页-->
        <b-col sm="2" md="auto">
          <b>Select Model:</b>
        </b-col>
        <b-col>
          <b-button variant="danger" style="float: right" size="md" v-if="getingdataback">reading</b-button>
          <b-button variant="outline-danger" style="float: right" size="md" @click="result" v-if="!getingdataback">Result</b-button>
<!--        </b-col>-->
<!--        <b-col>-->
          <b-button variant="outline-danger" style="float: right" size="md" @click="download" v-if="!downloading">Download</b-button>
          <b-button variant="danger" style="float: right" size="md" v-if="downloading">downloading</b-button>
        </b-col>
      </b-row>
      <!--未选择数据集时 提示-->
      <b-alert v-model="errorShow" variant="danger" show dismissible>Please Select Datasets and Clocks</b-alert>
      <b-alert v-model="errorselectShow" variant="danger" show dismissible>uncomplete data are not allowed</b-alert>
      <b-row class="my-1">
        <!--模式列 数据集、组织、疾病或种族-->
        <b-col cols="9" style="border-right: 1px solid #e9ecef;">
          <b-row class="my-1">
            <b-col cols="6">
              <p>
<!--                <b-button size="sm" @click="selectAllRows">Select all</b-button>-->
                <b-button size="sm" :disabled="selectedRows.length === 0" @click="clearSelected">Clear selected</b-button>
              </p>
            </b-col>
            <!--搜索-->
            <b-col cols="6">
            <b-form-group label="search" label-for="filter-input" label-cols-sm="3"
              label-align-sm="right" label-size="sm" class="mb-0">
            <b-input-group size="sm">
              <b-form-input
                id="filter-input" v-model="filter" type="search" placeholder="Type to Search">
              </b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
            </b-form-group>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <!--表格-->
            <b-overlay :show="loading" style="width: 100%" opacity=1>
            <b-table :per-page="perPage" responsive head-variant="light" :current-page="currentPage"
              :items="sampleData" :fields="fields" :filter="filter" ref="selectableTable"
              :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" sort-icon-left
              @row-clicked="rowClicked" :tbody-tr-class="tbodyRowClass" primary-key="id" :busy="isBusy">
              <template v-slot:cell(selected)="{ item, field: { key } }" >
                <b-checkbox v-model="item[key]"></b-checkbox>
<!--                <b-input type="radio" :value="item[key]" v-model="selectedItem"></b-input>-->
              </template>
              <!-- <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template> -->
            </b-table>
          </b-overlay>
          </b-row>
          <b-row class="my-1">
            <b-col cols="4">
              <b-form-group
              label="Per page" label-for="per-page-select" label-size="sm" class="mb-0"
              label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="right">
              <b-form-select
                id="per-page-select" v-model="perPage" :options="pageOptions" size="sm">
              </b-form-select>
            </b-form-group>
            </b-col>
            <b-col cols="8">
              <b-pagination
                v-model="currentPage" :total-rows="rows" :per-page="perPage"
                align="left" size="md" class="my-0">
              </b-pagination>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- <b-row class="my-1">
        <b-button size="lg" @click="result">Result</b-button>
      </b-row> -->
    </b-container>
  </div>
  <div class="browse-box" v-else><b-row class="my-1"><b-col><h3>We are reading database,please keep this page opening</h3></b-col></b-row></div>
</template>
<script>
import { getuserDatasets, getuserDatasetsback } from '../../api'
export default {
  name: 'Browse',
  data () {
    return {
      fields: [
        //{ key: 'id', thClass: 'd-none', tdClass: 'd-none' },
        { key: 'selected', sortable: false },
        { key: 'datetime', sortable: true },
        { key: 'taskID', sortable: true },
        { key: 'Dataset', sortable: true },
        { key: 'AgeRange', sortable: false },
        { key: 'SampleNum', sortable: true },
        { key: 'Status', sortable: false }
      ], // 表格列名 默认数据集列
      selectMode: 'multi', // 每次单击都会选择/取消选择该行
      downloading: false,
      readingDatabase: true,
      readingDisease: true,
      readingRace: true,
      readingTissue: true,
      databaseReading: true,
      filter: null,
      isBusy: false, // 表格loading
      currentPage: 1, // 表格当前页码 默认 1
      perPage: 5, // 表格每页显示的行数 默认 10
      // totalRows: 1, // 表格的总行数
      pageOptions: [10, 20, { value: 100, text: 'Show a lot' }], // 表格每页行数
      sortBy: 'datetime', // 默认数据集名称排序
      sortDesc: true,
      // 模式选择
      selectedModel: 'datasets', // 模式选择 默认数据集
      sampleData: [], // 表格数据
      formDataValue: [],
      datasetsData: [],
      diseaseData: [],
      tissueData: [],
      raceData: [],
      selectedClocks: [],
      allSelectedClocks: false, // 是否全选时钟
      indeterminateClocks: false,
      clocksNum: 0, // 时钟个数
      errorShow: false, // 显示错误信息
      errorselectShow: false,
      loading: false,
      resultreading: false,
      errselected: false,
      getingdataback: false,
      selectedtaskID:[]
    }
  },
  computed: {
    // 选中的行
    selectedRows () {
      return this.sampleData.filter(item => item.selected)
    },
    rows () {
      return this.sampleData.length
    }
  },
  methods: {
    tbodyRowClass (item) {
      /* Style the row as needed */
      if (item.selected) {
        return ['b-table-row-selected', 'table-primary', 'cursor-pointer']
      } else {
        return ['cursor-pointer']
      }
    },
    rowClicked (item) {
      if (item.selected) {
        this.$set(item, 'selected', false)
      } else {
        this.$set(item, 'selected', true)
      }
    },
    selectAllRows () {
      const left = (this.currentPage - 1) * this.perPage
      const right = this.currentPage * this.perPage - 1
      for (let i = left; i <= right; i++) {
        this.$set(this.sampleData[i], 'selected', true)
      }
    },
    clearSelected () {
      this.selectedRows.forEach((item) => {
        this.$delete(item, 'selected')
      })
    },
    toggleAllClocks (checked) {
      this.selectedClocks = checked ? this.clocksList.slice() : []
      this.clocksNum = this.selectedClocks.length
    },
    result () {
      this.selectedClocks = []
      this.errselected = false
      if (this.selectedRows.length === 0) {
        console.log('shoule cancel')
        this.errorShow = true
        this.formDataValue = []
        return 'nothing'
      }
      console.log(this.errselected)
      this.selectedRows.forEach(item => {
        console.log(item.Status)
        if (item.Status !== 'complete') {
          this.errorselectShow = true
          this.errselected = true
          console.log(item.Status)
        }
        this.selectedClocks = [...this.selectedClocks , ...Object.keys(item.PredAge)]
        // this.selectedClocks.push(Object.keys(item.PredAge))
        // console.log(Object.keys(item.PredAge))
      })
      console.log(this.errselected)
      if (this.errselected === true) {
        return 'false'
      }
      console.log(this.selectedClocks)
      console.log([...new Set(this.selectedClocks)])
      let form2 = new FormData()
      this.selectedtaskID = []
      this.selectedRows.forEach(item => {
        this.selectedtaskID.push(item.taskID)
      })
      form2.append('selected', this.selectedtaskID)
      this.getingdataback = true
      getuserDatasetsback(form2).then(res => {
        console.log(res.data)
        this.$store.commit('setDatastsState', res.data.data)
        this.$store.commit('setClockListState', [...new Set(this.selectedClocks)])
        this.$router.push({
          path: '/result'
        })
      })
      // this.$store.commit('setDatastsState', this.selectedRows)
      // this.$store.commit('setClockListState', [...new Set(this.selectedClocks)])
      // this.$router.push({
      //   path: '/result'
      // })
    },
    download () {
      // 将this.selectedrows转换为JSON字符串
      let form2 = new FormData()
      this.selectedtaskID = []
      this.selectedRows.forEach(item => {
        this.selectedtaskID.push(item.taskID)
      })
      form2.append('selected', this.selectedtaskID)
      this.downloading = true
      getuserDatasetsback(form2).then(res => {
        console.log(res.data)
        this.downloading = false
        const jsonData = JSON.stringify(res.data.data)
        // 创建一个Blob对象，用于保存JSON数据
        const blob = new Blob([jsonData], { type: 'application/json' })
        // 创建一个下载链接
        const url = URL.createObjectURL(blob)
        // 创建一个虚拟的下载链接并自动触发点击事件进行下载
        const link = document.createElement('a')
        link.href = url
        link.download = 'selectedrows.json'
        link.click()
        // 释放URL对象
        URL.revokeObjectURL(url)
      })
    }
  },
  watch: {
    selectedGeo (newVal, oldVal) {
      if (newVal.length === 0) {
        this.indeterminateGeo = false
        this.allSelectedGeo = false
      } else if (newVal.length === this.selectedGeoData.length) {
        this.indeterminateGeo = false
        this.allSelectedGeo = true
      } else {
        this.indeterminateGeo = true
        this.allSelectedGeo = false
      }
    }
  },
  created () {
    if (!sessionStorage['loginState']){
      this.readingDatabase = false
      this.sampleData = []
      return 'false'
    }
    let formData = new FormData()
    console.log(localStorage.getItem('email'))
    formData.append('email', localStorage.getItem('email'))
    getuserDatasets(formData).then(res => {
      this.readingDatabase = false
      this.sampleData = res.data['data']
      console.log(res.data.data)
    })
  }
}
</script>
<style scoped>
.browse-box {
  width: 85%;
  margin: auto;
  margin-top: 20px;
}
</style>
