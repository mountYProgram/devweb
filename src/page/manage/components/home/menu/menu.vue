<template>
	<el-menu
        :default-active="$route.path"
        class="el-menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>

        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">天气</span>
        </el-menu-item>

        <el-menu-item index="/formlist">
            <i class="el-icon-setting"></i>
            <span slot="title">列表</span>
        </el-menu-item>

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
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
        	handleOpen() {
        		console.log(111);
        	},
        	handleClose() {
        		console.log(222);
        	}
        }
	}

</script>

<style scope>
	.el-menu {
		min-height: 100%;
	}

</style>