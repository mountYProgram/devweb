<template>
    <el-container class="home-container">
        <el-aside class="menu-container">
            <Menu></Menu>
        </el-aside>
        <el-container>
            <el-header class="header">
            
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import './home.css';
    import Menu from './menu/menu.vue';
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        components: {
            Menu
        },
        computed: {
            
        },
        methods: {
            
        },
        mounted() {
          
        }
    }
</script>

<style lang="scss" rel="text/css" scope>
    .home-container {
        height: 100%;
        .el-header {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }
    }
    
</style>