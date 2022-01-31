import React from 'react'

const PostItem = ({post}) => {
    return (
        <div className="post">
            <fieldset>
                <legend>{post?.currentTime} {post?.author}</legend>
                <div>{post?.text}</div>
            </fieldset>
        </div>
    );
};

export default PostItem;