<template>
    <footer id="footer" >
        <div class="footer-inner">
            <div class="copyright">
                ©
                <span class="copyrightYear">2016</span>
                <span class="with-love">
                    <i class="fa fa-heart"></i>
                </span>
                <span class="author">Faith</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
    }
</script>

<style lang=less rel="stylesheet/less">
    #footer {
        margin-top: 70px;
        min-height: 50px;
        font-size: 14px;
        text-align: center;
        color: #999;
        .with-love{
            color: #c60000;
        }
        .footer-inner{
            position: relative;
            left: 130px;
        }
    }

</style>