<template>
  
  <div class="container" style="margin-top:1%;margin-bottom:1%;">

<div class="row" >

    <div class="col">
          <div class="alert adminStyle" role="alert">
            <h4 class="text-center">รายการจอง</h4>
          </div>
<table class="table" >
  <thead >
    <tr>
      <th scope="col">ชื่อสถานที่</th>
      <th scope="col">ติดต่อ</th>
      <th scope="col">วันเข้าใช้สถานที่</th>
      <th scope="col">เวลาเข้าใช้สถานที่</th>
      <th scope="col">แจ้งเรื่อง</th>
    </tr>
  </thead>
  <tbody v-for="item in mybooked" :key="item.id">
    <tr>
      <th scope="row">{{item.get('Place_name')}} </th>
      <td>{{item.get('Place_contact')}} </td>
      <td>{{item.get('Context_date')}}</td>
      <td>{{item.get('Context_time')}}</td>
      <td>                   <button
                    type="button"
                    @click="noti()"
                    class="btn btn-warning"
                  >
                    แจ้งเรื่อง
                  </button></td>
    </tr>
 
  </tbody>
</table>

    </div>

</div>

  </div>

</template>

<script>
export default {
  name: 'User_Booking',
  data() {
      return {
          mybooked:'',
      }
  },
methods: {
    async query(){
        var currentUser = this.Parse.User.current();
        this.mybooked = await this.Parse.Cloud.run('placeBooked', { username: currentUser.get('username') });
        console.log(this.mybooked);
    }
},
mounted() {
    this.query()
},
}
</script>

<style>

</style>