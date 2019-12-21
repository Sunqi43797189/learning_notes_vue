<template>
    <div class="blog_center_div">
       <el-row type="flex">
           <el-col :span="24">
               <router-view></router-view>
           </el-col>
       </el-row>

    </div>
</template>

<script>
    export default {
        name: 'blog_center',
        data () {
            return {
                blog_center: "center"
            }
        }
    }
</script>

<style>
    .blog_center_div {
        margin: 15px 5px 0 5px;
    }
</style>