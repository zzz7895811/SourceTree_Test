<template>
    <div class="block">
        <span class="demonstration">
          评分
            <el-rate
                    v-model="value2"
                    :show-score="showScore"
                    :color="['#99A9BF', '#F7BA2A', '#FF9900']"
                    @change="rateChange"
                    :max="maxScore"
                    ></el-rate>
        </span>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                value2:3.7,
                showScore:true,
                maxScore:10
            }
        },
        methods:{
            rateChange: function (num) {
                this.$emit('rateClickEvent', num)
            }
        }
    }
</script>