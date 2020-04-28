import React from 'react';

import { PostGallery } from './PostGallery/PostGallery';
import { PostContent } from './PostContent/PostContent';
import { PostAction } from './PostAction/PostAction';
import { PostTags } from './PostTags/PostTags';

export const PostDetails = ({
    postCurrent,
    postNears
}) => {
    const { images, body } = postCurrent;
    return (
        <div className="col span_2_of_3 u-md-width-full">
            <div className="post-content">
                <PostGallery images={images} />
                <PostContent body={body} />
                <PostTags />
                <PostAction postNears={postNears} />
            </div>
        </div>
    );
};