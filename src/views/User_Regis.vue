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
        <center><h4>สมัครสมาชิก</h4></center>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >กำหนดชื่อผู้ใช้</span
            >
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
            <span class="input-group-text" id="basic-addon1"
              >กำหนดรหัสผ่าน</span
            >
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
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="อีเมลล์สถาบัน"
            v-model="mail"
            aria-label="อีเมลล์สถาบัน"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@kmitl.ac.th</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">
            <button @click="register()" style="width:100%" type="button" class="btn btn-dark ">
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User_Regis',
  data() {
    return {
      username:'',
      passwd:'',
      mail:'',
    }
  },
methods: {
 async register(){

 var user = new this.Parse.User();
user.set("username", this.username);
user.set("password", this.passwd);
user.set("email", this.mail +'@kmitl.ac.th');
try {
  await user.signUp();
  var currentUser = this.Parse.User.current()
  alert('สมัครสมาชิกเสร็จสิ้น' + currentUser.get('username'))
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
 
  }
},
};

</script>

 