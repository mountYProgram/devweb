<template>
    <div id="main" style="width: 100%;height: 500px" class="data-container">
        
    </div>
</template>

<script>
	export default {
		data() {
            return {
                
            }
        },
        computed: {

        },
        methods: {
        },
        mounted() {
            let myChart = this.$echarts.init(document.getElementById('main'));
            let option = {
                title: {
                    text: '一周气温'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['气温']
                },
                // 右上角工具栏
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: []
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [
                    {
                        name: '平均温度',
                        type: 'line',
                        data: [],
                        markPoint: {
                            data: [
                                
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        },
                        itemStyle : { normal: {label : {show: true}}}
                    }
                ]
            };
            this.$axios.get('/weather').then(res => {
                res.data.result.future.forEach((v, k) => {
                    option.xAxis.data.push(v.week);
                    let avgWeather = eval(v.temperature.replace(/℃/g, '').replace(/~/g, '+'));
                    option.series[0].data.push(avgWeather);
                });
                myChart.setOption(option);
            }).catch(err => {

            });
        }
	}

</script>

<style scope>

</style>