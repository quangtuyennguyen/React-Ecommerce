import _ from 'lodash';
import React from 'react';

import { PostList } from './PostList/PostList';
import { PostItem } from './PostItem/PostItem';

export const PostRelated = ({ otherPosts }) => {
    const renderPostItem = () => (
        _.map(otherPosts, ({ id, title, body, images, date, username }) => (
            <PostItem
                key={id}
                id={id}
                title={_.capitalize(title)}
                body={body[0]}
                image={images[0]}
                date={date}
                username={username}
            />
        ))
    );

    return (
        <PostList>
            {renderPostItem()}
        </PostList>
    );
};
