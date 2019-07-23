<template>
  <div class="menu-wrap">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#fff">

      <template v-for="(a_item, a_index) in menuTree">
        <router-link :to="{name:a_item.pathName}" v-if="!a_item.children || a_item.children.length === 0" :key="a_item.id">
          <el-menu-item :index="a_item.pathName">
            <i :class="a_item.icon"></i>
            <span slot="title">{{a_item.name}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :key="a_item.pathName" :index="a_index + ''">
          <template slot="title">
            <i :class="a_item.icon"></i>
            <span slot="title">{{a_item.name}}</span>
          </template>
          <!--to="b_item.id"-->
          <router-link :to="{name:b_item.pathName}" v-for="(b_item) in a_item.children" :key="b_item.id">
            <el-menu-item :index="b_item.pathName">{{b_item.name}}</el-menu-item>
          </router-link>
        </el-submenu>
      </template>

    </el-menu>
  </div>
</template>


<script>
export default {
  data () {
    return {
      menuTree: [
        {
          name: '用户管理',
          icon: 'el-icon-location',
          id: '1',
          children: [
            {
              name: '用户管理',
              pathName: 'usermanage',
              id: '1-1',
            }
          ]
        },
        {
          name: '用户管理',
          pathName: 'useradd',
          icon: 'el-icon-location',
          children: [],
          id: '2',
        }
      ]
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
.menu-wrap {
  width: 100%;
  height: 100%;
  /deep/ .el-menu {
    border-right: none;
  }
  /deep/.el-menu-item.is-active {
    background-color: #108ee9 !important;
  }
  /deep/.el-submenu .el-menu-item {
    padding-left: 60px !important;
    padding-right: 20px !important;
  }
}
</style>