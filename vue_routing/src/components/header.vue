<template>
  <div id="header">
      <ul class="nav nav-tabs">
    <router-link to="/" class="nav-link" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/login"  tag="li" class="nav-link" active-class="active"><a>login</a></router-link>
    <router-link to="/about"  tag="li" active-class="active" class="nav-link"><a>about</a></router-link> 
<!-- 
  now consider the case below in which  we are routing to the same coomponet but the data which is passing to 
  the component is changing, so as we know vue when load a component it does not re create it whenever needed again 
  it just render the old loaded component but in route scenario we want our component to change according to the data
  that we are sending using route, so we have to use watch route.
  <router-link to="/user/mukul" tag="li" active-class="active" class="nav-link"><a>user mukul</a></router-link>
    <router-link to="/user/rustagi" tag="li" active-class="active" class="nav-link"><a>user rustagi</a></router-link>
 -->
<router-link to="/user/:userdetail" tag="li" active-class="active" class="nav-link"><a>user</a></router-link>
    

</ul>
  </div>
</template>

<script>
export default {

}
</script>
