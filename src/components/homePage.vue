<template>
    <el-container>
        <el-header>
            <home-header></home-header>
        </el-header>
        <el-main>
            <home-content></home-content>
        </el-main>
        <el-footer>
            <p>京ICP备16059678号</p>
        </el-footer>
    </el-container>
</template>
<script>
import homeHeader from './header.vue';
import homeContent from './homenContent.vue';
export default {
    components:{
        homeHeader,
        homeContent
    },
    data(){
        return{

        }
    },
    methods: {
        
    },
    created() {
        this.$message('李健的个人空间欢迎你');
    },
}
</script>
<style lang='less' scoped>
    .el-header{
        padding:0;
    }
    .el-main{
        padding: 0;
        max-width: 1920px;
        margin: 0 auto;
        width: 100%;
        overflow: auto;
    }
    @media screen and (max-width: 1920px) {
        .el-main{
            width: 1920px;
        }
    }
    @media screen and (min-width: 1280px) {
        .el-main{
            min-width: 1280px;
            max-width:1920px;
        }
    }
    @media screen and (max-width: 1280px) {
        .el-main{
           width: 1280px;
        }
    }
    .el-footer{
        position: fixed;
        left:0;
        bottom:0;
        right:0;
        background:gray;
        height:auto;
        color:white;
        font-size:12px;
    }
</style>


