import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard />
        <CommentDetail postImage={faker.image.avatar()} author="Sam" timeAgo="Today at 5:00PM" textPost="Good Post!"/>
        <CommentDetail postImage={faker.image.avatar()} author="Alex" timeAgo="Today at 1:00AM" textPost="Very Creative!!"/>
        <CommentDetail postImage={faker.image.avatar()} author="Jane" timeAgo="Today at 10:00PM" textPost="Love it!"/>
        <CommentDetail postImage={faker.image.avatar()} author="Jane" timeAgo="Today at 10:00PM" textPost="Love it!"/>

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))