<template>
    <div class="headband"></div>
    <main id="app">
        <blog-nav :search-text.sync="searchText"></blog-nav>
        <profile :article-num="articleNum"
                :article-tag="articleTag"
                :article-cate="articleCate">

        </profile>
        <content :total-articles="totalArticles"
                 :article-tag="articleTag"
                 :article-cate="articleCate"
                 :search-text="searchText">
        </content>
        <foot></foot>
    </main>

</template>

<script>
    import blogNav from './components/blog-nav.vue';
    import profile from './components/profile.vue';
    import content from './components/content.vue';
    import foot from './components/foot.vue';

    export default{
        data: function () {
            return {
                totalArticles: [],
                searchText:''
            }
        },
        created: function () {
            this.totalArticles = [
                {
                    title: '文章一',
                    date: '2016-04-06',
                    tag: 'ES6',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章二',
                    date: '2016-04-05',
                    tag: '杂谈',
                    cate: '生活感悟',
                    content: '工具类社交产品之间是互补的，而大社交是互斥的。在大社交下，产品需要抢夺同一批用户，用户有非此即彼的关系；而在工具类社交下，没有非此即彼的关系，一个人本身就是多样化的组成。他喜欢音乐，也可以喜欢篮球，同时还可以是个编程高手，那么他工作遇到难题在程序员的圈子里活跃，周末在篮球的圈子里活跃，地铁上听听歌看看大家的评论，回到家打开蘑菇街网购一件衣服。不同的工具性社交产品，就是用户不同的场景'
                },
                {
                    title: '文章三',
                    date: '2016-04-02',
                    tag: 'Vue',
                    cate: '学习笔记',
                    content: 'Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的库。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架；如果你对使用 Vue.js 开发大型应用更感兴趣，查看构建大型应用。'
                },
                {
                    title: '文章四',
                    date: '2016-03-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章五',
                    date: '2016-03-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章六',
                    date: '2016-03-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章七',
                    date: '2016-03-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章八',
                    date: '2015-11-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章九',
                    date: '2015-05-08',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章十',
                    date: '2015-05-02',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章十一',
                    date: '2015-01-13',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章十二',
                    date: '2014-11-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                }
            ];
        },
        computed: {
            articleNum: function () {
                return this.totalArticles.length;
            },
            articleTag:function () {
                return this.filterAttr('tag');
            },
            articleCate:function () {
                return this.filterAttr('cate');
            }
        },
        methods: {
            //返回某个标签的种类及数量，形式为对象
            filterAttr: function (name) {
                var temp={};
                for (var i = 0; i<this.totalArticles.length; i++) {
                    var tmp = this.totalArticles[i][name];
                    if (!temp.hasOwnProperty(tmp)) {//hasOwnProperty用来判断一个对象是否有你给出名称的属性或对象
                        temp[tmp] = 1;
                    }
                    else {
                        temp[tmp]++;
                    }
                }
                return temp;
            }
        },
        components: {
            'blog-nav': blogNav,
            'profile': profile,
            'content': content,
            'foot':foot
        }
    };
</script>

<style lang=less rel="stylesheet/less">
    @leftwidth: 240px;
    * {
        margin: 0;
        padding: 0;
        &::-webkit-scrollbar {
            width: 5px;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: #4dbc9b;
        }
    }

    body {
        font-family: Lato, 'PingFang SC', 'Microsoft YaHei', sans-serif;
        color: #555;
        font-size: 16px;
        line-height: 2;
        background-color: #F5F7F9;
    }

    a {
        text-decoration: none;
        &:hover {
            color: #222;
        }
        &:visited {
            color: #555;
        }
        &:link {
            color: #555;
        }
        &:active {
            color: #555;
        }
    }

    .headband {
        height: 3px;
        background: rgb(34, 34, 34);
    }

    #app {
        position: relative;
        width: 960px;
        margin: 0 auto;
    }
    .slide-in-top-transition {
        transition: all 0.5s ease;
        position: relative;
        top: 0
    }

    .slide-in-top-enter {
        opacity: 0;
        top: -20px;
    }

    .slide-in-top-leave {
        display: none;
    }

</style>
