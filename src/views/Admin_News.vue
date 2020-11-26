<template>
  <div class="container" style="margin-top:1%">
    <div class="row justify-content-center">
      <div class="col-sm-5 justify-content-center ">
        <div class="card">
          <div class="card-body">
            <div v-for="item in News_Contain" :key="item.id">
              <div class="input-group mb-3">
                <p type="text" class="form-control">
                  {{ item.get('News_Contain') }}
                </p>
                <div class="input-group-append">
                  <button
                    @click="Delete_News(item.id)"
                    class="btn btn-outline-secondary"
                    type="button"
                  >
                    ลบข่าว
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top:10px" class="card">
          <span v-show="!(news_Add_contain.length>=10&&news_Add_contain.length<=30)&&news_Add_contain.length>0" style="color:red">เนื้อหาข่าวต้องมากกว่า 10 ตัวอักษรและ น้อยกว่า 30 ตัวอักษร</span> 
          <div class="card-body">
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="news_Add_contain"
                class="form-control"
                placeholder="เพิ่มข่าวสาร"
                aria-label="เพิ่มข่าวสาร"
                aria-describedby="basic-addon2"
              />
              
              <div class="input-group-append">
                <button
                  :disabled="checkNews() >= 5 || !addnews_Valid()"
                  @click="
                    Create_News(news_Add_contain);
                    news_Add_contain = '';
                  "
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  เพิ่มข่าวสาร
                </button>
              </div>
            </div>
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
  </div>
</template>

<script>
export default {
  name: 'Admin_News',
  data() {
    return {
      News_Contain: '',
      news_Add_contain: '',
    };
  },
  methods: {
    addnews_Valid() {
      if (this.news_Add_contain) {
        return true;
      }
    },
    checkNews() {
      console.log(Object.keys(this.News_Contain).length);
      return Object.keys(this.News_Contain).length;
    },
    async queryNews() {
      try {
        this.News_Contain = await this.Parse.Cloud.run('News');
      } catch (error) {
        alert(error);
      }
    },
    async Delete_News(id) {
      try {
        await this.Parse.Cloud.run('News_Del', { delid: id });
        this.queryNews();
      } catch (error) {
        alert(error);
      }
    },
    async Create_News(contain) {
      try {
        await this.Parse.Cloud.run('News_add', { contain: contain });
        await this.queryNews();
      } catch (error) {
        alert(error);
      }
    },
  },

  mounted() {
    this.queryNews();
  },
};
</script>

<style></style>
