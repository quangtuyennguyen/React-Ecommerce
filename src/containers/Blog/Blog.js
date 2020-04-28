import _ from 'lodash';
import React, { Fragment, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';


import { PostList } from '../../components/PostList/PostList';
import { PostSlide } from '../../components/PostSlides/PostSlide';
import { PostItem } from '../../components/PostItem/PostItem';
import { connect } from 'react-redux';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import * as utils from '../../utils';

const Blog = ({ posts, postComments }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 9;
    const total = Math.ceil(posts.length / perPage);
    const start = currentPage * perPage;
    const end = currentPage * perPage + perPage;

    const renderPostItem = () => (
        _.map(posts.slice(start, end), ({
            id, images, title,
            body, tags, useravatar,
            username, date
        }, index) => (
                <LazyLoad
                    key={id}
                    height={200}
                    offset={[-200, 200]}
                >
                    <PostItem
                        id={id}
                        images={index % 2 !== 0 ? images : []}
                        title={title}
                        body={body[0]}
                        tags={tags}
                        useravatar={useravatar}
                        username={username}
                        date={date}
                        totalComments={utils.filterAndCountComments(postComments, id)}
                    />
                </LazyLoad>
            ))
    );

    useEffect(() => {
        document.title = 'Blog - Shopping';
    }, []);

    return (
        posts.length ? (
            <Fragment>
                <BreadCrumb />
                <PostSlide
                    posts={posts.slice(0, 5)}
                    postComments={postComments}
                />
                <PostList
                    total={total}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}>
                    {renderPostItem()}
                </PostList>
            </Fragment>
        ) : null
    );
};

const mapStateToProps = state => ({
    posts: state.posts,
    postComments: state.postComments
});

export default connect(mapStateToProps)(Blog);