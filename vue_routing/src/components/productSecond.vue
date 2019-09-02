<template>
<div>
  
    <br>
    <h3><strong>Second Product</strong></h3>
    <br />
    <br />
    <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
  
  <button @click="navigateToHome" class="btn btn-primary">back to home</button>
</div>
  
</template>

<script>
export default {
    methods:{
          navigateToHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>