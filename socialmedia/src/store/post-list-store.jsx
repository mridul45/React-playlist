import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});


const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
        postListReducer, DEFAULT_POST_LIST
    )

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return <PostList.Provider value={

        {
            postList: postList,
            addPost: addPost,
            deletePost: deletePost
        }

    }>
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going To Mumbai',
        body: 'Hi friends, going on a vacation with family to bandra.',
        reactions: 2,
        userId: 'user-9',
        tags: ['vacation', 'mumbai', 'enjoy']
    },

    {
        id: '2',
        title: 'Graduated!!',
        body: 'A 4 year long story finally comes to an end. Completed my B.TECH from JUIT.',
        reactions: 21,
        userId: 'user-10',
        tags: ['Life','B.TECH','Coming of Age']
    }
]

export default PostListProvider;