<template>
    <div>
    <div>
        时间选择123456:
        <el-date-picker
                :picker-options="pickerOptions1"
                v-model="value1"
                @change="change"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd">
        </el-date-picker>
    </div>
    <div>
        时间范围选择:
        <el-date-picker
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                v-model="value2"
                type="daterange"
                :default-time="['00:00:00', '23:59:59']"
                @change="change"
                value-format="yyyy-MM-dd"
                >
        </el-date-picker>
    </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                pickerOptions1: {
                    disabledDate(time){
                        var nd = Date.now();
                        nd = nd + 7 * 24 * 60 * 60 * 1000;
                        nd = new Date(nd);
                        return time.getTime() < Date.now() || time.getTime() > nd;
                    }
                },
                value1: '',
                value2: '',
            }
        },
        methods:{
            change(times)
            {
                console.log(times)
            }
        }
    }
</script>
