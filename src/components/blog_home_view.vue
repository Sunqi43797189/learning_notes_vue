<template>
    <div>
        <el-card>
            <el-row>
                <el-col :span="2">
                    <div class="blog_title">
                        <h2>岁末III</h2>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <div class="blog_create_time">
                        <i class="el-icon-date">2019年12月09日</i>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="blog_content">
                        <p>转眼间又到了岁末，今年的光景感觉流逝得格外迅速，再也没有了小时候眼巴巴地盼望着长大的那种度日如年感——并且再也不会有了，看来年纪越大就越感叹时间太快的定律正在慢慢应验。有时候真的很怕变老，怕的并不是老无所依风烛残年，而是觉得一把年纪之后即使是德高望重家财万贯，干什么也都索然无味。因此挂在嘴边的总是活到不惑足矣，撑死知命，多一分都力不从心。另一些时候又觉得人生太短了，无论它是苦短还是甜短，放在历史的河流中都是微不足道，只能瞥见小小的一段兴衰荣辱，而在行将就木时，还要自诩饱历世事沧桑，然而梦里不知身是客，升沉不过一秋风。</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3" :offset="20">
                    <el-button>阅读全文>></el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card>
            <el-row>
                <el-col :span="2">
                    <div class="blog_title">
                        <h2>岁末III</h2>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <div class="blog_create_time">
                        <i class="el-icon-date">2019年12月09日</i>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="blog_content">
                        <p>转眼间又到了岁末，今年的光景感觉流逝得格外迅速，再也没有了小时候眼巴巴地盼望着长大的那种度日如年感——并且再也不会有了，看来年纪越大就越感叹时间太快的定律正在慢慢应验。有时候真的很怕变老，怕的并不是老无所依风烛残年，而是觉得一把年纪之后即使是德高望重家财万贯，干什么也都索然无味。因此挂在嘴边的总是活到不惑足矣，撑死知命，多一分都力不从心。另一些时候又觉得人生太短了，无论它是苦短还是甜短，放在历史的河流中都是微不足道，只能瞥见小小的一段兴衰荣辱，而在行将就木时，还要自诩饱历世事沧桑，然而梦里不知身是客，升沉不过一秋风。</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3" :offset="20">
                    <el-button>阅读全文>></el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card>
            <el-row>
                <el-col :span="2">
                    <div class="blog_title">
                        <h2>岁末III</h2>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <div class="blog_create_time">
                        <i class="el-icon-date">2019年12月09日</i>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="blog_content">
                        <p>转眼间又到了岁末，今年的光景感觉流逝得格外迅速，再也没有了小时候眼巴巴地盼望着长大的那种度日如年感——并且再也不会有了，看来年纪越大就越感叹时间太快的定律正在慢慢应验。有时候真的很怕变老，怕的并不是老无所依风烛残年，而是觉得一把年纪之后即使是德高望重家财万贯，干什么也都索然无味。因此挂在嘴边的总是活到不惑足矣，撑死知命，多一分都力不从心。另一些时候又觉得人生太短了，无论它是苦短还是甜短，放在历史的河流中都是微不足道，只能瞥见小小的一段兴衰荣辱，而在行将就木时，还要自诩饱历世事沧桑，然而梦里不知身是客，升沉不过一秋风。</p>
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
                :background="grey"
                layout="prev, pager, next"
                hide-on-single-page=true
                page-size="10"
                :total="100">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "blog_home"
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
    .blog_create_time {
        margin: 5px 0;
        font-size: 13px;
        text-align: justify;
    }
    .blog_content {
        text-align: justify;
        font-size: 15px;
        line-height: 1.77;
        word-break: normal;
    }
</style>