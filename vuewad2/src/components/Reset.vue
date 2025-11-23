<template>
    <div class="reset-button">
        <button @click="resetLikes" class="reset">
            Reset
        </button>
    </div>
</template>

<script>

export default({
    name: "ResetCompo",
    methods: {
        resetLikes() {
            this.$store.commit('resetLikes');
        }
    }
})
</script>

<style scoped>
.reset{
    padding:3%;
    background-color:blue;
    text-align: center;
}
</style>