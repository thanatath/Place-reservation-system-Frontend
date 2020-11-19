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

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">อีเมลล์</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="อีเมลล์"
            v-model="mail"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

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
             @click="query_Update()"
            style="margin-right:15px;"
            class="btn btn-warning"
          >
            แก้ไขข้อมูล
          </button><router-link to="/">
          <button type="button" class="btn btn-dark">
            หน้าหลัก
          </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User_info',
  data() {
    return {
      username: '',
      mail: '',
      phone:'',
      type:'',
      year:'',
      bdate:'',
      passwd:null,
      passwdcf:null,
    };
  },
  methods: {
    async query_Update() {
      var currentUser = this.Parse.User.current();
      currentUser.set('username',this.username);
      currentUser.set('email',this.mail);
      currentUser.set('phone',this.phone);
      currentUser.set('type',this.type);
      currentUser.set('year',this.year);
      currentUser.set('bdate',new Date(this.bdate).toString())
      if(this.passwd){currentUser.set('password',this.passwd)}
      currentUser.save()
          },
  },
  mounted() {
    var currentUser = this.Parse.User.current();
    this.username = currentUser.get('username');
    this.mail = currentUser.get('email');
    this.phone = currentUser.get('phone');
    this.type = currentUser.get('type');
    this.year = currentUser.get('year');
    this.bdate = new Date(currentUser.get('bdate'));
    
  },
};
</script>
