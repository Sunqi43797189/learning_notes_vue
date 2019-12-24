<template>
    <div class="blog_aside_div">
        <el-row>
            <el-card>
                <el-col :span="24">
                    <el-input
                            placeholder="Search"
                            prefix-icon="el-icon-search"
                            v-model="search"
                            @keyup.enter.native="googleSearch">
                    </el-input>
                </el-col>
            </el-card>
            <el-card>
                <el-col>
                    <span>{{date}}</span>
                </el-col>
            </el-card>
            <el-card>
                <el-col>
                    <div class="blog_last_blog">
                        <h4 class="el-icon-notebook-1">最近文章</h4>
                        <el-divider class="blog_divider"/>
                        <el-link class="blog_friend_link">没有文章</el-link><br>
                        <el-link class="blog_friend_link">没有文章</el-link><br>
                        <el-link class="blog_friend_link">没有文章</el-link><br>
                    </div>
                </el-col>
            </el-card>
            <el-card>
                <el-col>
                    <div class="blog_friend_link">
                        <h4 class="el-icon-guide">友情链接</h4>
                        <el-divider class="blog_divider"/>
                        <el-link class="blog_friend_link" href="https://github.com/Sunqi43797189" target="_blank">博主的GitHub</el-link>
                        <br>
                        <el-link class="blog_friend_link" href="https://blog.csdn.net/Tony10010" target="_blank">博主的CSDN</el-link>
                        <br>
                        <el-link class="blog_friend_link" href="https://github.com/Mr-zsy" target="_blank">一个前端程序猿的GitHub</el-link>
                        <br>
                        <el-link class="blog_friend_link" href="https://me.csdn.net/zsy_snake" target="_blank">一个前端程序猿的CSDN</el-link>
                        <br>
                    </div>
                </el-col>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'blog_aside',
        data () {
            return {
                search: '',
                date: '',
            }
        },
        methods: {
            googleSearch() {
                window.open("https://www.google.com/search?q=" + this.search)
            }
        },
        mounted: function () {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" + month : month);
            var day = date.getDay();
            var hour = date.getHours();
            hour = (hour < 10 ? "0" + hour : hour);
            var minute = date.getMinutes();
            minute = (minute < 10 ? "0" + minute : minute);
            this.date = year.toString()+"年"+month.toString()+"月"+day.toString()+"日"+hour.toString()+" : "+minute.toString();
        }
    }
</script>

<style scoped>
    .blog_divider {
        margin: 4px 0;
    }
</style>
<style>
    .el-card {
        margin: 5px 0;
    }

    .ant-radio-group-small {
        display: none;
    }
    .blog_aside_div {
        margin: 15px 5px 0 5px;
        /*border: 1px solid red;*/
    }
    .el-input {
        margin: 20px 0;
    }
    .blog_friend_link {
        text-align: left;
        margin: 2px 0 2px 1px;
    }
    .el-link--inner {
        font-size: 10px;
    }
    .blog_last_blog {
        text-align: left;
    }

</style>