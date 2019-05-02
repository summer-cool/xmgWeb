<template>
    <el-container>
        <el-header>
            <home-header></home-header>
        </el-header>
        <el-main></el-main>
        <el-footer>
            <p>京ICP备16059678号</p>
            <p>联系方式：wx&qq372248701  tel:15726687682</p>
        </el-footer>
    </el-container>
</template>
<script>
import homeHeader from './header.vue';
export default {
    components:{
        homeHeader
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


