import React from 'react';
import PostItem from "../PostItem/PostItem";
import MyButton from "../../UI/button/MyButton";

const PostList = ({posts, removePostHandler}) => {
    return (
        <>
            <h2>Tweets</h2>
            {
                posts?.map((post) => {
                    if (removePostHandler) {
                        return (
                            <div key={post.id}>
                                <PostItem post={post}/>
                                <MyButton onClick={() => removePostHandler(post.id)}>Delete</MyButton>
                            </div>
                        )
                    }
                    return (
                        <PostItem key={post.id} post={post}/>
                    )

                })

            }
        </>
    );
};

export default PostList;