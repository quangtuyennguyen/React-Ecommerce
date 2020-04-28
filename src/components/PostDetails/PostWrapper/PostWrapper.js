import React from 'react'

import { PostSideBar } from '../../Sidebars/PostSideBar/PostSideBar';
import { PostDetails } from '../../../components/PostDetails/PostDetails';

export const PostWrapper = ({
    postCurrent, otherPosts,
    postNears
}) => (
    <section id="section-post-details">
    <div className="row">
        <PostDetails
            postCurrent={postCurrent}
            postNears={postNears}
        />
        <PostSideBar
            otherPosts={otherPosts}
        />
    </div>
</section>      
);