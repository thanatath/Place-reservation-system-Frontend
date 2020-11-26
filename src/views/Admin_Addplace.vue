<template>
  <div>
    <div class="container" style="margin-top:1%">
      <div class="row justify-content-center">
        <div class="col-sm">
          <div class="alert adminStyle" role="alert">
            <h4 class="text-center">เพิ่มสถานที่</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-5">
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo1($event)"
            :state="Boolean(file1)"
            placeholder="เลือกรูปภาพที่ 1 ... "
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo2($event)"
            :state="Boolean(file2)"
            placeholder="เลือกรูปภาพที่ 2 ... "
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-file
            style="margin-bottom:15px;"
            @change="photo3($event)"
            :state="Boolean(file3)"
            placeholder="เลือกรูปภาพที่ 3 ... "
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
          <span
            v-show="
              !(placeName.length >= 10 && placeName.length <= 60) &&
                placeName.length > 0
            "
            style="color:red"
            >ชื่อสถานที่ต้องอยู่ระหว่าง 10 ถึง 60 ตัวอักษร</span
          >
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
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
          <span
            v-show="!isPhoneNo(placePhone) && placePhone.length > 0"
            style="color:red"
            >โปรดใส่เบอร์ที่ถูกต้อง</span
          >
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
          <span
            v-show="
              !(placeDetail.length >= 10 && placeDetail.length <= 200) &&
                placeDetail.length > 0
            "
            style="color:red"
            >รายละเอียดสถานที่ต้องอยู่ระหว่าง 10 ถึง 200 ตัวอักษร</span
          >
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
          <span
            v-show="
              !(placeAddress.length >= 5 && placeAddress.length <= 50) &&
                placeAddress.length > 0
            "
            style="color:red"
            >ที่อยู่สถานที่ต้องอยู่ระหว่าง 5 ถึง 50 ตัวอักษร</span
          >
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
      <div class="row justify-content-end" style="margin:1%;margin-top:50px;">
        <div style="margin-bottom:15px;" class="col-sm-3">
          <b-button
            :disabled="!addplace_Valid()"
            class="btn btn-block"
            @click="addPlace()"
            >เพิ่มสถานที่</b-button
          >
        </div>
        <div class="col-sm-3">
          <router-link to="Admin">
            <b-button class="btn btn-block">ยกเลิก</b-button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin_addPlace',
  data() {
    return {
      file1: '',
      file2: '',
      file3: '',
      devices: [],
      placeName: '',
      placeType: 'ประเภทสถานที่',
      placeMax: 'รองรับคน',
      placePhone: '',
      placeDetail: '',
      placeAddress: '',
    };
  },
  methods: {
    isPhoneNo(input) {
      var regExp = /^0[0-9]{8,9}$/i;
      return regExp.test(input);
    },

    addplace_Valid() {
      if (
        this.placeName &&
        this.placeType &&
        this.placeMax &&
        this.placePhone &&
        this.placeDetail &&
        this.placeAddress &&
        this.file1 &&
        this.file2 &&
        this.file3 &&
        this.placeName.length >= 10 &&
        this.placeName.length <= 60 &&
        this.isPhoneNo(this.placePhone) &&
        this.placeDetail.length >= 10 &&
        this.placeDetail.length <= 200 &&
        this.placeAddress.length >= 5 &&
        this.placeAddress.length <= 50
      ) {
        return true;
      }
    },

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

    clear_Target() {
      (this.file1 = ''),
        (this.file2 = ''),
        (this.file3 = ''),
        (this.devices = []),
        (this.placeName = ''),
        (this.placeType = 'ประเภทสถานที่'),
        (this.placeMax = 'รองรับคน'),
        (this.placePhone = ''),
        (this.placeDetail = ''),
        (this.placeAddress = '');
    },
    async checknamePlace_duplicate(placeName) {
      let rs = await this.Parse.Cloud.run('place', {
        placeName: placeName,
      });
     if(rs.length==0){return false}else{return true}
    },

    async addPlace() {
      let e = true;
 
if(await this.checknamePlace_duplicate(this.placeName)){
this.$alert(
          'มีสถานที่ชื่อนี้แล้ว ไม่สามารถเพิ่มสถานที่ได้',
          'ไม่สามารถเพิ่มสถานที่',
          'warning'
        );
}else{

      try {
        await this.Parse.Cloud.run('place_ADD', {
          file1: this.file1,
          file2: this.file2,
          file3: this.file3,
          placeDevices: this.devices,
          placeName: this.placeName,
          placeType: this.placeType,
          placeMax: this.placeMax,
          placePhone: this.placePhone,
          placeDetail: this.placeDetail,
          placeAddress: this.placeAddress,
        });
      } catch (error) {
        this.$alert(
          'ไม่สามารถเพิ่มสถานที่ได้' + error.message,
          'ไม่สามารถเพิ่มสถานที่',
          'warning'
        );
        e = false;
      }
      if (e) {
        this.$alert('เพิ่มสถานที่สำเร็จ', 'เพิ่มสถานที่', 'success');
        this.clear_Target();
      }}
    },

  },
      mounted() {
      
    },
};
</script>

<style></style>
