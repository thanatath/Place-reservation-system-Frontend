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

          <div class="card" style="margin-top:10px;">
            <div class="card-body">
              <h5 class="text-center">การจองในสถานที่นี้</h5>
            </div>

            <table v-show="!booked.length==0" class="table">
              <thead>
                <tr>
                  <th scope="col">คนจอง</th>
                  <th scope="col">วันจอง</th>
                  <th scope="col">เวลาจอง</th>
                </tr>
              </thead>
              <tbody v-for="item in booked" :key="item.id">
                <tr>
                  <td>{{ item.get('Name_booking') }}</td>
                  <td>
                    {{
                      'วันที่ ' +
                        new Date(item.get('Date_booking')).getDate() +
                        ' ' +
                        get_month(new Date(item.get('Date_booking')).getMonth())
                    }}
                  </td>
                  <td>
                    {{ convert_booked_to_represent(item.get('Time_booking')) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <span v-show="booked.length==0" class="text-center" style="color:red;margin-bottom:15px;"
              >ยังไม่มีผู้จองสถานที่นี้</span
            >
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
            :max="maxdate"
            selected-variant="success"
            today-variant="info"
            nav-button-variant="primary"
            @context="dateonContext"
          >
          </b-calendar>

          <div class="row" style="margin-top:20px;">
            <div v-if="datevalue" class="col-sm">
              <span v-if="checktimevalid()" style="color:red;"
                >ไม่สามารถจองเวลาที่ผ่านไปแล้วได้
                กรุณาจองชั่วโมงหรือวันถัดไป</span
              >
              <div>
                เริ่มจอง {{ timeformat(converttime(timest)) }}

                <b-form-input
                  id="range-1"
                  v-model="timest"
                  type="range"
                  min="0"
                  max="9"
                ></b-form-input>
                <span v-show="!checktimevalid()">
                  เป็นเวลา {{ timeed }} ชั่วโมง
                  <b-form-input
                    id="range-1"
                    v-model="timeed"
                    type="range"
                    min="1"
                    max="3"
                  ></b-form-input>
                </span>
              </div>
            </div>
            <div class="col-sm" v-if="datevalue">
              <div class="card">
                <div class="card-body">
                  <p><u>สนใจจอง</u> {{ dateformatted }}</p>
                  <p v-if="timest">
                    <u>ตั้งแต่เวลา</u>
                    {{ timeformat(converttime(parseInt(timest))) }}
                  </p>

                  <p v-if="timeed">
                    <u>จนถึงเวลา</u>

                    {{
                      timeformat(
                        converttime(parseInt(timest) + parseInt(timeed))
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-end" style="margin:1%;margin-top:50px;">
        <div class="col-sm-3">
          <b-button
            :disabled="Bookingvalid()"
            class="btn btn-block"
            @click="bookingaction(item.get('Place_id'))"
            variant="primary"
            >จอง</b-button
          >
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
      maxdate: new Date(),
      timevalue: '',
      datevalue: '',
      dateformatted: '',
      booked: '',
      timest: 0.1,
      timeed: 1,
    };
  },
  methods: {
    get_month(num) {
      let thaimonth = new Array(
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม'
      );
      return thaimonth[num];
    },
    convert_booked_to_represent(ar) {
      let myar = new Array();
      myar = ar;
      return (
        this.timeformat(parseInt(myar[0])) +
        ' ถึง ' +
        this.timeformat(parseInt(myar[0]) + parseInt(myar.length) - 1)
      );
    },
    Bookingvalid() {
      return this.checktimevalid && !this.datevalue.length > 0;
    },
    rangtoarray() {
      var myar = new Array();

      for (
        let index = this.converttime(parseInt(this.timest));
        index <=
        this.converttime(parseInt(this.timest) + parseInt(this.timeed));
        index++
      ) {
        myar.push(index);
      }
      return myar;
    },

    bookingaction(Place_id) {
      var currentUser = this.Parse.User.current();
      this.Parse.Cloud.run('booking', {
        Name_booking: currentUser.get('username'),
        Place_id: Place_id,
        Time_booking: this.rangtoarray(),
        Date_booking: new Date(this.datevalue),
      });
    },

    async checkbooked() {
      this.booked = await this.Parse.Cloud.run('placeBooked', {
        Place_id: this.$cookies.get('placebooking'),
        
      });
       
    },

    checktimevalid() {
      return (
        this.timest <= parseInt(new Date().getHours() - 9) &&
        new Date().getDate() == this.datevalue.substring(8, 10)
      );
    },
    timeformat(time) {
      if (time < 12) {
        return time + ' โมงเช้า';
      }
      if (time == 12) {
        return ' เที่ยง';
      }
      if (time == 13) {
        return ' บ่ายโมง';
      }
      if (time > 12 && time < 16) {
        return 'บ่าย ' + (time - 12) + ' โมง';
      }
      if (time >= 16 && time < 19) {
        return +(time - 12) + ' โมงเย็น';
      }
      if (time >= 19) {
        return +(time - 18) + ' ทุ่ม';
      }
    },
    converttime(raw) {
      return 9 + parseInt(raw);
    },
    dateonContext(ctx) {
      this.dateformatted = ctx.selectedFormatted;
      this.nowday = ctx.getDay;
    },

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
    this.maxdate.setDate(this.maxdate.getDate() + 30);
    this.checkbooked();
    
  },

  computed: mapState(['loginstate']),
};
</script>
