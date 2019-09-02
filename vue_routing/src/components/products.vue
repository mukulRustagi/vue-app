<template>
<div>
    <p>Our products</p>
    <router-link to="/products/first" tag="button"  class="btn btn-info">First product</router-link>
      &nbsp
    <router-link to="/products/second" tag="button" class="btn btn-info">second product</router-link>
    <router-view></router-view>
    
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>