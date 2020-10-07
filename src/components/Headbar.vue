<template>
  <div>
    <!-- Nav Bar Zone-->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <nav class="navbar navbar-light bg-light">
        <router-link to="/"
          ><a class="navbar-brand">
            <img src=".././assets/logo.svg" width="30" height="30" alt="" /> </a
        ></router-link>
      </nav>
      <router-link to="/"
        ><a class="navbar-brand kmitlfont">ค้นหา</a></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="Placelist"
              ><a class="nav-link"
                >รายการสถานที่ <span class="sr-only">(current)</span></a
              ></router-link
            >
          </li>
          <li v-if="searchfilter" class="nav-item">

            <router-link to="Placelist_filter"
              ><a style="color:#ffc107;" class="nav-link" href="#">ค้นหาสถานที่</a></router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ระบบสมาชิก
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link v-if="!loginstate" to="User_Regis"
                ><a class="dropdown-item">สมัครสมาชิก</a></router-link
              >
                            <router-link v-if="!loginstate" to="User_Login"
                ><a class="dropdown-item">เข้าสู่ระบบ</a></router-link
              >
              <router-link v-if="loginstate" to="User_info">
                <a class="dropdown-item">ข้อมูลสมาชิก</a></router-link
              >
              
              <a v-if="loginstate" class="dropdown-item" href="#">รายการจอง</a>
              <a  v-if="loginstate" class="dropdown-item" href="#" @click="logout()"
                >ออกจากระบบ</a
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- Search Bar Zone-->
      <div class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          v-model="target"
          placeholder="ชื่อสถานที่"
          aria-label="Search"
        />
        <router-link to="Placelist">
          <button
            @click="
              setsearch();
              target = '';
            "
            id="searchbutton"
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            ค้นหา
          </button>
        </router-link>
      </div>

      <!-- End Search Bar Zone-->
    </nav>
     
    <!-- End Nav Bar Zone-->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Headbar',

  data() {
    return {
      target: '',
       
    };
  },
  methods: {
    setsearch() {
      this.$store.dispatch('searchAction', this.target);
    },
    logout(){
this.Parse.User.logOut();
this.$store.dispatch('loginstateAction','')
this.$router.push('/')
    }
  },
  mounted() {
         this.$store.dispatch('loginstateAction',this.Parse.User.current('username'))
  
  },
     computed: mapState(['loginstate','searchfilter']),
  
};
</script>
