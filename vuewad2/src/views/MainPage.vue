<template>
    <div class="mainPage">
        <header-compo></header-compo>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is the main page</h1>
        <div class="grid">
        <div class="sidebar"></div>
        <post-compo></post-compo>
        <div class="sidebar"></div>
    </div>
    <footer-compo></footer-compo>
    </div>
</template>

<script>
import HeaderCompo from "@/components/Header.vue"
import FooterCompo from "@/components/Footer.vue"
import PostCompo from "@/components/Posts.vue";
export default{
    name: "MainPage",
    components: {
        HeaderCompo,PostCompo, FooterCompo
    }
}
</script>

<style>
.grid{
    display: grid;
    grid-template-rows: auto;
    padding-bottom: 1%;
    padding-top: 1%;
    grid-template-columns: 18% 60% 18%;
    gap: 2%;
}
</style>
