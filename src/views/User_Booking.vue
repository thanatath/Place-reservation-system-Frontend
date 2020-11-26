<template>
  <div class="container" style="margin-top:1%;margin-bottom:1%;">
    <div class="row">
      <div class="col">
        <div class="alert kmitlc" role="alert">
          <h4 class="text-center">รายการจอง</h4>
        </div>

        <div
          v-show="notitarget"
          class="card"
          style="width:100%;margin-bottom:15px;padding:12px;"
        >
          <img
            class="card-img-top"
            :src="notitarget_Img"
            alt="Card image cap"
          />
          <div class="card-body">
            <div class="text-center">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="inlineCheckbox1"
                  value="แจ้งเรื่อง"
                  v-model="type"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >แจ้งเรื่อง</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="type"
                  id="inlineCheckbox1"
                  value="ลืมของ"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                  >ลืมของ</label
                >
              </div>
            </div>

            <div class="input-group" style="margin-top:15px;">
              <div class="input-group-prepend">
                <span class="input-group-text">รายละเอียด</span>
              </div>
              <textarea
                v-model="description"
                class="form-control"
                aria-label="รายละเอียด"
              ></textarea>
            </div>
          </div>

          <div class="text-right">
            <button
              type="button"
              @click="noti_Action"
              style="margin-right:15px;"
              class="btn btn-warning"
            >
              แจ้งเรื่อง
            </button>
            <button
              type="button"
              @click="notitarget = null"
              class="btn btn-dark"
            >
              ยกเลิก
            </button>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ชื่อสถานที่</th>
              <th scope="col">ติดต่อ</th>
              <th scope="col">วันเข้าใช้สถานที่</th>
              <th scope="col">เวลาเข้าใช้สถานที่</th>
              <th scope="col">แจ้งเรื่อง</th>
            </tr>
          </thead>
          <tbody v-for="item in mybooked" :key="item.id">
            <tr>
              <th scope="row">{{ item.get('Place_name') }}</th>
              <td>{{ item.get('Place_contact') }}</td>
              <td>{{ item.get('Context_date') }}</td>
              <td>{{ item.get('Context_time') }}</td>
              <td>
                <button
                  type="button"
                  @click="noti(item.get('Place_id'))"
                  class="btn btn-warning"
                >
                  แจ้งเรื่อง
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
  name: 'User_Booking',
  data() {
    return {
      mybooked: '',
      notitarget: '',
      notitarget_Img: '',
      type: [],
      description: null,
      modal: false,
    };
  },
  methods: {
    cleartarget() {
      this.notitarget = null;
    },
    async noti_Action() {

let e = true
try {
        var currentUser = this.Parse.User.current();
      await this.Parse.Cloud.run('noti', {
        place_Id: this.notitarget[0].id,
        place_Name: this.notitarget[0].get('Place_name'),
        noti_Type: this.type,
        noti_Description: this.description,
        user_Name: currentUser.get('username'),
      });
} catch (error) {
  this.$alert('ไม่สามารถแจ้งเรื่องได้ '+error.message,'แจ้งเรื่อง','warning');
  e = false
}
if (e){this.$alert('แจ้งเรื่องแล้ว','แจ้งเรื่อง','success');}

await this.cleartarget();
      
      
      
    },
    async query() {
      var currentUser = this.Parse.User.current();
      this.mybooked = await this.Parse.Cloud.run('placeBooked', {
        Place_username: currentUser.get('username'),
      });
      
    },
    async querytarget(place_Id) {
     
      try {
        this.notitarget = await this.Parse.Cloud.run('place', {
          placeid: place_Id,
        });



        this.notitarget_Img = 'https://kmitlplace2.tk/'+this.notitarget[0].get('img').url().substring(this.notitarget[0].get('img').url().indexOf('parse'));
      } catch (error) {
        if (error.message == "Cannot read property 'get' of undefined") {
          this.$alert(
            'สถานที่นี้ไม่มีอยู่แล้ว ไม่สามารถแจ้งเรื่องได้',
            'ไม่สามารถแจ้งเรื่อง',
            'warning'
          );
          
        }

        this.cleartarget();
      }
      
 
    },
    noti(place_Id) {
      this.querytarget(place_Id);
    },
  },
  computed: mapState(['search', 'loginstate', 'searchfilter']),
  mounted() {
    this.query();
    if (!this.loginstate) {
      this.modal = true;
    }
  },
};
</script>
