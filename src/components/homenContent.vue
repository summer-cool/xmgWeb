<template>
    <div class="content-top">
        <div class="block">
            <el-carousel height="600px">
            <el-carousel-item v-for="item in imgs" :key="item">
                <img :src="item.src" :alt="item.title">
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs:[{
            src:require("../asset/images/mainContent/css3.jpg"),
            title:"css3"
        },{
            src:require("../asset/images/mainContent/html5.jpg"),
            title:"html5"
        },{
            src:require("../asset/images/mainContent/js.jpg"),
            title:"js"
        },{
            src:require("../asset/images/mainContent/node.jpg"),
            title:"node"
        }]
      }
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      }
    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
    .content-top{
        height:600px;
        width:100%;
    }
    .el-carousel__item img{
        height:100%;
        width:100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>