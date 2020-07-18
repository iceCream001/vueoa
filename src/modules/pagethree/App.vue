
<template>
    <div id="App" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>