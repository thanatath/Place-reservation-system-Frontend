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
  </div>
</template>

<script>
export default {
  name: 'User_Booking',
  data() {
    return {
      mybooked: '',
      notitarget: '',
      notitarget_Img: '',
      type: [],
      description: null,
    };
  },
  methods: {
    async noti_Action() {
      var currentUser = this.Parse.User.current();
      await this.Parse.Cloud.run('noti', {
        place_Id: this.notitarget[0].id,
        place_Name: this.notitarget[0].get('Place_name'),
        noti_Type: this.type,
        noti_Description: this.description,
        user_Name: currentUser.get('username'),
      });
    },
    async query() {
      var currentUser = this.Parse.User.current();
      this.mybooked = await this.Parse.Cloud.run('placeBooked', {
        username: currentUser.get('username'),
      });
    },
    async querytarget(place_Id) {
      this.notitarget = await this.Parse.Cloud.run('place', {
        placeid: place_Id,
      });
      this.notitarget_Img = this.notitarget[0].get('img').url();
    },
    noti(place_Id) {
      this.querytarget(place_Id);
    },
  },
  mounted() {
    this.query();
  },
};
</script>

<style></style>
