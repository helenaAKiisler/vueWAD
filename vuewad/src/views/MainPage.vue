<template>
    <div class="mainPage">
        <header-compo></header-compo>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is the main page</h1>
        <footer-compo></footer-compo>
    </div>
</template>

<script>
import HeaderCompo from "@/components/Header.vue"
import FooterCompo from "@/components/Footer.vue"
export default{
    name: "MainPage",
    components: {
        HeaderCompo, FooterCompo
    }
}
</script>

<style>

</style>