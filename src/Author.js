import React, {useState} from 'react'
import PostForm from "./components/Post/PostForm/PostForm"
import './styles/App.css'
import {useDispatch, useSelector} from "react-redux"
import {removePost} from "./features/posts/postsSlice";
import PostList from "./components/Post/PostList/PostList";
import MyButton from "./components/UI/button/MyButton";

const Author = () => {
    console.log('author')
    const [showAddForm, setShowAddForm] = useState(false)
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()
    const removePostHandler = (id) => {
        dispatch(removePost(id))
    }
    const handleShowForm = () => {
        setShowAddForm(true)
    }
    const handleHideForm = () => {
        alert('Are you sure?')
        setShowAddForm(false)
    }
    const handleHideFormSuccess = () => {
        setShowAddForm(false)
    }
    return (
        <>
            {
                showAddForm ?
                    <>
                        <div className="addPostForm">
                            <PostForm handleHideForm={handleHideForm} handleHideFormSuccess={handleHideFormSuccess}/>
                        </div>
                        <div className="overlay" onClick={handleHideForm}></div>
                    </>
                    : null
            }
            <MyButton onClick={handleShowForm}>Add new tweet</MyButton>
            <PostList posts={posts} removePostHandler={removePostHandler}/>
        </>
    );
};

export default Author;