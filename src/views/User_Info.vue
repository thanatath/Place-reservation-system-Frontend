<template>
  <div class="container">
    <div class="row" style="margin:1%">
      <div class="col-sm">
        ข้อมูลสมาชิก ชื่อ : {{username}} รหัสผ่าน : {{passwd}} เมลล์ : {{mail}}
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'User_info',
  data() {
    return {
        username:'',
        passwd:'', 
        mail:''
    
    };
  },
  mounted() {
  var currentUser = this.Parse.User.current()
  this.username = currentUser.get('username')
  this.passwd = currentUser.get('password')
  this.mail = currentUser.get('email')
  },
};
</script>
