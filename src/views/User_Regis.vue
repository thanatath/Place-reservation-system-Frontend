<template>
  <div class="container">
    <div class="row" style="margin:1%">
      <div class="col-sm">
        <img
          class="img-fluid"
          src="../assets/Sub_Logo_KMITL_KMITL.png"
        />
      </div>
      <div class="col-sm ">
        <center><h4>สมัครสมาชิก</h4></center>
        <span v-show="!(username.length>=4&&username.length<=20)&&username.length>0" style="color:red">ชื่อผู้ใช้ต้องมากกว่า 4 ตัวอักษรและ น้อยกว่า 20 ตัวอักษร</span> 
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

        <span v-show="!(passwd.length>=6&&passwd.length<=20)&&passwd.length>0" style="color:red">รหัสผ่านต้องมากกว่า 6 ตัวอักษรและ น้อยกว่า 20 ตัวอักษร </span>
                        <span v-show="!checkformpwd()&&(passwd.length>=6&&passwd.length<=20)&&passwd.length>0" style="color:red"
          >รหัสผ่านยืนยันไม่ตรงกัน</span
        >
        <div class="input-group mb-3">

          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >กำหนดรหัสผ่าน</span
            >
          </div>



          <input
            type="password"
            class="form-control"
            placeholder="รหัสผ่าน"
            v-model="passwd"
            aria-label="รหัสผ่าน"
            aria-describedby="basic-addon1"
          />

          <input
            type="password"
            class="form-control"
            placeholder="ยืนยันรหัสผ่าน"
            v-model="passwdcf"
            aria-label="ยืนยันรหัสผ่าน"
            aria-describedby="basic-addon1"
          />
        </div>
  
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">ประเภทหลักสูตร</span>
            <select v-model="type" style="margin-left:7px" id="inputState" class="form-control">
              <option value="0" disabled>หลักสูตร</option>
              <option>ต่อเนื่อง</option>
              <option>ปกติ</option>
              <option>อินเตอร์</option>
              <option>บุคลากร</option>
            </select>
          </div>
     
          <select v-show="this.type!='บุคลากร'" v-model="year" style="margin-left:7px" id="inputState" class="form-control">
            <option value="0" disabled>ชั้นปี</option>
            <option value="1">ปี 1</option>
            <option value="2">ปี 2</option>
            <option value="3">ปี 3</option>
            <option value="4">ปี 4</option>
          </select>
        </div>


      
<div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >วัน/เดือน/ปี เกิด</span
            >
          </div>
            <b-form-datepicker
      id="datepicker-full-width"
      v-model="bdate"
      :min="new Date(1920,0,0)"
      :max="new Date(2004,0,0)"
      menu-class="w-100"
      calendar-width="100%"
      class="form-control"
    ></b-form-datepicker>
        </div>
          

 
 
  <span v-show="!isPhoneNo(this.phone)&&phone.length>0" style="color:red">โปรดใส่เบอร์โทรที่ถูกต้อง</span> 

        <!-- <span v-show="(this.phone.length > 10)||(isNaN(this.phone)) "  style="color:red;"
          >กำหนดเบอร์โทรได้ไม่เกิน 10 หลัก และเป็นตัวเลขทั้งหมด</span
        > -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >กำหนดเบอร์โทร</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="เบอร์โทร"
            v-model="phone"
            aria-label="เบอร์โทร"
            aria-describedby="basic-addon1"
          />
        </div>
                <span v-show="this.mail.includes('@')"  style="color:red;"
          >ไม่จำเป็นต้องใส่ @kmitl.ac.th</span
        >
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
            
            <button
              @click="register()"
              :disabled="!checkformbutton()"
              style="width:100%"
              type="button"
              class="btn btn-dark "
            >
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
      
      username: '',
      passwd: '',
      passwdcf: '',
      type:'',
      year:'',
      bdate:'',
      phone: '',
      mail: '',
    };
  },
  methods: {
   isPhoneNo(input){
	var regExp = /^0[0-9]{8,9}$/i;
	return regExp.test(input);
},
    async register() {
      let e = true
      if (this.checkformpwd()) {
        this.Parse.User.logOut();
        var user = new this.Parse.User();
        user.set('username', this.username);
        user.set('password', this.passwd);
        user.set('phone', this.phone);
        user.set('type', this.type);
        if (this.type=='บุคลากร'){this.year = ''}
        user.set('year', this.year);
        user.set('bdate', this.bdate);
        user.set('email', this.mail + '@kmitl.ac.th');
        try {
          await user.signUp();
          var currentUser = this.Parse.User.current();
          
          await this.Parse.User.logIn(this.username, this.passwd);
          this.$store.dispatch('loginstateAction', currentUser.get('username'));
          this.$router.push('/');
        } catch (error) {
          e = false
          // Show the error message somewhere and let the user try again.
          if(error.code == 202){this.$alert('ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว','ไม่สามารถสมัครสมาชิก','warning')}
          else if(error.code == 203){this.$alert('อีเมลล์นี้มีอยู่ในระบบแล้ว','ไม่สามารถสมัครสมาชิก','warning')}
          else{this.$alert(error.message,'ไม่สามารถสมัครสมาชิก','warning')}
        }
        
      }
      if(e){this.$alert('สมัครสมาชิก ' + currentUser.get('username') + ' เสร็จสิ้น','สมัคสมาชิก','success');}
      
    },
            async user_Del(userOid) {
         
      await this.Parse.Cloud.run('user_Del',{ delid:userOid});
    },
    checkformbutton() {
      return (
        this.mail && this.isPhoneNo(this.phone) && ((this.username.length>=4)&&(this.username.length<=20))&& this.bdate && this.type != 0 && (this.year != 0 || this.type == 'บุคลากร' ) && (this.passwd == this.passwdcf) && !(this.mail.includes('@')) && ((this.passwd.length>=6)&&(this.passwd.length<=20))
      );
    },
    checkformpwd() {
      if (this.passwd == this.passwdcf) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {

this.type="0"
this.year="0"


  },
};
</script>
