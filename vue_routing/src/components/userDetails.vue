<template>
  <div>
      <p>User Name:</p>
      <p> {{username}}</p>
     
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:this.$route.params.userdetail
            }
    },
    watch:
    {
        '$route'(to){
            // console.log(to.params.userdetail);
            this.username=to.params.userdetail;
        }
    },
    created(){
        if(this.$route.params.userdetail==':userdetail'){
            this.username='';
        }
    }

}
</script>

<style>

</style>