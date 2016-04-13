import Vue from '../lib/vue.min';
import App from './App';
//import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
//Vue.config.debug = true;//开启错误提示
//Vue.use(VueResource);
//Vue.http.options.emulateJSON = true;
import contentHome from './components/content-home.vue';
import contentArchive from './components/content-archive.vue';
import contentTag from './components/content-tag.vue';
import contentCate from './components/content-cate.vue';
import contentAbout from './components/content-about.vue';
import filteredArticles from './components/filtered-articles.vue'

Vue.use(VueRouter);
var router = new VueRouter({
});
router.map({
    '/': {
        component: contentHome
    },
    '/page/:count':{
        name:'page',
        component:contentHome
    },
    '/archive/:count': {
        name:'archive',
        component: contentArchive
    },
    '/cate': {
        name:'cate',
        component: contentCate
    },
    '/tag': {
        name:'tag',
        component: contentTag
    },
    '/about': {
        name:'about',
        component: contentAbout
    },
    '/search/:count': {
        name:'search',
        component: filteredArticles
    },
    '/:filterField/:filterName/:count':{
        name:'filtered',
        component: filteredArticles
    }
});
router.redirect(
    {
        '*':'/'
    }
);
router.start(App, 'app');