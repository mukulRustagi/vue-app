<template>
  <div>
      <p>About Page</p>
      <button class="btn btn-primary" @click="goToHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToHome(){
      this.$router.push('/');
    }
  }

}
</script>

<style>

</style>