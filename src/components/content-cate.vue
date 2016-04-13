<template xmlns="http://www.w3.org/1999/html">
    <div id="content-cate">
        <ul>
            <li v-for="(key, val) in articleCate">
                <a  class="cates"
                    v-link="{ name: 'filtered', params: { filterField: 'cate',filterName:key,count:1 }}">
                    {{key}}</a>
                <span class="num">({{val}})</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        props: ['articleCate']
    }
</script>

<style lang=less rel="stylesheet/less">
    #content-cate {
        .cates {
            color: #555;
            text-decoration: none;
            border-bottom: 1px solid #999;
            word-wrap: break-word;
            &:hover {
                border-bottom-color: #222;
            }
        }
        .num{
            color: #bbb;
        }
    }
</style>