<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top:20px;">
        <div v-if="searchtext" class="alert alert-primary" role="alert">
          ผลการค้นหาของ : <span class="text-danger"> {{ searchtext }} </span>
        </div>
      </div>
    </div>
    <div class="container">
      <span v-if="this.myplace.length == 0 "
        ><center style="color:red;">
          แย่จัง! ไม่พบผลการค้นที่ต้องการ
          <router-link to="/">กลับหน้าหลัก</router-link>
        </center></span
      >
      <div v-else class="row" style="margin:1%">
        <div v-for="item in myplace" :key="item.Place_id" class="col-sm-4">
          <div>
            <div class="card" style="width: 100%;margin-bottom:10px;">
              <img
                @load="bodyload"
                class="card-img-top"
                :src="'https://kmitlplace2.tk/'+item.get('img').url().substring(item.get('img').url().indexOf('parse'))"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.get('Place_name') }}</h5>
              <p class="card-text">{{ item.get('Place_detail') }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item ">
                รองรับคนไม่เกิน : {{ item.get('Place_max') }} คน
              </li>
              <li class="list-group-item">
                ประเภทสถานที่ : {{ item.get('Place_type') }}
              </li>
              <li class="list-group-item">
                อุปกรณ์ภายในสถานที่ : {{ item.get('Place_devices').join() }}
              </li>
            </ul>
            <div class="d-flex justify-content-end card-body">
              <a
                @click="bookingaction(item.id)"
                class=" btn btn-warning"
                >สนใจจองสถานที่</a
              >
            </div>
          </div>
        </div>
       
        <div>
          <div>
            <b-modal v-model="modal" hide-footer hide-header>
              <div class="d-block text-center">
                <h3>โปรดเข้าสู่ระบบก่อนเข้าจองสถานที่</h3>
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

 <div v-show="!pageload" class="row">
          <div class="col align-self-center" style="margin-bottom: 25px;">
            <div class="text-center">
              <div>
                <b-spinner
                  style="width: 3rem; height: 3rem;"
                  label="Large Spinner"
                  variant="warning"
                ></b-spinner>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Placelist',
  methods: {
    bodyload() {
      this.pageload = true;
    },
    upsearchtext(text) {
      if (text.lenght < 0) {
        this.searchtext = null;
      } else {
        this.searchtext = text;
      }
    },
    async query(data) {
      try {
        this.myplace = await this.Parse.Cloud.run('place', { target: data });
      } catch (error) {
        alert(error);
      }
    },
    bookingaction(placeid) {
      if (!this.loginstate) {
        this.modal = true;
      } else {
        this.$cookies.set('placebooking', placeid);
        this.$router.push({ name: 'Booking' });
      }
    },
  },

  data() {
    return {
      myplace: Array,
      searchtext: this.search,
      modal: false,
      pageload: false,
    };
  },
  computed: mapState(['search', 'loginstate', 'searchfilter']),

  mounted() {
    if (this.searchfilter) {
      this.myplace = this.searchfilter;
      if(this.myplace.length==0){this.pageload=true}
      this.$store.dispatch('search_filterAction', null);
    } else {
      this.query(this.searchtext);
      if (this.searchtext) {
        this.upsearchtext(this.searchtext);
      }
    }
  },
  watch: {
    search: function(val) {
      this.query(val);
      this.upsearchtext(val);
    },
  },
};
</script>
