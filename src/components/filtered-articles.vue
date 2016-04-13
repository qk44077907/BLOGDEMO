<template>
    <div id="filtered-articles">
        <section id="posts" class="posts-expand">
            <article v-for="article in articles" transition="slide-in-top">
                <header class="post-header">
                    <h1 class="post-title">
                        <a>
                            {{{article.title}}}
                        </a>
                    </h1>
                    <div class="post-meta">
                        <span class="post-date">
                            发表于 {{{article.date}}}
                        </span>
                        |
                        <span class="post-cate">
                            分类于
                            <a v-link="{name:'filtered',params:{filterField:'cate',filterName:article.cate,count:1}}">
                                {{{article.cate}}}
                            </a>
                        </span>
                    </div>
                </header>
                <div class="post-body">{{{article.content}}}</div>
                <footer>
                    <div class="post-end"></div>
                </footer>
            </article>
        </section>
        <nav class="pagination">
            <a class="extend prev"
               rel="prev"
               v-link="{name: $route.params.filterField?'filtered':'search', params: { count: pageCount-1 }}"
               v-show="pageCount!=1"
               @click="scrollTop">
                <i class="fa fa-angle-left"></i>
            </a>
            <a class="page-number"
               v-for="n in totalPage"
               v-link="{name: $route.params.filterField?'filtered':'search', params: { count: n+1 }}"
               @click="scrollTop"
               :class="{ 'current': n+1==pageCount}">
                {{n+1}}
            </a>
            <a class="extend next"
               rel="next"
               v-link="{ name: $route.params.filterField?'filtered':'search',params: { count: pageCount+1 }}"
               v-show="totalPage&&pageCount!=totalPage"
               @click="scrollTop">
                <i class="fa fa-angle-right"></i>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                pageCount: 1
            }
        },
        props: ['totalArticles', "searchText"],
        computed: {
            filteredArticles: function () {
                if (this.$route.path.match('search')&&this.searchText) {
                    var filtered = this.$eval('totalArticles | filterBy searchText');
                    var temp=[];
                    var reg=new RegExp(this.searchText,"gi");
                    //var replaceStr = "<span class='high-light'>" + this.searchText + "</span>";
                    //var replaceStr = this.searchText +"替换";
                    for (var i = 0; i < filtered.length; i++) {
                        temp[i]=Object.assign({}, filtered[i]);
                        for (var prop in temp[i]) {
                            temp[i][prop]=temp[i][prop].replace(reg, function (match) {
                                return "<span class='high-light'>" + match + "</span>"
                            });
                        }
                    }
                    return temp;
                }
                return this.$eval('totalArticles | filterBy $route.params.filterName in $route.params.filterField');
            },
            totalPage: function () {
                var totalPage = Math.ceil(this.filteredArticles.length / 4);
                return totalPage
            },
            articles: function () {
                return this.filteredArticles.slice((this.pageCount - 1) * 4, this.pageCount * 4);
            }
        },
        route: {
            data: function (transition) {
                if (this.$route.params.filterField) {
                    var a = ['tag', 'cate', 'search'],
                            index = Array.indexOf(a, this.$route.params.filterField),
                            isFieldCorrect = index > -1;
                    var count = parseInt(this.$route.params.count);
                    if ((!isFieldCorrect) || count > this.totalPage || count < 1) {
                        transition.redirect('/');
                    }
                    this.pageCount = count || 1;  //当前页面
                    /*this.$http.get('http://localhost/ago_blog/options.php')*/
                }
                else {
                    this.pageCount=this.$route.params.count;
                }
            }
        },
        methods: {
            scrollTop: function () {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    #filtered-articles {
        text-align: center;
        .posts-expand {
            .post-title {
                font-size: 26px;
                word-break: break-word;
            }
            .post-meta {
                margin: 3px 0 60px 0;
                color: #999;
                font-size: 12px;
                a {
                    border-bottom: 1px solid #999;
                }
            }
            .post-body {
                text-align: justify;
            }
            .post-end {
                display: block;
                margin: 80px auto 60px;
                width: 8%;
                height: 1px;
                background: #ccc;
                text-align: center
            }
            .high-light {
                color: red;
            }
        }
        .pagination {
            margin: 120px 0 40px;
            text-align: center;
            border-top: 1px solid #eee;
            a {
                border-top: 1px solid #eee;
                transition-property: border-color;
                transition-duration: 0.2s;
                display: inline-block;
                position: relative;
                top: -1px;
                margin: 0 10px;
                padding: 0 10px;
                line-height: 30px;
                &:hover {
                    border-top-color: #222;
                    color: #222;
                }
            }
            .current {
                color: #fff;
                background: #ccc;
                border-top-color: #ccc;
            }

        }
    }
</style>