import _ from 'lodash';
import React from 'react';
import Progress from '../../../../../commons/Progress';
import { countRating } from '../../../../../utils';
import { progress } from '../../../../../constants';

export default function CommentStat({ comments, totalComment }) {
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
}
