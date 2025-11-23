
<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/">Home</router-link> |
            <router-link :to="'/signup'">Sign-Up</router-link> |
            <router-link :to="'/about'">About</router-link>
        </nav>
    </header>
</template>

<script>
export default{
    name: "HeaderCompo",

}
</script>
<style>
*{
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
}
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: lightskyblue;
}
.header {
    top: 0;
    display: flex;
    position: sticky;
    background-color: lightskyblue;
    border-color: rgb(12, 129, 232);
    flex-direction: row;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: 15%;
}
div header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
   
}
nav a.router-link-exact-active {
  color: #0a61a8;
}
.router-link-active {
  font-weight: bold;
}

</style>