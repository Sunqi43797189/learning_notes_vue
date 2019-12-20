<template>
  <div id="app">
      <el-row>
        <el-col :span="24">
          <el-header>
            <blog_header/>
          </el-header>
        </el-col>
        <el-col :span="24">
          <el-header>
            <blog_menu/>
          </el-header>
        </el-col>
        <el-col :span="24">
          <el-row type="flex">
            <el-col :span="16" :offset="2"><blog_center/></el-col>
            <el-col :span="4"><blog_aside/></el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <blog_footer/>
        </el-col>
      </el-row>
  </div>
</template>

<script>
// import home from './components/home.vue'
import blog_footer from "./components/blog_footer"
import blog_header from "./components/blog_header"
import blog_center from "./components/blog_center"
import blog_aside from "./components/blog_aside";
import blog_menu from "./components/blog_menu"

export default {
  name: 'app',
  components: {
    blog_header,
    blog_footer,
    blog_center,
    blog_aside,
    blog_menu,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body{
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    /*background: bisque;*/
    padding: 10px 0;
  }
</style>
