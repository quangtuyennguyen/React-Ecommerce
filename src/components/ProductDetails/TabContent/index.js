import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actions from '../../../actions';
import { countTotalRating, filterProductComments } from '../../../utils';
import CommentList from './TabComments/CommentList';
import TabDescription from './TabDescription';
import TabInfo from './TabInfo';

TabContent.propTypes = {
  productComments: PropTypes.array,
  sortComments: PropTypes.func.isRequired,
};

TabContent.defaultProps = {
  productComments: [],
};

function TabContent({ productComments: comments, sortComments }) {
  const { id } = useParams();
  const totalComment = filterProductComments(comments, id).length;

  const tabs = [
    {
      tab: 'Description',
      component: <TabDescription />,
    },
    {
      tab: `Reviews (${totalComment})`,
      component: (
        <CommentList productCurrentId={id} sortComments={sortComments} />
      ),
    },
    {
      tab: 'Vendor Info',
      component: (
        <TabInfo
          totalRating={countTotalRating(filterProductComments(comments, id))}
          totalComment={totalComment}
        />
      ),
    },
  ];

  const [indexTabCurrent, setIndexTabCurrent] = useState(0);
  const [MyComponent, setMyComponent] = useState(<TabDescription />);
  const handleChangeTab = (index, component) => {
    setIndexTabCurrent(index);
    setMyComponent(component);
  };

  const renderTabs = () =>
    _.map(tabs, ({ tab, component }, index) => (
      <li key={tab} className="tab__item">
        <span
          onClick={() => handleChangeTab(index, component)}
          className={classnames('tab__link', {
            'tab__link--active': index === indexTabCurrent,
          })}
        >
          {tab}
        </span>
      </li>
    ));

  return (
    <section id="section-wrapper-tabs">
      <div className="row u-border">
        <div className="tabs__heading  u-underline u-margin-bottom-medium">
          <ul className="tabs__list u-d-flex-left">{renderTabs()}</ul>
        </div>
        <div className="tabs-content">
          <div className="tab">{MyComponent}</div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  productComments: state.productComments,
});

export default connect(mapStateToProps, actions)(TabContent);
