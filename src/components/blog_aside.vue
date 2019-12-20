<template>
    <div class="blog_aside_div">
        <el-row>
            <el-col :span="24">
                <el-input
                        placeholder="search"
                        prefix-icon="el-icon-search"
                        v-model="input2">
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'blog_aside',
        data () {
            return {
                blog_aside: 'blog_aside'
            }
        }
    }
</script>

<style>
    .blog_aside_div {
        margin: 15px 5px 0 5px;
        border: 1px solid red;
    }
    .el-input {
        margin: 20px 0;
    }
</style>