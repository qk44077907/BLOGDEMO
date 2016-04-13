<template>
    <div id="profile">
        <div class="author">
            <img src="../../image/avatar.jpg">
            <p class="name">{{name}}</p>
            <p class="sign">{{sign}}</p>
        </div>
        <div class="state">
            <div class="state-item">
                <a v-link="{ name: 'archive',params:{count:1}}">
                    <span class="state-num">{{articleNum}}</span>
                    <span class="state-name">日志</span>
                </a>
            </div>
            <div class="state-item">
                <a v-link="{ name: 'cate'}">
                    <span class="state-num">{{cateNum}}</span>
                    <span class="state-name">分类</span>
                </a>
            </div>
            <div class="state-item">
                <a v-link="{ name: 'tag'}">
                    <span class="state-num">{{tagNum}}</span>
                    <span class="state-name">标签</span>
                </a>
            </div>
        </div>
        <div class="link">
            <a href="https://github.com/qk44077907" target="_blank">
                <i class="link-icon fa fa-github"></i> GitHub
            </a>
            <a href="http://weibo.com/1179911480" target="_blank">
                <i class="link-icon fa fa-weibo"></i> 新浪微博
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                name: 'Faith',
                sign: 'think more,talk more'
            }
        },
        props: ['articleNum', 'articleTag', 'articleCate'],
        computed: {
            tagNum: function () {
                return Object.keys(this.articleTag).length;
            },
            cateNum: function () {
                return Object.keys(this.articleCate).length;
            }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    @paddinghorizental: 20px;
    #profile {
        clear: left;
        float: left;
        overflow: hidden;
        width: 200px;
        margin-top: 10px;
        padding: 20px 20px;
        background-color: #FFFFFF;
        box-shadow: 8px 8px 12px #888888;
        .author {
            text-align: left;
            img {
                float: left;
                margin-right: 10px;
                max-width: 64px;
                border: 1px solid #eee;
                padding: 2px;
            }
            .name {
                font-weight: 600;
            }
            .sign {
                line-height: 1.6;
                font-size: 13px;
                color: #999;
            }
        }
        .state {
            text-align: center;
            line-height: 1.4;
            .state-item {
                margin-top: 20px;
                display: inline-block;
                padding: 0 15px;
                border-left: 1px solid #ccc;
                &:first-child {
                    border-left: none;
                }
                .state-num {
                    display: block;
                    color: inherit;
                    font-weight: 600;
                    font-size: 16px;
                }
                .state-name {
                    font-size: 13px;
                    color: #999;
                }
            }
        }
        .link {
            margin-top: 20px;
            .link-icon {
                margin-right: 4px;
                font-size: 16px;
            }
            a {
                color: #555;
                display: inline-block;
                width: 40%;
                font-size: 13px;
                margin-right: 0;
                padding: 0 5px;
                text-decoration: none;
                &:hover{
                    background-color: #EEEEEE;
                    border-radius: 4px;
                }

            }
        }
    }
</style>