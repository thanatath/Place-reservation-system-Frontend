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
        ><a class="navbar-brand kmitlfont">หน้าหลัก</a></router-link
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
          <li class="nav-item">
            <a class="nav-link" href="#">ค้นหาสถานที่</a>
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
              <a class="dropdown-item" href="#">สมัครสมาชิก</a>
              <a class="dropdown-item" href="#">ข้อมูลสมาชิก</a>
              <a class="dropdown-item" href="#">รายการจอง</a>
              <a class="dropdown-item" href="#">ออกจากระบบ</a>
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
          placeholder="ค้นหาสถานที่"
          aria-label="Search"
        />
<router-link to="Placelist">
        <button
          @click="setsearch()"
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
  },
  mounted() {},
};
</script>
