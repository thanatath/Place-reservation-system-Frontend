<template>
  <div>
    <Headbar />

    <router-view />
  </div>
</template>

<script>
import Headbar from './components/Headbar';
export default {
  name: 'App',
  components: {
    Headbar,
  },
  async mounted() {
  },
};
</script>
