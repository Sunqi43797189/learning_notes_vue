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
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
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
</style>