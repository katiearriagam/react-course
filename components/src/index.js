import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h1>Warning!</h1>
                <div>Are you sure?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00PM" 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 10:00AM" 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
