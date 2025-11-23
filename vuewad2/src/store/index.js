import { createStore } from 'vuex'

export default createStore({
    strict: false,

    state: {
        postList:[
            {id: 1,author:"peeter",createTime:"October 1, 2025",postImg: null,postText:"Mu isamaaa mu õnn ja rõõm, kui kaunis oled sa!!",likeCount:0},
            {id:2,author:"lily",createTime:"September 25, 2025",postImg: null,postText:"Yo has anyone seen my puma I lost mine...",likeCount:0},
            {id:3,author:"john",createTime:"September 22, 2025",postImg:null,postText:"Just got myself an alarm clock, hope this helps me wake up in the future.",likeCount:0},
            {id:4,author:"Mari",createTime:"September 14, 2025",postImg:null,postText:"This is my drawing of a flower. What do you think?",likeCount:0},
            {id:5,author:"Tom",createTime:"August 29, 2025",postImg:null,postText:"I think my lamp is broken. Does anyone know how to fix it?",likeCount:0},
            {id:6,author:"Meelis",createTime:"August 26, 2025",postImg:null,postText:"I told my friend he needs to touch grass, now everyone is calling me mean. AITA?",likeCount:0},
            {id:7,author:"Maali",createTime:"August 22, 2025",postImg:null,postText:"Should I limit my screen time or is this fine? My friend said I should touch grass, which was mean :(",likeCount:0},
            {id:8,author:"IvoLinnaOfficial",createTime:"August 19, 2025",postImg:null,postText:"hlep.",likeCount:0},
            {id:9,author:"Toomas",createTime:"August 15, 2025",postImg:null,postText:"Have you ever had a dream that you um you you would you could you do you wish you want you could do so  you you want them to do so much you could do anything?  ",likeCount:0},
            {id:10,author:"Mealis",createTime:"August 10, 2025",postImg:null,postText:"Happy new year guys!",likeCount:0}
        ]
    },
    getters: {
   // .map is a higher-order function that creates a new array populated with the results ofcalling a provided function on every element in the calling array. – Lecture 5
        postFeed: state =>{
            var postFeed = state.postList.map(post => {
                return{
                    id: post.id,
                    author: post.author,
                    createTime: post.createTime,
                    postImg: post.postImg,
                    postText: post.postText,
                    likeCount: post.likeCount
                }
            });
            return postFeed
        }
      },
    mutations: {
        increaseLike(state, postId) {
        const post = state.postList.find(p => p.id === postId)
         if (post) post.likeCount++
        },
        resetLikes(state){
            state.postList.forEach(post =>{
                post.likeCount=0;
            })
        }
        /*
        IncreasePrice: state =>{
            state.productList.forEach(product =>{
                product.price += 1;
            })
        },
        DecreasePrice: state => {
            state.productList.forEach(product =>{
                product.price -= 1;
            })
        }
            */
    },
    actions: {
        /*
        IncreasePriceAct: act =>{
            setTimeout(function(){
                act.commit("IncreasePrice")
            }, 1000)
        },
        DecreasePriceAct: act =>{
            setTimeout(function(){
                act.commit("DecreasePrice")
            }, 1000)
        }
            */
    }
})