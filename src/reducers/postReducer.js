import {
    SET_RECENT_POSTS, 
    SET_RESULTS_POSTS
} from "../actions/types"
import recentPost from "../components/recentPost";


const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                ...state, 
                recentPosts
            }

            case SET_RESULTS_POSTS:
                const resultsPosts = action.payload;
                return{
                    ...state,
                    resultsPosts
                }
    
        default:
            return state;
    }
}