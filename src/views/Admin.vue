<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-5">
          <img class="img-fluid" src="../assets/Sub_Logo_KMITL_KMITL.png" />

         <router-link to="Admin_Addplace"> <button type="button" style="margin-top:7px;" class="btn btn-secondary btn-sm btn-block">เพิ่มข้อมูลสถานที่</button></router-link>
         <router-link to="Admin_News"><button type="button" style="margin-top:7px;" class="btn btn-secondary btn-sm btn-block">แก้ไข, ลบ ข้อมูลสถานที่</button></router-link>
         <router-link to="Admin_News"><button type="button" style="margin-top:7px;" class="btn btn-secondary btn-sm btn-block">ระบบข่าวสาร</button></router-link>
         <router-link to="Admin_News"><button type="button" style="margin-top:7px;" class="btn btn-secondary btn-sm btn-block">แก้ไข ข้อมูลสมาชิก</button></router-link>
 

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'Admin',

  methods: {
      
    },

};

</script>

<style></style>
