<template>
  <div id="app">
    <el-container>
      <el-header>
        <blog_header/>
      </el-header>
      <el-container>
        <el-main>
          <blog_center/>
        </el-main>
        <el-aside>
          <blog_aside/>
        </el-aside>
      </el-container>
      <el-footer>
        <blog_footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import home from './components/home.vue'
import blog_footer from "./components/blog_footer"
import blog_header from "./components/blog_header"
import blog_center from "./components/blog_center"
import blog_aside from "./components/blog_aside";

export default {
  name: 'app',
  components: {
    // home,
    blog_header,
    blog_footer,
    blog_center,
    blog_aside,
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
    background: bisque;
    padding: 10px 0;
  }
  .el-container {
    height: 100%;
  }
</style>
