<template>
  <div class="contact-us" v-if="!uploaded">
    <b-alert v-model="errLogShow" variant="danger" show dismissible>Please login before asking question</b-alert>
     <b-alert v-model="noFileShow" variant="danger" show dismissible>Please input the two label below</b-alert>
    <h1>Contact Us</h1>
<!--    <form @submit="submitForm">-->
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" placeholder="Name or Institution" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" placeholder="Your advise/opening" required></textarea>
      </div>
      <button type="submit" @click="Submit">Submit</button>
<!--    </form>-->
  </div>
  <div v-else>
    <h1>Your opening have been send to our Email address.We will give you response as soon as possible.This page will be close in 10 seconds</h1>
  </div>
</template>

<script>
import { connectus } from '../api'
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      errLogShow: false,
      noFileShow: false,
      uploaded: false,
    }
  },
  methods: {
    submitForm (event) {
      event.preventDefault();
      // 这里可以编写发送邮件或保存表单数据的逻辑
      console.log('Form submitted!');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
      // 清空表单字段
      this.name = '';
      this.email = '';
      this.message = '';
    },
    Submit () {
      console.log(!sessionStorage['loginState'])
      if (!sessionStorage['loginState']) {
        this.errLogShow = true
        return 'false'
      }
      if (this.name === '') {
        this.noFileShow = true
        return 'false'
      }
      if (this.message === '') {
        this.noFileShow = true
        return 'false'
      }
      console.log('Form submitted!')
      console.log('Name:', this.name)
      console.log('Email:', localStorage.getItem('email'))
      console.log('Message:', this.message)
      let formdata = new FormData()
      formdata.append('email', localStorage.getItem('email'))
      formdata.append('name', this.name)
      formdata.append('message', this.message)
      this.uploaded = true
      connectus(formdata)
      setTimeout(() => {
        // 在这里执行延迟后的操作
        // 例如：显示弹窗、发送请求等
        this.$router.push({name: 'Home'})
      }, 10000)
    }
  }
};
</script>

<style>
.contact-us {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 235px;
}

button:hover {
  background-color: #0056b3;
}
</style>
