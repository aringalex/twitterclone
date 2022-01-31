import React from 'react'
import {useDispatch} from 'react-redux'
import {addPost} from '../../../features/posts/postsSlice'
import {v4} from 'uuid'
import MyTextArea from "../../UI/textarea/MyTextArea";
import MyButton from "../../UI/button/MyButton";
import classes from './PostForm.module.css'

const PostForm = ({handleHideForm, handleHideFormSuccess}) => {
    const dispatch = useDispatch()
    const [postValue, setPostValue] = React.useState('')

    const addPostHandler = () => {
        const post = {
            id: v4(),
            author: 'John Doe',
            currentTime: new Date().toLocaleString(),
            text: postValue
        }
        dispatch(addPost(post))
        setPostValue('')
    }
    const submitPostForm = (e) => {
        e.preventDefault()
        addPostHandler()
        handleHideFormSuccess()
    }
    const hidePostForm = (e) => {
        e.preventDefault()
        handleHideForm()
    }

    return (
        <form>
            <label>
                Add a tweet
                <MyButton type="button" className={classes.closeBtn} onClick={hidePostForm}>X</MyButton>
                <MyTextArea
                    type="text"
                    rows="5"
                    cols="30"
                    name="text"
                    value={postValue} placeholder="Type something..."
                    onChange={(e) => setPostValue((e.target.value).trim())}/>
            </label>
            <MyButton type="submit" disabled={!postValue} onClick={submitPostForm}>Submit
            </MyButton>
        </form>
    );
};

export default PostForm;