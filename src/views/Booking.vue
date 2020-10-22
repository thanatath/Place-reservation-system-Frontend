<template>
  <div>
    <div class="container" v-for="item in myplace" :key="item.id">
      <div class="row" style="margin: 1%">
        <div class="col-sm">
          <div class="card">
            <div class="card-body">
              <h3 class="card-text text-center">
                {{ item.get('Place_name') }}
              </h3>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      :src="item.get('img').url()"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      :src="item.get('img_2').url()"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      :src="item.get('img_3').url()"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="margin: 1%">
        <div class="col-sm-5">
          <div class="card " style="width: 100%;">
            <div class="card-body">
              <h5 class="text-center">ข้อมูล</h5>
              <p><u>ชื่อสถานที่</u> : {{ item.get('Place_name') }}</p>
              <p><u>รายละเอียด</u> : {{ item.get('Place_detail') }}</p>
              <p><u>รองรับคนสูงสุด</u> : {{ item.get('Place_max') }}</p>
              <p>
                <u>อุปกรณ์ภายในสถานที่</u> :
                {{ item.get('Place_devices').join() }}
              </p>
              <p>
                <u>อุปกรณ์ภายในสถานที่ที่ชำรุด</u> :
                {{ item.get('Place_crash').join() }}
              </p>
              <p><u>ประเภทสถานที่</u> : {{ item.get('Place_type') }}</p>
              <p><u>ติดต่อ</u> : {{ item.get('Place_phone') }}</p>
              <p><u>จุดสังเกตุ</u> : {{ item.get('Place_address') }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <h5 class="text-center">จอง</h5>
          <b-calendar
            block
            v-model="datevalue"
            label-no-date-selected="เลือกวันที่จองสถานที่"
            locale="th"
            :min="new Date()"
            selected-variant="success"
            today-variant="info"
            nav-button-variant="primary"
          >
          </b-calendar>

          <div class="row" style="margin-top:20px;">
            <div class="col-sm" >
              <b-row v-if="datevalue">
                <b-col>
                  <b-time
                  v-model="timevalue"
                    label-no-time-selected="เลือกเวลาจอง"
                    label-am="เช้า"
                    label-pm="บ่าย"
                    label-ampm="เช้า/บ่าย"
                    locale="en"
                  ></b-time>
                </b-col>
              </b-row>
            </div>
            <div class="col-sm" v-if="datevalue">
              <div class="card">
                <div class="card-body">
                 <p>สนใจจองวัน {{datevalue}}</p> 
                 <p v-if="timevalue">เวลา {{timevalue}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-end" style="margin:1%;margin-top:50px;">
        <div class="col-sm-3">
          <b-button class="btn btn-block" variant="primary">จอง</b-button>
        </div>
        <div class="col-sm-3">
          <b-button
            @click="cancelbooking()"
            class="btn btn-block"
            variant="warning"
            >ยกเลิก</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Booking',

  data() {
    return {
      modal: false,
      myplace: Array,
      timevalue: '',
      datevalue: '',
    };
  },
  methods: {
    async query() {
      this.myplace = await this.Parse.Cloud.run('place', {
        placeid: this.$cookies.get('placebooking'),
      });
    },
    cancelbooking() {
      this.$cookies.remove('placebooking');
      this.$router.push({ name: 'Placelist' });
    },
    base64decode(id) {
      return 'data:image/jpeg;base64,' + id;
    },
  },
  mounted() {
    if (!this.loginstate) {
      this.$router.push({ name: 'Home' });
    } else {
      this.query();
    }
  },

  computed: mapState(['loginstate']),
};
</script>
