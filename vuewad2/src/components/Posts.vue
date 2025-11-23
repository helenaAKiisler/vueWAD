<template>
    <div class = "posts">
        <div class = "sidebar"></div>
        <ul class = "feed">
            <li class="post" v-for = "post in postFeed" :key="post.id">
                <div class="postHeader">
                    <span>{{ post.author }}</span>
                    <span>{{ post.createTime }}</span>
                </div>
                <div class="postBody">
                    <span>{{ post.postText }}</span>
                    </div>
                <div class ="postFooter">
                    <button @click=IncreaseCount(post.id)><img :src="likeImg" class="like" /></button>
                    {{ post.likeCount }}
                </div>
            </li>
        </ul>
        <div class = "sidebar"></div>
    </div>
</template>

<script>
import likeImg from "@/assets/like.png"
export default{
    name:"PostCompo",
    data: function(){
        return{likeImg}
    },
    computed:{
        postFeed(){
            return this.$store.getters.postFeed
        },
    },
    methods:{
    IncreaseCount(id) {
    this.$store.commit("increaseLike", id)
    }
    }
}

</script>

<style scoped>
.feed {
    list-style: none;
    padding-bottom: 1%;
    padding-top: 1%;
    grid-template-columns: 18% 60% 18%;
    gap: 2%;
}
.post{
    display:flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #e48f9f;
    padding-top: 2%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 2%;
    margin-bottom: 5%;
}
.postHeader{
    padding:2%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.postFooter{
    padding:2%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.like{
    width: 20px;
    height: 20px;
    object-fit: contain;
}
</style>
