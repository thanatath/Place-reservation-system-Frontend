<template>
  <div class="container" style="margin-top:1%;margin-bottom:1%;">
    <div class="row">
      <div class="col-sm">
        <div class="alert adminStyle" role="alert">
          <h4 class="text-center">ฝ่ายอาคารและสถานที่</h4>
        </div>
      </div>
    </div>

    <div v-show="target">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ผู้ใช้</th>
            <th scope="col">สถานที่</th>
            <th scope="col">ประเภท</th>
            <th scope="col">รายละเอียด</th>
          </tr>
        </thead>
        <tbody v-for="item in target" :key="item.item">
          <tr>
            <th scope="row">{{ item.get('user_Name') }}</th>
            <td>{{ item.get('place_Name') }}</td>
            <td>{{ item.get('noti_Type') }}</td>
            <td>{{ item.get('noti_Description') }}</td>
          </tr>
        </tbody>
      </table>
      <div
        class="col-sm-3"
        style="margin-bottom:15px;margin-left:auto; margin-right:0;"
      >
        <b-button @click="target = ''" class="btn btn-block">กลับ</b-button>
      </div>
    </div>

    <div class="row ">
      <div class="col-sm text-center">
        <button
          type="button"
          @click="target = noti"
          class="btn btn-warning btn-lg"
        >
          แจ้งเรื่องร้องเรียน
          <span class="badge badge-light">{{ noti.length }}</span>
        </button>
      </div>
      <div class="col-sm text-center">
        <button
          type="button"
          @click="target = forgot"
          class="btn btn-info btn-lg"
        >
          แจ้งเรื่องลืมของ
          <span class="badge badge-light">{{ forgot.length }}</span>
        </button>
      </div>
      <div class="col-sm text-center">
        <button type="button" @click="target = all" class="btn btn-dark btn-lg">
          แจ้งเรื่องทั้งหมด
          <span class="badge badge-light">{{
            forgot.length + noti.length
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      forgot: '',
      noti: '',
      target: '',
      all: '',
    };
  },
  methods: {
    async queryCountforgot() {
      this.forgot = await this.Parse.Cloud.run('noti_Search', {
        get: 'forgot',
      });
    },
    async queryCountnoti() {
      this.noti = await this.Parse.Cloud.run('noti_Search', {
        get: 'noti',
      });
    },
    async queryCountall() {
      this.all = await this.Parse.Cloud.run('noti_Search', {
        get: 'all',
      });
    },
  },
  mounted() {
    this.queryCountforgot();
    this.queryCountnoti();
    this.queryCountall();
  },
};
</script>

<style></style>
