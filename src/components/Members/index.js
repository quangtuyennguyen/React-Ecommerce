import _ from 'lodash';
import React from 'react';

import MemberItem from '../MemberItem';
import { MEMBERS } from '../../constants';

export default function Member() {
  const renderMembers = () =>
    _.map(MEMBERS, ({ name, department, image }) => (
      <MemberItem
        key={name}
        name={name}
        department={department}
        image={image}
      />
    ));

  const renderRows = () => {
    const result = [];
    const memberPerRow = 4;
    const rows = renderMembers().length / memberPerRow;
    for (let i = 0; i < rows; i++) {
      result.push(
        <div key={i} className="row members">
          {renderMembers().slice(
            memberPerRow * i,
            memberPerRow * i + memberPerRow,
          )}
        </div>,
      );
    }
    return result;
  };

  return (
    <section id="section-team">
      <div className="row u-center-text">
        <div className="heading-title u-margin-center">
          <span className="heading-title--sub heading-title--sub--bold">
            ANGELS
          </span>
          <h4 className="heading-title--main">Meet with our Team</h4>
        </div>
      </div>
      {renderRows()}
    </section>
  );
}
