import Vue from 'vue'
import Router from 'vue-router'

import blog_home_view from "@/components/blog_home_view";
import blog_history_view from "@/components/blog_history_view";
import blog_tag_view from "@/components/blog_tag_view";
import blog_about_view from "@/components/blog_about_view";

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'home', component: blog_home_view},
        {path: '/history', name: 'history', component: blog_history_view},
        {path: '/tag', name: 'tag', component: blog_tag_view},
        {path: '/about', name: 'about', component: blog_about_view}
    ]
})