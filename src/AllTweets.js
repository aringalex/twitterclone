import React, {useState} from 'react'
import {useSelector} from "react-redux"
import PostItem from "./components/Post/PostItem/PostItem";
import Pagination from "./components/Pagination/Pagination";
import PostList from "./components/Post/PostList/PostList";
import MyButton from "./components/UI/button/MyButton";

const AllTweets = () => {
    console.log('tweets')
    const  posts = useSelector((state) => state.posts.posts)

    const [currentPage, setCurrentPage] = useState(1)
    const [tweetsPerPage] = useState(3)

    const lastTweetIndex = currentPage * tweetsPerPage
    const firstTweetIndex = lastTweetIndex - tweetsPerPage
    const currentTweet = posts.slice(firstTweetIndex, lastTweetIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage((prev) => {
        return prev === Math.ceil(posts.length / tweetsPerPage) ? prev : prev + 1
    })
    const prevPage = () => setCurrentPage(prev => prev === 1 ? 1 : prev - 1)

return (
    <>
        <PostList posts={currentTweet}/>
        <Pagination tweetsPerPage={tweetsPerPage} totalTweets={posts.length} paginate={paginate}/>
        <MyButton onClick={prevPage}>Prev Page</MyButton>
        <MyButton onClick={nextPage}>Next Page</MyButton>
    </>
);
}
;

export default AllTweets;