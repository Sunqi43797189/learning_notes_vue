<template>
    <div>
        <div class="blog_tag_list">
            <span class="tag-group__title"> 共{{total}}个标签</span>
            <br>
            <el-tag v-for="tag in tags" v-bind:key="tag.ID" effect="plain">
                {{ tag.name }}
            </el-tag>
        </div>
        <div class="blog_tag_articles" v-for="tag in tags" v-bind:key="tag.id">
            <h4 class="el-icon-price-tag"> {{ tag.name }} {{tag.Notes.length}}篇文章</h4>
            <el-divider class="blog_divider"/>
            <ul style="">
                <li class="blog_tag_article_link" v-for="article in tag.Notes" v-bind:key="article.id">
                    <el-link  href="">
                        {{ article.title }}
                    </el-link><br>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog_tag",
        data() {
            return {
                tags: [],
                total: 0
            }
        },
        methods: {

        },
        mounted() {
            this.$http.get("http://127.0.0.1:8080/tags/").then((response) => {
                console.log(response.data.data);
                this.tags = response.data.data;
                this.total = response.data.data.length;
            })
        }
    }
</script>

<style scoped>
    .blog_tag_articles .blog_divider {
        margin: 4px 0;
    }
</style>

<style>
    .el-tag {
        margin: 5px;
    }
    .blog_tag_articles {
        margin: 20px;
        text-align: justify;
    }
    .el-link--inner{
        font-size: 15px;
    }
    .blog_tag_articles li {
        margin: 5px;
    }
</style>