<template>
    <div class="header-container">
        <el-row type="flex" justify="space-around">
            <el-col :span="9">
                <div class="site-name">
                    <a class="site-name-home" href="./">XXX'S Blog</a>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="header-avatar">
                    <el-avatar shape="circle" :size="60" :fit="fit" :src="url"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'blog_header',
        data() {
            return {
                fit: 'contain',
                url: require('../assets/picture/avatar.png')
            }
        }
    }
</script>

<style>
    .site-name {
        height: 100%;
        width: 100%;
        text-align: -webkit-left;
        line-height: 2em;
        font-size: 30px;
        font-family: sans-serif;
    }

    .site-name-home {
        text-decoration: none;
        color: black;
    }

    .header-avatar {
        height: 100%;
        width: 100%;
        text-align: right;
    }
</style>