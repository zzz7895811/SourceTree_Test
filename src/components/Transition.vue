<template>
    <div>
        <el-button @click="show = !show" type="primary" round>隐藏</el-button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
        </div>

        <Rate v-on:rateClickEvent="rateClick"></Rate>
        <Ecoding></Ecoding>
    </div>
</template>


<script type="es6">
    import Rate from '../../user_components/Rate'
    import Ecoding from './EncodingTest'


    export default {
        data () {
            return {
                show: true
            }
        },
        components: {
            Rate,Ecoding
        },
        methods:{
            rateClick(num) {
                console.log("���:"+num)

            }
        }
    }
</script>

<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
