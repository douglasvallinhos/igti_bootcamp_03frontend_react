import React from 'react';
import CountUp from 'react-countup';

export default function Percentage(props) {
  return (
    <div>
      <CountUp
        start={props.previousPercentage || 0}
        end={props.value}
        duration={0.6}
        separator=""
        decimals={2}
        decimal=","
        prefix=""
        suffix="%"
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
}
