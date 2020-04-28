import React from 'react';

export const TabInfo = ({ totalComment, totalRating }) => (
    <div className="tab__vendor moveToTop">
        <div className="vendor">
            <h3 className="heading-title--main">Vendor Information</h3>
            <p className="vendor__desc">Store name: Your store name</p>
            <h5 className="vendor__address">
                Address: <span>Your address</span>
            </h5>
            <p className="vendor__desc">{`${totalRating} rating from ${totalComment} ${totalComment > 1 ? 'reviews' : 'review'}`}</p>
        </div>
    </div>
);