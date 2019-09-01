<template>
  <!-- <div class="container">
      <form class="form-group">
          <label for="userid" class="form-control">
              User ID
          </label>
          <input id="userid" type="text" class="form-control" v-model="username"/>
        <label for="passwd" class="form-control">
              Password
          </label>
          <input id="passwd" type="password" class="form-control" v-model="password"/>
            <button class="btn btn-info" @click="submit">Login</button>
      </form>

      
  </div> -->
   <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <br>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="username">
                
              </div>
                <br>
              <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password"  v-model="password" required>
                
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click="submit">Sign in</button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
              username:'',
              password:''
        }
    },
    methods:{
        submit(){
            alert('login successfull');
        }
    }

}
</script>

<style>

</style>