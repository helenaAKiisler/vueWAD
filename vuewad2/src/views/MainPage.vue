<template>
  <div class="mainPage">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is the main page</h1>
  </div>
</template>

<script>
export default {
  name: "MainPage"
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