import moment from 'moment';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CountDown.propTypes = {
  timeEnd: PropTypes.number,
};

CountDown.defaultProps = {
  timeEnd: 0,
};

export default function CountDown({ timeEnd }) {
  const [time, setTime] = useState({
    day: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeEnd);
      const now = moment();
      const countDown = moment(then - now);
      const day = countDown.format('DD');
      const hours = countDown.format('HH');
      const minutes = countDown.format('mm');
      const seconds = countDown.format('ss');
      setTime({ day, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeEnd]);

  const { day, hours, minutes, seconds } = time;
  return (
    <div className="product__stat-group">
      {day && (
        <div className="product__stat-item">
          <span className="product__stat-value">{day}</span>
          <h4 className="product__stat-name">DAYS</h4>
        </div>
      )}
      {hours && (
        <div className="product__stat-item">
          <span className="product__stat-value">{hours}</span>
          <h4 className="product__stat-name">HOURS</h4>
        </div>
      )}
      {minutes && (
        <div className="product__stat-item">
          <span className="product__stat-value">{minutes}</span>
          <h4 className="product__stat-name">MINUTES</h4>
        </div>
      )}
      {seconds && (
        <div className="product__stat-item">
          <span className="product__stat-value">{seconds}</span>
          <h4 className="product__stat-name">SECONDS</h4>
        </div>
      )}
    </div>
  );
}
