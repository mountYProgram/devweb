<template>
    <div class="container">
        <Home></Home>
    </div>
</template>

<script>
    import '../../asset/base.css';
    import Home from './components/home/home.vue';

    export default {
        data() {
            return {
            }
        },
        components: {
            Home
        },
        computed: {
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scope>
    .container {
        height: 100%;
    }
</style>