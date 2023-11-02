<template>
  <div class="waittBox">
    <b-container fluid>
      <b-row class="my-1">
        <b-col v-if="!uncomplete">
          <h1>Your data have been analyzed,you can check the result bellow or in predicted page</h1>
        </b-col>
        <b-col v-if="uncomplete&&analysis">
          <h1>We are creating task and allocate resources for your data.Please keep in this page</h1>
        </b-col>
        <b-col v-if="uncomplete&&!analysis">
          <h1>Your data is being analyze,about {{timeNeed}} min are needed,you can close this page,we will send you E-mail after completed</h1>
        </b-col>
      </b-row>
      <hr />
      <div class="text-center" v-show="analysis&&uncomplete">
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square"></b-icon>
          <b-icon stacked icon="check"></b-icon>
        </b-iconstack>
        <b-spinner style="width: 5rem; height: 5rem;" variant="primary" label="Spinning"></b-spinner>
        <b-spinner style="width: 5rem; height: 5rem;" variant="success" label="Spinning"></b-spinner>
      </div><br/>
      <div class="text-center" v-show="!analysis&&uncomplete">
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square"></b-icon>
          <b-icon stacked icon="check"></b-icon>
        </b-iconstack>
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square" variant="primary"></b-icon>
          <b-icon stacked icon="check" variant="primary"></b-icon>
        </b-iconstack>
        <b-spinner style="width: 5rem; height: 5rem;" variant="success" label="Spinning"></b-spinner>
      </div><br/>
      <div class="text-center" v-show="!uncomplete">
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square"></b-icon>
          <b-icon stacked icon="check"></b-icon>
        </b-iconstack>
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square" variant="primary"></b-icon>
          <b-icon stacked icon="check" variant="primary"></b-icon>
        </b-iconstack>
        <b-iconstack font-scale="5">
          <b-icon stacked icon="square" variant="success"></b-icon>
          <b-icon stacked icon="check" variant="success"></b-icon>
        </b-iconstack>
      </div><br/>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Task ID: </label></b-col>
        <b-col sm="3"><label class="labelFont">{{ id }}</label></b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Your name: </label></b-col>
        <b-col sm="3"><label class="labelFont">{{ name }}</label></b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Your email: </label></b-col>
        <b-col sm="3"><label class="labelFont">{{ email }}</label></b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Your Data: </label></b-col>
        <b-col sm="9"><label class="labelFont"><b>{{ dataName }}</b></label></b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Created Time: </label></b-col>
        <b-col sm="9"><label class="labelFont">{{ createTime }}</label></b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label class="labelFont">Task  Status: </label></b-col>
        <b-col sm="3" v-show="analysis&&uncomplete">
          <label style="font-size: 20px; color: red">creating task</label>
          <b-spinner small label="Small Spinner"></b-spinner>
        </b-col>
        <b-col sm="3" v-show="!analysis&&uncomplete">
          <label style="font-size: 20px; color: red">In analysis</label>
          <b-spinner small label="Small Spinner"></b-spinner>
        </b-col>
        <b-col sm="3" v-show="!uncomplete"><label style="font-size: 20px; color: green">Completed</label></b-col>
      </b-row>
      <b-row class="my-1" v-show="!uncomplete">
        <b-col sm="2"><label class="labelFont">Result: </label></b-col>
        <b-col sm="5"><label class="labelFont">Results are avaible <router-link to="/result">here</router-link></label></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getResStatus, sendEmailend, upload_back, killpricess } from '../api'
export default {
  data () {
    return {
      email: '',
      timeNeed: '',
      name: '',
      id: '',
      dataName: '',
      createTime: '',
      checkEmail: false,
      showNoEmail: false,
      showPsw: false,
      showPswLen: false,
      newPassword: '',
      newPasswordConf: '',
      analysis: true,
      uncomplete: true,
      usermassage: [],
      clockafter: []
    }
  },
  created () {
    console.log('wait')
    console.log(sessionStorage['dataName'])
    this.id = sessionStorage['id']
    this.timeNeed = this.$route.params.timeNeed
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.dataName = sessionStorage['dataName']
    this.createTime = new Date(sessionStorage['id'] * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
    let formData = this.$route.params.form
    let config = this.$route.params.con
    upload_back(formData, config).then(res => {
      console.log(res.data)
      this.usermassage = res.data
      this.analysis = false
      let formData2 = new FormData()
      formData2.set('taskID', sessionStorage['id'])
      formData2.set('files', sessionStorage['dataName'])
      getResStatus(formData2).then(res => {
        console.log('reading')
        console.log(res.data)
        if (res.data === 'memoryout') {
          console.log('memoryout')
          this.$router.push({name: 'MemoryOut'})
          return false
        }
        if (res.data === 'myunknownerror') {
          console.log('unknown error')
          this.$router.push({name: 'notFound'})
          return false
        }
        this.uncomplete = false
        let data = []
        data.push(res.data)
        console.log('this.$route.params.clocks:')
        console.log(this.$route.params.clocks)
        let clockbefore = []
        clockbefore.push(this.$route.params.clocks)
        console.log(clockbefore[0])
        console.log(clockbefore[0].indexOf('Horvath Clock'))
        console.log(clockbefore[0].indexOf('Horvath Clock') !== -1)
        if (clockbefore[0].indexOf('Horvath Clock') !== -1) {
          this.clockafter.push('HorvathAge')
        }
        if (clockbefore[0].indexOf('OriginalMethod') !== -1) {
          this.clockafter.push('OriginalMethod')
        }
        if (clockbefore[0].indexOf('Skin&Blood Clock') !== -1) {
          this.clockafter.push('Skin&BloodClock')
        }
        if (clockbefore[0].indexOf('Zhang Clock') !== -1) {
          this.clockafter.push('ZhangBlupredAge')
        }
        if (clockbefore[0].indexOf('Hannum Clock') !== -1) {
          this.clockafter.push('HannumAge')
        }
        if (clockbefore[0].indexOf('Weidner Clock') !== -1) {
          this.clockafter.push('WeidnerAge')
        }
        if (clockbefore[0].indexOf('Lin Clock') !== -1) {
          this.clockafter.push('LinAge')
        }
        if (clockbefore[0].indexOf('FeSTwo') !== -1) {
          this.clockafter.push('FeSTwo')
        }
        if (clockbefore[0].indexOf('MEAT') !== -1) {
          this.clockafter.push('MEAT')
        }
        if (clockbefore[0].indexOf('AltumAge') !== -1) {
          this.clockafter.push('AltumAge')
        }
        if (clockbefore[0].indexOf('PhenoAge') !== -1) {
          this.clockafter.push('PhenoAge')
        }
        if (clockbefore[0].indexOf('BNN') !== -1) {
          this.clockafter.push('BNN')
        }
        if (clockbefore[0].indexOf('EPM') !== -1) {
          this.clockafter.push('EPM')
        }
        if (clockbefore[0].indexOf('Cortical Clock') !== -1) {
          this.clockafter.push('CorticalClock')
        }
        if (clockbefore[0].indexOf('VidalBralo Clock') !== -1) {
          this.clockafter.push('VidalBraloAge')
        }
        if (clockbefore[0].indexOf('PedBE') !== -1) {
          this.clockafter.push('PedBE')
        }
        console.log(this.clockafter)
        this.$store.commit('setDatastsState', data)
        this.$store.commit('setClockListState', this.clockafter)
        this.analysis = false
        if (res.data === 'success') {
          this.analysis = false
        }
      })
    })
  }
}
</script>
  <style scoped>
.waittBox {
  margin: auto;
  margin-top: 40px;
  width: 70%;
}
.labelFont {
  font-size: 20px;
}
</style>
