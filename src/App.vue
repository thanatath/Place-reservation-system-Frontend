<template>
<div>
  <Headbar/>



  
  <router-view/>
  
</div>
</template>

<script>



import Headbar from './components/Headbar'
export default {
  name:'App',
  components:{
    Headbar
  }
,
async mounted() {
  
//  await this.Parse.User.logIn("naing", "12345");

// var currentUser = this.Parse.User.current();
// if (currentUser) {
//     console.log(currentUser.get('username'));
// } else {
//     // show the signup or login page
// }

 

}
}
</script>


 