<template>
  <div>
    <div class="container" style="margin-top:1%;">
      <div v-show="myplaceselect" class="alert adminStyle" role="alert">
        <h4 class="text-center">แก้ไข, ลบ สถานที่</h4>
      </div>
      <div v-show="myplaceselect" class="row" style="margin-bottom:15px;">
        <div class="col text-center">
          <h5>รูปที่ 1</h5>

          <img :src="placeImg1" class="img-fluid" />
        </div>
        <div class="col-sm text-center">
          <h5>รูปที่ 2</h5>
          <img :src="placeImg2" class="img-fluid" />
        </div>
        <div class="col-sm text-center">
          <h5>รูปที่ 2</h5>
          <img :src="placeImg3" class="img-fluid" />
        </div>
      </div>
      <div v-show="myplaceselect" class="row">
        <div class="col-sm">
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo1($event)"
            :state="Boolean(file1)"
            placeholder="เลือกรูปภาพแทนที่รูปที่ 1 ... "
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo2($event)"
            v-model="file2"
            :state="Boolean(file2)"
            placeholder="เลือกรูปภาพแทนที่รูปที่ 2 ... "
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo3($event)"
            v-model="file3"
            :state="Boolean(file3)"
            placeholder="เลือกรูปภาพแทนที่รูปที่ 3 ... "
            drop-placeholder="Drop file here..."
          ></b-form-file>

          <div class="text-center ">
            <h5>อุปกรณ์ภายในสถานที่</h5>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="โปรเจ็คเตอร์"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >โปรเจ็คเตอร์</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="จอภาพ"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >จอภาพ</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="เครื่องเสียง"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >เครื่องเสียง</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="ไฟสปอตไลท์"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >ไฟสปอตไลท์</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="โต๊ะพร้อมเก้าอี้"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >โต๊ะพร้อมเก้าอี้</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="ปลั๊กไฟ"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >ปลั๊กไฟ</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="อัฒจรรย์กลางแจ้ง"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >อัฒจรรย์กลางแจ้ง</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="เครื่องฉายภาพสามมิติ"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >เครื่องฉายภาพสามมิติ</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="คอมพิวเตอร์"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >คอมพิวเตอร์</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="ไวท์บอร์ด"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >ไวท์บอร์ด</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="เก้าอี้"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >เก้าอี้</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="เครื่องปรับอากาศ"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >เครื่องปรับอากาศ</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="พัดลม"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >พัดลม</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="devices"
                value="โกล์ฟุตบอล"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >โกล์ฟุตบอล</label
              >
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="col-sm-7">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-4 col-form-label"
                >ชื่อสถานที่ :</label
              >
              <div class="col">
                <input
                  v-model="placeName"
                  type="texta"
                  class="form-control"
                  placeholder="ชื่อสถานที่"
                />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text">ประเภทสถานที่</label>
              </div>
              <select v-model="placeType" class="custom-select">
                <option disabled selected>ประเภทสถานที่</option>
                <option value="อาคาร">อาคาร</option>
                <option value="ลานกว้าง">ลานกว้าง</option>
                <option value="ห้อง">ห้อง</option>
              </select>
              <select v-model="placeMax" class="custom-select">
                <option disabled selected>รองรับคน</option>
                <option value="50">ไม่เกิน 50 คน</option>
                <option value="100">ไม่เกิน 100 คน</option>
                <option value="200">ไม่เกิน 200 คน</option>
                <option value="300">ไม่เกิน 300 คน</option>
              </select>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  >เบอร์ติดต่อสถานที่</span
                >
              </div>
              <input
                v-model="placePhone"
                type="text"
                class="form-control"
                placeholder="เบอร์ติดต่อสถานที่"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">รายละเอียดสถานที่</span>
              </div>
              <textarea
                v-model="placeDetail"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div style="margin-top:15px;" class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">ที่อยู่สถานที่</span>
              </div>
              <textarea
                v-model="placeAddress"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div v-show="myplaceselect">
        <div class="row justify-content-end" style="margin:1%;margin-top:50px;">
          <div style="margin-bottom:15px;" class="col-sm-3">
            <b-button
              class="btn btn-block btn btn-warning"
              @click="updatePlace()"
              >แก้ไขสถานที่</b-button
            >
          </div>
          <div class="col-sm-3">
           
              <b-button @click="clearselect" class="btn btn-block"
                >ยกเลิก</b-button
              >
          </div>
        </div>
      </div>
      <div class="row" style="margin-top:15px;">
        <div class="col-sm">
          <div class="alert adminStyle" role="alert">
            <h4 class="text-center">เลือกแก้ไข, ลบ สถานที่</h4>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">ชื่อสถานที่</th>
                <th scope="col">ประเภท</th>
                <th scope="col">รองรับคน</th>
                <th scope="col">แก้ไข</th>
                <th scope="col">ลบ</th>
              </tr>
            </thead>
            <tbody v-for="item in myplace" :key="item.id">
              <tr>
                <td>{{ item.get('Place_name') }}</td>
                <td>{{ item.get('Place_type') }}</td>
                <td>{{ item.get('Place_max') }}</td>
                <td>
                  <button
                    type="button"
                    @click="queryselect(item.id)"
                    class="btn btn-warning"
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button type="button" @click="place_Del(item.id)" class="btn btn-danger">ลบ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-4">
          <router-link to="Admin">
            <button
              style="width:100%;margin-top:10px;"
              type="button"
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
  name: 'Admin_EditPlace',
  data() {
    return {
      myplace: Array(),
      myplaceselect: null,
      file1: null,
      file2: null,
      file3: null,
      devices: [],
      placeName: null,
      placeType: 'ประเภทสถานที่',
      placeMax: 'รองรับคน',
      placePhone: null,
      placeDetail: null,
      placeAddress: null,
      placeImg1: null,
      placeImg2: null,
      placeImg3: null,
      placeoid:null,
    };
  },

  methods: {
    photo1(event) {
      this.file1 = new this.Parse.File(
        'image1.png',
        event.target.files[0],
        'image/png'
      );
      this.file1.save();
    },
    photo2(event) {
      this.file2 = new this.Parse.File(
        'image2.png',
        event.target.files[0],
        'image/png'
      );
      this.file2.save();
       
    },
    photo3(event) {
      this.file3 = new this.Parse.File(
        'image3.png',
        event.target.files[0],
        'image/png'
      );
      this.file3.save();
    },

    async updatePlace() {
      await this.Parse.Cloud.run('place_Update', {
        placeOid: this.placeoid,
        file1: this.file1,
        file2: this.file2,
        file3: this.file3,
        devices: this.devices,
        placeName: this.placeName,
        placeType: this.placeType,
        placeMax: this.placeMax,
        placePhone: this.placePhone,
        placeDetail: this.placeDetail,
        placeAddress: this.placeAddress,
      });
      await this.query();
      await this.queryselect(this.placeoid)
    },
    clearselect() {
      this.myplaceselect = '';
    },

    async queryselect(placeId) {
      this.myplaceselect = await this.Parse.Cloud.run('place', {
        obId: placeId,
      });
      this.placeoid = this.myplaceselect[0].id;
      this.placeName = this.myplaceselect[0].get('Place_name');
      this.placeType = this.myplaceselect[0].get('Place_type');
      this.placeMax = this.myplaceselect[0].get('Place_max');
      this.placePhone = this.myplaceselect[0].get('Place_phone');
      this.placeDetail = this.myplaceselect[0].get('Place_detail');
      this.placeAddress = this.myplaceselect[0].get('Place_address');
      this.devices = this.myplaceselect[0].get('Place_devices');
      this.placeImg1 = this.myplaceselect[0].get('img').url();
      this.placeImg2 = this.myplaceselect[0].get('img_2').url();
      this.placeImg3 = this.myplaceselect[0].get('img_3').url();
      window.scrollTo(0, 0);
    },
    async query() {
      this.myplace = await this.Parse.Cloud.run('place');
    },
        async place_Del(placeoid) {
         
      await this.Parse.Cloud.run('place_Del',{ delid:placeoid});
    },
  },
  mounted() {
    this.query();
    this.myplaceselect = null;
  },
};
</script>
