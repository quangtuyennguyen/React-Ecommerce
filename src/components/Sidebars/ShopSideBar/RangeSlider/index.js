import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

RangeSlider.propTypes = {
  range: PropTypes.object,
  setRange: PropTypes.func.isRequired,
  filterByRange: PropTypes.func.isRequired,
};

RangeSlider.defaultProps = {
  range: {},
};

export default function RangeSlider({ range, setRange, filterByRange }) {
  const [isFilter, setIsFiter] = useState(false);
  const handeChange = event => {
    let { value, name } = event.target;
    if (!value) {
      value = 0;
    }
    setRange({
      ...range,
      [name]: value,
    });
    setIsFiter(true);
  };

  const { min, max } = range;
  useEffect(() => {
    isFilter && filterByRange(range);
  }, [filterByRange, range, isFilter]);

  const handleFilterByRange = value => {
    setIsFiter(false);
    setRange(value);
  };

  return (
    <form
      method="dialog"
      style={{ overflow: 'visible', margin: 0 }}
      className="form"
    >
      <InputRange
        draggableTrack
        maxValue={1000}
        minValue={0}
        onChange={value => handleFilterByRange(value)}
        onChangeComplete={() => filterByRange(range)}
        formatLabel={range => `${range} $`}
        value={range}
      />
      <div className="u-d-flex-center shopsidebar__quantity-box">
        <input
          onChange={handeChange}
          type="text"
          name="min"
          className="input-range__min"
          autoComplete="off"
          value={`${min ? min : ''}`}
        />
        <input
          onChange={handeChange}
          type="text"
          name="max"
          className="input-range__max"
          autoComplete="off"
          value={`${max ? max : ''}`}
        />
      </div>
    </form>
  );
}
