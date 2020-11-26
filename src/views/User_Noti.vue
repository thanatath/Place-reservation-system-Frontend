<template>
  <div class="container" style="margin-top:1%;margin-bottom:1%;">
    <div class="row">
      <div class="col">
        <div class="alert kmitlc" role="alert">
          <h4 class="text-center">รายการแจ้งเรื่อง</h4>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ชื่อสถานที่</th>
              <th scope="col">ประเภท</th>
              <th scope="col">รายละเอียด</th>
              <th scope="col">สถานะ</th>
            </tr>
          </thead>
          <tbody v-for="item in noti" :key="item.id">
            <tr>
              <th scope="row">{{ item.get('place_Name') }}</th>
              <td>{{ item.get('noti_Type') }}</td>
              <td>{{ item.get('noti_Description') }}</td>
              <td>{{ item.get('status') }}</td>
              <td></td>
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
  name: 'User_Noti',
  data() {
    return {
      noti: null,
      modal: false,
    };
  },
  methods: {
    async querynoti() {
      var currentUser = this.Parse.User.current();
      this.noti = await this.Parse.Cloud.run('noti_Search', {
        username: currentUser.get('username'),
      });
    },
  },
  computed: mapState(['search', 'loginstate', 'searchfilter']),
  mounted() {
    this.querynoti();
    if (!this.loginstate) {
      this.modal = true;
    }
  },
};
</script>

<style></style>
