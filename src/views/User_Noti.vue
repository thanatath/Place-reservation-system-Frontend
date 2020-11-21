<template>
  <div class="container" style="margin-top:1%;margin-bottom:1%;">

      <div class="row">

          <div class="col">

        <div class="alert kmitlc" role="alert">
          <h4 class="text-center">รายการแจ้งเรื่อง</h4>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ชื่อสถานที่</th>
              <th scope="col">ประเภท</th>
              <th scope="col">รายละเอียด</th>
              <th scope="col">สถานะ</th>
            </tr>
          </thead>
          <tbody v-for="item in noti" :key="item.id">
            <tr>
              <th scope="row">{{ item.get('place_Name') }}</th>
              <td>{{ item.get('noti_Type') }}</td>
              <td>{{ item.get('noti_Description') }}</td>
              <td>{{ item.get('status') }}</td>
              <td>
                 
              </td>
            </tr>
          </tbody>
        </table>

          </div>
          
      </div>



  </div>
</template>

<script>
export default {
name : 'User_Noti',
data() {
    return {
        noti:null,
    }
},
methods: {
        async querynoti() {
            var currentUser = this.Parse.User.current();
      this.noti = await this.Parse.Cloud.run('noti_Search', {
        username: currentUser.get('username'),
      })}
},
mounted() {
    this.querynoti()
},
}
</script>

<style>

</style>