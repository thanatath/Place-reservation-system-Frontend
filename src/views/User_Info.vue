<template>
  <div class="container">
    <div class="row justify-content-center" style="margin:1% ">
      <div class="col-sm-8 ">
        <div class="alert kmitlc" role="alert">
          <h4 class="text-center">ข้อมูลผู้ใช้งาน</h4>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">ชื่อผู้ใช้</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="ชื่อผู้ใช้"
            aria-label="Username"
            v-model="username"
            aria-describedby="basic-addon1"
          />
        </div>

        <span
          v-show="
            !(passwd.length >= 6 && passwd.length <= 20) && passwd.length > 0
          "
          style="color:red"
          >รหัสผ่านต้องมากกว่า 6 ตัวอักษรและ น้อยกว่า 20 ตัวอักษร
        </span>
        <span
          v-show="
            !checkformpwd() &&
              passwd.length >= 6 && passwd.length <= 20 &&
              passwd.length > 0
          "
          style="color:red"
          >รหัสผ่านยืนยันไม่ตรงกัน</span
        >
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >แก้ไขรหัสผ่าน</span
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

        <span v-show="this.mail.includes('@')" style="color:red;"
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
        <span
          v-show="!isPhoneNo(this.phone) && phone.length > 0"
          style="color:red"
          >โปรดใส่เบอร์โทรที่ถูกต้อง</span
        >

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">เบอร์โทร</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="เบอร์โทร"
            v-model="phone"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              >ประเภทหลักสูตร</span
            >
            <select
              v-model="type"
              style="margin-left:7px"
              id="inputState"
              class="form-control"
            >
              <option value="0" disabled>หลักสูตร</option>
              <option>ต่อเนื่อง</option>
              <option>ปกติ</option>
              <option>อินเตอร์</option>
              <option>บุคลากร</option>
            </select>
          </div>

          <select
            v-show="this.type != 'บุคลากร'"
            v-model="year"
            style="margin-left:7px"
            id="inputState"
            class="form-control"
          >
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
            :min="new Date(1920, 0, 0)"
            :max="new Date()"
            menu-class="w-100"
            calendar-width="100%"
            class="form-control"
          ></b-form-datepicker>
        </div>
        <div class="text-right">
          <button
            type="button"
            :disabled="!checkformbutton()"
            @click="query_Update()"
            style="margin-right:15px;"
            class="btn btn-warning"
          >
            แก้ไขข้อมูล</button
          ><router-link to="/">
            <button type="button" class="btn btn-dark">
              หน้าหลัก
            </button></router-link
          >
        </div>
      </div>
    </div>

    <div>
      <div>
        <b-modal
          :no-close-on-backdrop="true"
          v-model="modal"
          hide-footer
          hide-header
        >
          <div class="d-block text-center">
            <h3>โปรดเข้าสู่ระบบก่อนเข้าสู้ส่วนผู้ใช้งาน</h3>
          </div>
          <b-button
            class="mt-3"
            variant="outline-danger"
            block
            @click="$router.push('/User_Login')"
            >เข้าสู่ระบบ</b-button
          >
          <b-button
            class="mt-2"
            variant="outline-warning"
            block
            @click="$router.push('/User_Regis')"
            >สมัครสมาชิก</b-button
          >
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'User_info',
  data() {
    return {
      username: '',
      mail: '',
      phone: '',
      type: '',
      year: '',
      bdate: '',
      passwd: '',
      passwdcf: '',
      modal: false,
    };
  },
  methods: {
    checkformpwd() {
      if (this.passwd == this.passwdcf) {
        return true;
      } else {
        return false;
      }
    },
    isPhoneNo(input) {
      var regExp = /^0[0-9]{8,9}$/i;
      return regExp.test(input);
    },
    checkformbutton() {
      return (
        this.mail &&
        this.isPhoneNo(this.phone) &&
        this.bdate &&
        this.type != 0 &&
        (this.year != 0 || this.type == 'บุคลากร') &&
        !this.mail.includes('@') &&
        this.passwd == this.passwdcf &&
        this.passwd.length >= 6 && this.passwd.length <= 20
      );
    },
    async query_Update() {
      var currentUser = this.Parse.User.current();
      currentUser.set('username', this.username);
      currentUser.set('email', this.mail + '@kmitl.ac.th');
      currentUser.set('phone', this.phone);
      currentUser.set('type', this.type);
      currentUser.set('year', this.year);
      currentUser.set('bdate', new Date(this.bdate).toString());
      if (this.passwd) {
        currentUser.set('password', this.passwd);
      }

      let e = true;
      await currentUser.save().catch((error) => {
        e = false
        if (error.code == 202) {
          this.$alert(
            'ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว',
            'ไม่สามารถแก้ไขข้อมูล',
            'warning'
          );
        } else if (error.code == 203) {
          this.$alert(
            'อีเมลล์นี้มีอยู่ในระบบแล้ว',
            'ไม่สามารถแก้ไขข้อมูล',
            'warning'
          );
        } else {
          this.$alert(error.message, 'ไม่สามารถแก้ไขข้อมูล', 'warning');
        }
      });
      if(e){this.$alert('แก้ไขข้อมูลเรียบร้อยแล้ว','แก้ไขข้อมูล','success');}
    },
  },
  computed: mapState(['search', 'loginstate', 'searchfilter']),
  mounted() {
    if (!this.loginstate) {
      this.modal = true;
    }
    var currentUser = this.Parse.User.current();
    this.username = currentUser.get('username');
    let mail = currentUser.get('email');
    this.mail = mail.substring(0, mail.indexOf('@'));
    this.phone = currentUser.get('phone');
    this.type = currentUser.get('type');
    this.year = currentUser.get('year');
    this.bdate = new Date(currentUser.get('bdate'));
  },
};
</script>
