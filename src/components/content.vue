<template>
    <div id="content">
        <router-view
                :total-articles="totalArticles"
                :article-tag="articleTag"
                :article-cate="articleCate"
                :search-text="searchText"
                transition="slide-in-top"
                transition-mode="out-in">
        </router-view>
    </div>
</template>

<script>
    export default {
        props: ['totalArticles','articleTag','articleCate','searchText']
    }
</script>

<style lang=less rel="stylesheet/less">
    #content {
        display: inline-block;
        box-sizing: border-box;
        padding: 80px 40px 40px 40px;
        width: 700px;
        background: #fff;
        min-height: 700px;
        box-shadow: 8px 8px 12px #888888;
    }
</style>