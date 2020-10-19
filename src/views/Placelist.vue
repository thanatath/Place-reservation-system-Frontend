<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top:20px;">
        <div v-if="searchtext" class="alert alert-primary" role="alert">
          ผลการค้นหาของ : <span class="text-danger"> {{ searchtext }} </span>
          <button
            type="button"
            @click="
              upsearchtext('');
              $store.dispatch('searchAction', '');
            "
            style="margin-left:5px;"
            class="btn btn-info "
          >
            ลบการค้นหา
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="margin:1%; ">
        <div v-for="item in myplace" :key="item.Place_id" class="col-sm-4">
          <div class="card" style="width: 100%;margin-bottom:10px;">
            <img
              class="card-img-top"
              :src="item.get('img').url()"
              alt="Card image cap"
            />
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
              <a @click="testsendidplace(item.get('Place_id'))" class=" btn btn-warning">สนใจจองสถานที่</a>
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
    base64decode(id) {
      return 'data:image/jpeg;base64,' + id;
    },
    upsearchtext(text) {
      if (text.lenght < 0) {
        this.searchtext = null;
      } else {
        this.searchtext = text;
      }
    },
    async query(data) {
      this.myplace = await this.Parse.Cloud.run('place', { target: data });
    },
    testsendidplace(item){

      alert(item)
    }
  },

  data() {
    return {
      myplace: Array,
      searchtext: this.search,
    };
  },
  computed: mapState(['search']),

  mounted() {
    this.query(this.search);
    this.upsearchtext(this.search);
  },
  watch: {
    search: function(val) {
      this.query(val);
      this.upsearchtext(val);
    },
  },
};
</script>
