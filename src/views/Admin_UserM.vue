<template>
  <div>
    <div class="container" style="margin-top:1%">
      <div class="row justify-content-center">
        <div class="col-sm">
          <div class="alert adminStyle" role="alert">
            <h4 class="text-center">ข้อมูลผู้ใช้งานผู้ใช้งาน</h4>
          </div>

          <div class="row justify-content-center" style="margin-bottom:15px;">
            <div v-show="!myuserSelect" class="col-sm-4">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">ชื่อผู้ใช้งาน</span>
                </div>
                <input
                
                  v-model="userinput"
                  type="text"
                  class="form-control"
                  placeholder="ชื่อ"
                />
                <div class="input-group-append">
                  <button
                    @click="query()"
                    class="btn btn-outline-secondary"
                    type="button"
                  >
                    ค้นหา
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-show="myuserSelect" class="row justify-content-center">
            <div class="col-sm-5">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >ชื่อผู้ใช้</span
                  >
                </div>
                <input
                readonly
                  v-model="userdata_User"
                  type="text"
                  class="form-control"
                  placeholder="แก้ไขชื่อผู้ใช้"
                  aria-label="แก้ชื่อผู้ใช้"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >ประเภทหลักสูตร</span
                  >
                  <select
                  readonly
                    v-model="userdata_Type"
                    style="margin-left:7px"
                    id="inputState"
                    class="form-control"
                  >
                    <option value="0" disabled>หลักสูตร</option>
                    <option disabled>ต่อเนื่อง</option>
                    <option disabled>ปกติ</option>
                    <option disabled>อินเตอร์</option>
                    <option disabled>บุคลากร</option>
                  </select>
                </div>

                <select
                readonly
                  v-show="userdata_Type != 'บุคลากร'"
                  v-model="userdata_Year"
                  style="margin-left:7px"
                  id="inputState"
                  class="form-control"
                >
                  <option value="0" disabled>ชั้นปี</option>
                  <option disabled  value="1">ปี 1</option>
                  <option disabled value="2">ปี 2</option>
                  <option disabled value="3">ปี 3</option>
                  <option  disabled value="4">ปี 4</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >เบอร์โทร</span
                  >
                </div>
                <input
                readonly
                  v-model="userdata_Phone"
                  type="text"
                  class="form-control"
                  placeholder="แก้ไขเบอร์โทร"
                  aria-label="แก้เบอร์โทร"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1" 
                    >วัน/เดือน/ปี เกิด</span
                  >
                </div>
                <b-form-datepicker
                readonly
                  id="datepicker-full-width"
                  v-model="userdata_Bdate"
                  menu-class="w-100"
                  calendar-width="100%"
                  class="form-control"
                ></b-form-datepicker>
              </div>
            </div>
          </div>

          <div v-show="myuserSelect">
            <div
              class="row justify-content-end"
              style="margin:1%;margin-top:50px;"
            >
              <div class="col-sm-3">
                <b-button @click="clearSelect" class="btn btn-block"
                  >กลับ</b-button
                >
              </div>
            </div>
          </div>

          <table
          
            v-show="!myuserSelect && userinfo"
            class="table"
            style="margin-top:15px;"
          >
            <thead>
              <tr>
                <th scope="col">ชื่อผู้ใช้</th>
                <th scope="col">เบอร์โทร</th>
                <th scope="col">หลักสูตร</th>
                <th scope="col">ชั้นปี</th>
                <th scope="col"></th>
  
              </tr>
            </thead>
            <tbody v-for="item in userinfo" :key="item.id">
              <tr>
                <td>{{ item.get('username') }}</td>
                <td>{{ item.get('phone') }}</td>
                <td>{{ item.get('type') }}</td>
                <td>{{ item.get('year') }}</td>
                <td>
                  <button
                    type="button"
                    @click="queryselect(item.id)"
                    class="btn btn-success"
                  >
                    ดูข้อมูล
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-3">
          <router-link to="Admin">
            <button
              style="width:100%;margin-top:10px;"
              type="button"
              v-show="!myuserSelect"
              class="btn btn-secondary"
            >
              กลับ
            </button></router-link
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin_UserM',
  data() {
    return {
      userinfo: null,
      userinput: null,
      userdata_User: null,
      userdata_Type: null,
      userdata_Phone: null,
      userdata_Bdate: null,
      myuserSelect: null,
      userdata_Year: null,
    };
  },
  methods: {
    async query() {
      this.userinfo = await this.Parse.Cloud.run('user_Search', {
        username: this.userinput,
      });
    },
    clearSelect() {
      this.myuserSelect = null;
    },
    async queryselect(oId) {
      this.myuserSelect = await this.Parse.Cloud.run('user_Search', {
        userId: oId,
      });
 this.userdata_Uoid = this.myuserSelect[0].id;
      this.userdata_User = this.myuserSelect[0].get('username');
      this.userdata_Email = this.myuserSelect[0].get('email');
      this.userdata_Type = this.myuserSelect[0].get('type');
      this.userdata_Year = this.myuserSelect[0].get('year');
      this.userdata_Phone = this.myuserSelect[0].get('phone');
      this.userdata_Bdate = new Date(this.myuserSelect[0].get('bdate'));
    },

 

  },
  mounted() {
    this.myuserSelect = null;
  },
};
</script>

<style></style>
