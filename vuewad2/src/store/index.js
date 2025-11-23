import { createStore } from 'vuex'

export default createStore({
    strict: false,

    state: {
        postList:[
            {id: 1,author:"peeter",createTime:"October 1, 2025",postImg: null,postText:"Mu isamaaa mu õnn ja rõõm, kui kaunis oled sa!!",likeCount:0},
            {id:2,author:"lily",createTime:"September 25, 2025",postImg: null,postText:"Yo has anyone seen my puma I lost mine...",likeCount:0}
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