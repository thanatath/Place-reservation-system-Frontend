<template>
  <!-- Content -->
  <div class="container">
    <div class="row" style="margin: 1%">
      <div class="col-sm-8">
        <div class="alert kmitlc" role="alert">
          <h3 class="text-center">จองสถานที่</h3>
        </div>
        <!-- Picker Zone-->
        <div class="row">
          <!-- Left Picker Zone-->
          <div class="col-sm">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >ประเภทสถานที่</label
                >
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                v-model="ptype"
                @change="updatefindtext()"
              >
                <option value="อาคาร">อาคาร</option>
                <option value="ลานกว้าง">ลานกว้าง</option>
                <option value="ห้อง">ห้อง</option>
              </select>
            </div>
          </div>
          <!-- Right Picker Zone-->
          <div class="col-sm-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >รองรับคน</label
                >
              </div>
              <select
                @change="updatefindtext()"
                v-model="pmax"
                class="custom-select"
                id="inputGroupSelect01"
              >
                <option value="10">ไม่เกิน 10 คน</option>
                <option value="50">ไม่เกิน 50 คน</option>
                <option value="100">ไม่เกิน 100 คน</option>
              </select>
            </div>
          </div>
        </div>
        <!-- End Picker Zone-->
        <!-- Second Picker -->
        <div class="row justify-content-between">
          <!-- Type Zone -->
          <div class="col-sm-6">
            <div class="card" style="widt:100%;">
  <div class="card-body">
    <h5 class="card-title"> <span id="find" class="badge badge-primary">สนใจค้นหา</span></h5>
 
                

            <span style="white-space: pre-wrap; ">{{ findtext }}</span>
 
  </div>
</div>

          </div>
          <!-- End Type Zone -->
          <!-- Device Zone -->
          <div class="col-sm-6">
            <div class="card" style="width: auto">
              <div class="card-header">อุปกรณ์</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label class="checkbox-bootstrap">
                    <input
                      value="โปรเจ็คเตอร์"
                      type="checkbox"
                      v-model="devices"
                      @change="updatefindtext()"
                    />
                    <span class="checkbox-placeholder"></span>
                    โปรเจ็คเตอร์
                  </label>
                </li>
                <li class="list-group-item">
                  <label class="checkbox-bootstrap">
                    <input
                      value="จอภาพ"
                      type="checkbox"
                      v-model="devices"
                      @change="updatefindtext()"
                    />
                    <span class="checkbox-placeholder"></span>
                    จอภาพ
                  </label>
                </li>
                <li class="list-group-item">
                  <label class="checkbox-bootstrap">
                    <input
                      value="เครื่องเสียง"
                      type="checkbox"
                      v-model="devices"
                      @change="updatefindtext()"
                    />
                    <span class="checkbox-placeholder"></span>
                    เครื่องเสียง
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <!-- End Device Zone -->
        </div>
        <!-- Bottom Zone -->
        <div class="row justify-content-end" style="margin-top: 2%">
 
          <div  class="col-sm-6">



            <button @click="searchfilter()" type="button" class="btn btn-lg btn-block kmitlc">
              ค้นหา
            </button>
          </div>
        </div>
        <!-- End Bottom Zone -->
      </div>
      <!-- Right Zone -->
      <div style="margin-top:10px" class="col-sm-4">
        <div class="row">
          <div class="col">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://e-file.huawei.com/-/media/EBG/Images/case-study/cases_study_banner/How%20Did%20Huawei%20Build%20the%20100G%20SDN%20Campus%20Network%20for%20KMITL%20of%20Thailand-revised-banner-list.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://static.trueplookpanya.com/tppy/member/m_525000_527500/525016/cms/images/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2%20I%20love%20KMITL%20(2).jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://miro.medium.com/max/8064/1*ja89Odmw_LV4zXB_5u66OQ@2x.jpeg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- News -->
        <div class="row">
          <div class="col">
            <h5 class="text-center">
              <span class="badge badge-pill badge-warning kmitlc"
                >แจ้งข่าวสาร</span
              >
            </h5>
            <ul class="list-group">
              <li class="list-group-item">ข่าว 1</li>
              <li class="list-group-item">ข่าว 2</li>
              <li class="list-group-item">ข่าว 3</li>
            </ul>
          </div>
        </div>
        <!--End News -->
      </div>
    </div>
 <p style="color:white"> หลุ่มนี้ไม่มี นัดทะพูม ล้อมเขด</p>
  </div>

  <!-- End Right Zone -->
  <!-- End Content -->
</template>

<script>
export default {
  name: 'Home',
  methods: {
    updatefindtext() {
      this.findtext =
        ' สถานที่ประเภท' + this.ptype + ' ที่สามารถรองรับคนได้ไม่เกิน ' + this.pmax +' คน';
      if (this.devices.length !== 0) {
        this.findtext = this.findtext + ' และประสงค์ใช้ ' + this.devices;
      }
      
      
    },

    async searchfilter(){
       
   
this.$store.dispatch('search_filterAction', await this.Parse.Cloud.run('place', { type: this.ptype,devices:this.devices,max:this.pmax}));
this.$router.push({ name: 'Placelist'})
 
      },

    
  },
  data() {
    return {
      ptype: '', //ประเภทสถานที่
      pmax: '', //จำนวนรองรับ
      devices: [],
      findtext: '',
 
    };
  },
   
  mounted() {
    (this.ptype = 'อาคาร'),
      (this.pmax = '10'),
      this.updatefindtext();
      this.$store.dispatch('search_filterAction',null)
      this.$store.dispatch('searchAction',null)
      
  }
};
</script>
