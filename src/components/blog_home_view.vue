<template>
    <div>
        <el-card v-for="(article) in articles" v-bind:key="article.ID">
            <el-row>
                <el-col :span="24">
                    <div class="blog_title">
                        <h2>{{ article.title}}</h2>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2">
                    <div class="blog_create_time">
                        <i class="el-icon-date">{{ timeToDate(article.CreatedAt)}}</i>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="blog_page_view">
                        <i class="el-icon-view"> {{ article.page_view }}</i>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="blog_content">
                        <p>
                            {{ article.content.substring(0, 100) }}
                        </p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3" :offset="20">
                    <el-button>阅读全文>></el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="10"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "blog_home",
        data() {
            return {
               articles: [],
               total: 0
            }
        },
        mounted() {
            this.$http.get("http://127.0.0.1:8080/notes/").then((response) => {
                console.log(response.data.data);
                this.articles = response.data.data;
                this.total = response.data.data.length;
            })
        },
        methods: {
            timeToDate: function (time) {
                const date = new Date(time);
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
            }
        }
    }
</script>

<style>
    .el-card {
        margin: 5px 0;
    }
    .blog_title {
        color: black;
        margin-top: 10px;
        margin-bottom: 5px;
        text-align: justify;
    }
    .blog_create_time , .blog_page_view{
        margin: 5px 0;
        font-size: 13px;
        text-align: justify;
    }
    .blog_content {
        text-align: justify;
        font-size: 15px;
        line-height: 1.77;
        word-break: normal;
        width: 100%;
        height: 100px;
    }
    .el-pagination {
        margin-top: 10px;
    }
</style>