<template>
    <div id="content-archive">
        <section class="posts-expand">
            <div v-for="article in articles" class="roll-in">
                <div v-if="yearFlags[$index]" class="collection-title">
                    <h2 class="archive-year">{{years[$index]}}</h2>
                </div>
                <article class="post">
                    <header class="post-header">
                        <span class="post-date">
                            {{monthsAndDays[$index]}}
                        </span>
                        <h1 class="post-title">
                            <a>
                                {{article.title}}
                            </a>
                        </h1>
                    </header>
                </article>
            </div>
        </section>
        <nav class="pagination">
            <a class="extend prev"
               rel="prev"
               v-link="{ name: 'archive', params: { count: pageCount-1 }}"
               v-show="pageCount!=1"
               @click="scrollTop">
                <i class="fa fa-angle-left"></i>
            </a>
            <a class="page-number"
               v-for="n in totalPage"
               v-link="{ name: 'archive', params: { count: n+1 }}"
               @click="scrollTop"
               :class="{ 'current': n+1==pageCount}">
                {{n+1}}
            </a>
            <a class="extend next"
               rel="next"
               v-link="{ name: 'archive', params: { count: pageCount+1 }}"
               v-show="pageCount!=totalPage"
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
        props: ['totalArticles'],
        computed: {
            totalPage: function () {
                return Math.ceil(this.totalArticles.length / 10)
            },
            articles: function () {
                return this.totalArticles.slice((this.pageCount - 1) * 10, this.pageCount * 10);
            },
            years: function () {
                var years = [];
                for (let i = 0; i < this.articles.length; i++) {
                    years.push(this.articles[i].date.slice(0, 4))
                }
                return years;
            },
            monthsAndDays: function () {
                var monthsAndDays = [];
                for (let i = 0; i < this.articles.length; i++) {
                    monthsAndDays.push(this.articles[i].date.slice(5, 10))
                }
                return monthsAndDays;
            },
            yearFlags: function () {
                var yearFlag = [true];
                for (let i = 1; i < this.articles.length; i++) {
                    if (this.articles[i - 1].date.slice(0, 4) == this.articles[i].date.slice(0, 4)) {
                        yearFlag.push(false);
                    }
                    else {
                        yearFlag.push(true);
                    }
                }
                return yearFlag;
            }
        },
        route: {
            data: function (transition) {
                var count = parseInt(this.$route.params.count);
                if (count > this.totalPage || count < 1) {
                    transition.redirect('/')
                }
                this.pageCount = count || 1;  //当前页面
                /*this.$http.get('http://localhost/ago_blog/options.php')*/
                setTimeout(function () {
                    var match = document.querySelectorAll('.roll-in');
                    for (let i = 0; i < match.length; i++) {
                        var roll = function (i) {
                            return function () {
                                match[i].className += ' roll-in-ready'
                            };
                        }(i);
                        setTimeout(roll, 200 * i);
                    }
                },10);
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
    #content-archive {
        .posts-expand {
            margin-left: 55px;
            position: relative;
            &:before {
                content: " ";
                position: absolute;
                top: 15px;
                left: 0;
                margin-left: -2px;
                width: 4px;
                height: 100%;
                background: #f5f5f5;
            }
        }
        .collection-title {
            position: relative;
            margin: 60px 0;
            h2 {
                font-weight: bold;
                line-height: 1.5;
                margin-left: 20px;
            }
            &:before {
                content: " ";
                position: absolute;
                left: 0;
                top: 50%;
                margin-left: -4px;
                margin-top: -4px;
                width: 8px;
                height: 8px;
                background: #bbb;
                border-radius: 50%;
            }
        }
        .post {
            margin: 30px 0;
            position: relative;
        }
        .post-date {
            font-size: 12px;
            margin-left: 20px;
        }
        .post-header {
            position: relative;
            border-bottom: 1px dashed #ccc;
            &:hover {
                border-bottom-color: #666;
            }
            &:before {
                content: " ";
                position: absolute;
                left: 0;
                top: 50%;
                width: 6px;
                height: 6px;
                margin-left: -3px;
                margin-top: -3px;
                background: #bbb;
                border-radius: 50%;
                border: 1px solid #fff;
                transition-duration: 0.2s;
                transition-timing-function: ease-in-out;
                transition-delay: 0s;
                transition-property: background;
            }
        }
        .post-title {
            display: inline-block;
            margin-left: 30px;
            font-size: 16px;
            font-weight: normal;
            font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
            line-height: inherit;
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
        .roll-in {
            transition: all 0.5s ease;
            opacity: 0;
            transform: translateY(-10px);
        }
        .roll-in.roll-in-ready {
            opacity: 1;
            transform: translateY(0px)
        }
    }
</style>