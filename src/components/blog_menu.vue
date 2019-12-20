<template>
    <div class="blog_menu_div">
        <el-row type="flex" justify="space-around">
            <el-col :span="21">
                <el-menu
                        :default-active="activeIndex"
                        class="blog_menu"
                        mode="horizontal"
                        text-color="black"
                        active-text-color="black">
                    <el-row type="flex" class="row-bg" >
                        <el-col :span="2">
                            <el-menu-item index="1"><i class="menu_title el-icon-house">首页</i></el-menu-item>
                        </el-col>
                        <el-col :span="2">
                            <el-menu-item index="2"><i class="menu_title el-icon-collection">归档</i></el-menu-item>
                        </el-col>
                        <el-col :span="2">
                            <el-menu-item index="3"><i class="menu_title el-icon-collection-tag">标签</i></el-menu-item>
                        </el-col>
                        <el-col :span="2">
                            <el-menu-item index="4"><i class="menu_title el-icon-user">关于</i></el-menu-item>
                        </el-col>
                    </el-row>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'blog_menu',
        data () {
            return {
                activeIndex: "1"
            }
        }
    }
</script>

<style>
    .blog_menu_div{
        margin-top: 20px;
    }
    .el-menu-item {
        text-align: left;
    }
    .menu_title {
        font-size: 14px;
    }
</style>