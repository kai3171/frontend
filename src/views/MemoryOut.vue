<template>
<div>
  <div class="browse-box"><b-row class="my-1"><b-col><h3>Memory Out Error.Possibly caused by too many current users or uploading too much data</h3></b-col></b-row></div>
</div>
</template>
<style>
.link-icon {
  /* 图片样式，例如调整图标大小等 */
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.link-text {
  /* 链接文本样式 */
  color:black;
  font-weight:bold;
  font-size: 20px;
}
</style>
<script>
export default {
  name: 'Home',
  data () {
    return {
      e: 'a',
      clocks: {
        'a':'1',
        'b':'4',
        'c':'7'
      },
      clock_list: ['a', 'b', 'c'],
      clockafter: [],
      clockbefore: ['Horvath Clock', 'a', 'v']
    }
  },
  methods: {
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
