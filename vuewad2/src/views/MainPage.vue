<template>
    <div class="mainPage">
        <h1>Feed</h1>
        <div class="sidebar"></div>
        <div class="grid">
            <posts />
        <div class="sidebar"></div>
        <reset-compo></reset-compo>
    </div>
    </div>
</template>

<script>

import Posts from '@/components/Posts.vue';
import ResetCompo from "@/components/Reset.vue";
export default{
    name: "MainPage",
    components: {
        Posts,ResetCompo
        
    }
}
</script>

<style>
*{
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
    background-color: rgb(177, 225, 254);
}
.header {
    top: 0;
    display: flex;
    position: sticky;
    background-color: lightskyblue;
    border-color: rgb(56, 168, 243);
    flex-direction: row;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: 15%;
}
</style>
