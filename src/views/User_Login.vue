<template>
  <div class="container">
    <div class="row" style="margin:1%">
      <div class="col-sm">
        <img
          class="img-fluid"
          src="https://www.cs-camp.net/assets/images/logo/Sub_Logo_KMITL_KMITL.png"
        />
      </div>
      <div class="col-sm ">
        <center><h4>เข้าสู่ระบบ</h4></center>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">ชื่อผู้ใช้</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="ผู้ใช้"
            v-model="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">รหัสผ่าน</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="รหัสผ่าน"
            v-model="passwd"
            aria-label="รหัสผ่าน"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">
            <button
              @click="login()"
              style="width:100%"
              type="button"
              class="btn btn-dark "
            >
              เข้าสู่ระบบ
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'User_Regis',
  data() {
    return {
      username: '',
      passwd: '',
      loginuser : '',
    };
  },
  methods: {
    async login() {
      await this.Parse.User.logIn(this.username, this.passwd);
      var currentUser = this.Parse.User.current();
      if (currentUser) {
       this.$store.dispatch('loginstateAction',currentUser.get('username')) 
       this.$router.push('/')
      } else {
        alert('รหัสผ่านผิด');
      }
    },
  },
  computed: mapState(['loginstate']),
};
</script>
