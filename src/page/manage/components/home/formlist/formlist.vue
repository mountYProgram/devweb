<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人1">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份" > </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
            <el-table-column label="操作">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="total"
                @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                total: 0
            }
        },
        components: {
        },
        computed: {
            tableData() {
                return this.$store.state.test.tableData;
            }
        },
        mounted() {
            this.getListData();
            const _this = this;
            // 利用axios是一个promise对象，提供的all方法来解决所有ajax请求完成后进行操作， jquery中可使用$.when方法
            this.$axios.all([_this.getTestApi1(), _this.getTestApi2()]).then(_this.$axios.spread(function(res1, res2) {
                console.log(res1, res2);
            }));
        },
        methods: {
            getTestApi1() {
                console.log('请求1');
                return this.$axios.get('/historyWeather/province');
            },
            getTestApi2() {
                console.log('请求2');
                return this.$axios.get('/historyWeather/province');
            },
            onSubmit() {
                this.getListData();
            },
            currentChange(currentPage) {
                this.getListData();
            },
            getListData() {
                this.$axios.get('/manage').then(res => {
                    let result = res.data;
                    this.$store.dispatch('updateData', result.data.tableData);
                    this.total = result.data.tableData.length;
                }).catch(err => {
                    console.log('error', err);
                });
            }
        }
    }
</script>

<style scope>

</style>