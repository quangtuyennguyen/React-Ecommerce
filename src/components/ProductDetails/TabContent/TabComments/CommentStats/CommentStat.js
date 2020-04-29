import _ from 'lodash';
import React from 'react';
import Progress from '../../../../../commons/Progress/Progress';
import { countRating } from '../../../../../utils';

export const CommentStat = ({ comments, totalComment }) => {
  const progress = [
    {
      rating: 5,
      strokeColor: '#42d697',
      trailColor: '#f6f9fc',
    },
    {
      rating: 4,
      strokeColor: '#fe6975',
      trailColor: '#f6f9fc',
    },
    {
      rating: 3,
      strokeColor: '#fed700',
      trailColor: '#f6f9fc',
    },
    {
      rating: 2,
      strokeColor: '#83b735',
      trailColor: '#f6f9fc',
    },
    {
      rating: 1,
      strokeColor: '#fea569',
      trailColor: '#f6f9fc',
    },
  ];

  const renderProgresses = () =>
    _.map(progress, ({ rating, strokeColor, trailColor }) => (
      <Progress
        end={(countRating(comments, rating) / totalComment) * 100}
        key={rating}
        rating={rating}
        strokeColor={strokeColor}
        trailColor={trailColor}
        amount={countRating(comments, rating)}
      />
    ));
  return renderProgresses();
};
