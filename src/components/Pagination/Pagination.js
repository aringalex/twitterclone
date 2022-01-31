import React from 'react';
import MyButton from "../UI/button/MyButton";

const Pagination = ({tweetsPerPage, totalTweets, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalTweets/tweetsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map(number =>(
                    <MyButton key={number}>
                        <a href="#" onClick={() => paginate(number)}>{number}</a>
                    </MyButton>
                ))
            }
        </div>
    );
};

export default Pagination;