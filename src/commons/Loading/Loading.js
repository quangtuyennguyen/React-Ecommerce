import React from 'react';
import { connect } from 'react-redux';
import LoadingGif from '../../assets/images/global-loading.gif';

function Loading({ isOpenLoading }) {
    return (
        isOpenLoading ? (
            <div className="loading-wrapper">
                <div className="loading-box">
                    <img className="loading__image" src={LoadingGif} alt="" />
                </div>
            </div>
        ) : null
    );
};

const mapStateToProps = state => ({
    isOpenLoading: state.loading
});
export default connect(mapStateToProps)(Loading);