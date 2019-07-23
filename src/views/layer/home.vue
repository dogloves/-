<template>
  <div class="home-wrap">
    <my-menu class="menu"></my-menu>
    <div class="content">
      <head-nav></head-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myMenu from './menu'
import headNav from './headnav'
export default {
  name: "home",
  components: {
    myMenu,
    headNav
  }
};
</script>
<style scoped lang="scss">
.home-wrap {
  width: 100%;
  min-height: 100%;
  display: flex;
  .menu {
    width: 200px;
    min-height: 100vh;
    background-color: rgb(84, 92, 100);
  }
  .content {
    width: calc(100% - 200px);
  }
}
</style>