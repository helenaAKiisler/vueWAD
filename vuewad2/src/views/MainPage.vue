<template>
    <div class="mainPage">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is the main page</h1>
        <div class="grid">
            <posts />
        <div class="sidebar"></div>
        <div class="sidebar"></div>
    </div>
<<<<<<< HEAD
=======
    <reset-compo></reset-compo>
    <footer-compo></footer-compo>
>>>>>>> 69690fb0449ae6256ab0410c3584fb297cce54e4
    </div>
</template>

<script>
<<<<<<< HEAD
import Posts from '@/components/Posts.vue';
export default{
    name: "MainPage",
    components: {
        Posts
=======
import HeaderCompo from "@/components/HeaderCompo.vue"
import FooterCompo from "@/components/Footer.vue"
import PostCompo from "@/components/Posts.vue";
import ResetCompo from "@/components/Reset.vue";
export default{
    name: "MainPage",
    components: {
        HeaderCompo,PostCompo,ResetCompo, FooterCompo
>>>>>>> 69690fb0449ae6256ab0410c3584fb297cce54e4
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
.grid{
    display: grid;
    grid-template-rows: auto;
    padding-bottom: 1%;
    padding-top: 1%;
    grid-template-columns: 18% 60% 18%;
    gap: 2%;
}
</style>
