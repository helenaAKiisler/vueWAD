<template>
    <header class="header">
        <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">SignUpPage</router-link> |
        <router-link to="/about">About</router-link>
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
.header{
    background-color: lightskyblue;
}
div header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
   
}

</style>