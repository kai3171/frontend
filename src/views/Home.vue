<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<template>
<div>
    <b-jumbotron style="height: 500px; padding-top: 45px; text-align: center;">
      <template #header><p style="color: rgb(6, 71, 133)">Welcome to DNAmClocks</p></template>

    <template #lead>
      A Platform Of Epigenetic Clock Review and Age Prediction
    </template>
    <p>
      For more information visit website
    </p>
    <br/>
    <b-container class="bv-example-row">
        <b-row style="width: 75%; margin: auto;">
          <b-col>
            <div class="item">
                <span class="subtext">DNAm Clocks</span>
                <span class="count">16</span>
            </div>
          </b-col>
          <b-col>
            <div class="item">
              <span class="subtext">Samples</span>
              <span class="count">26690</span>
            </div>
          </b-col>
          <b-col>
            <div class="item">
              <span class="subtext">Datasets</span>
              <span class="count">140</span>
            </div>
          </b-col>
      </b-row>
    </b-container>
    <br/><br/>
      <b-button variant="success" to="/browse" size="lg">Evaluation</b-button>
    <b-button variant="primary" to="/Clocks" size="lg">Prediction</b-button>
  </b-jumbotron>
  <b-container class="bv-example-row">
    <b-row style="margin-top:60px;margin-right: -7%;">
      <b-col class="md-4">
        <b-row><a href="https://www.bu.edu/"><img src="..\assets\Bstu.png" class="link-icon"></a></b-row>
        <b-row><a href="https://www.bu.edu/" class="link-text">Boston University</a></b-row>
        <p></p>
      </b-col>
      <b-col class="md-4">
        <div>
        <b-row><a href="https://www.ccu.edu.cn/"><img src="..\assets\ccu.png" class="link-icon" ></a></b-row>
        <b-row><a href="https://www.ccu.edu.cn/" class="link-text">Changchun University</a></b-row>
        </div>
        <p></p>
      </b-col>
      <b-col class="md-4">
        <b-row><a href="http://ccut.edu.cn/"><img src="..\assets\ccut2.png" class="link-icon"></a></b-row>
        <b-row><a href="http://ccut.edu.cn/" class="link-text">Changchun University of Technology</a></b-row>
        <p></p>
      </b-col>
      <b-col class="md-4" style="margin-left: 8px;">
        <b-row><a href="https://www.nenu.edu.cn/"><img src="..\assets\nnu.png" class="link-icon"></a></b-row>
        <b-row><a href="https://www.nenu.edu.cn/" class="link-text" style="margin-left: 8px;">Northeast Normal University</a></b-row>
        <p></p>
      </b-col>
      <b-col class="md-4">
        <b-row><a href="https://www.jlu.edu.cn/"><img src="..\assets\ju.png" class="link-icon"></a></b-row>
        <b-row><a href="https://www.jlu.edu.cn/" class="link-text" style="margin-left: 10px;">Jilin University</a></b-row>
        <p></p>
      </b-col>
    </b-row>
  </b-container>
  <div style="margin-top: 30px">
  </div>
</div>
</template>
<style>
.link-icon {
  /* 图片样式，例如调整图标大小等 */
  width: 60px;
  height: 60px;
  margin-left:45px;
  border-radius: 50%;
}

.link-text {
  /* 链接文本样式 */
  color:black;
  font-weight:bold;
  font-size: 15px;
  padding:10px;
}
</style>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    upload () {
      this.$router.push({
        path: '/result'
      })
    },
    browse () {
      this.$router.push({
        path: '/browse'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subtext {
  font-size: 18px;
  border-bottom: 2px solid #000000;
}

.count {
  font-size: 30px;
  margin-top: 8px;
  font-weight: bold;
  color: rgb(6, 71, 133)
}

.title{
  font-size: 3.5em;
  color: #000000;
  font-weight: bold;
}
</style>
